/**
 * Reprocessa os WebP grandes de src/assets, reduzindo largura e qualidade.
 * Ignora arquivos que ja estao pequenos e os que nao encolhem.
 *
 * Uso:
 *   node scripts/otimizar-webp.mjs           lista o que seria feito
 *   node scripts/otimizar-webp.mjs --aplicar aplica de verdade
 */

import { readdir, stat, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const RAIZ = 'src/assets';
const LARGURA_MAXIMA = 2000;
const QUALIDADE = 78;
const LIMITE_BYTES = 300 * 1024; // so mexe em arquivos acima de 300 KB
const aplicar = process.argv.includes('--aplicar');

async function listar(dir) {
  const entradas = await readdir(dir, { withFileTypes: true });
  const arquivos = [];
  for (const entrada of entradas) {
    const caminho = join(dir, entrada.name);
    if (entrada.isDirectory()) arquivos.push(...(await listar(caminho)));
    else if (extname(entrada.name).toLowerCase() === '.webp') arquivos.push(caminho);
  }
  return arquivos;
}

const mb = (b) => `${(b / 1024 / 1024).toFixed(2)} MB`;

const arquivos = await listar(RAIZ);
let antes = 0;
let depois = 0;
let mexidos = 0;

for (const arquivo of arquivos) {
  const info = await stat(arquivo);
  if (info.size < LIMITE_BYTES) {
    antes += info.size;
    depois += info.size;
    continue;
  }

  const imagem = sharp(arquivo);
  const meta = await imagem.metadata();

  // Imagem animada nao e reprocessada: o sharp perderia os quadros.
  if ((meta.pages ?? 1) > 1) {
    antes += info.size;
    depois += info.size;
    console.log(`${arquivo}\n  animada, ignorada`);
    continue;
  }

  const buffer = await imagem
    .resize({ width: Math.min(meta.width ?? LARGURA_MAXIMA, LARGURA_MAXIMA), withoutEnlargement: true })
    .webp({ quality: QUALIDADE })
    .toBuffer();

  antes += info.size;

  if (buffer.length >= info.size) {
    depois += info.size;
    console.log(`${arquivo}\n  ja esta otimizado, mantido`);
    continue;
  }

  depois += buffer.length;
  mexidos += 1;
  const reducao = Math.round((1 - buffer.length / info.size) * 100);
  console.log(`${arquivo}\n  ${mb(info.size)} -> ${mb(buffer.length)}  (${reducao}% menor)`);

  if (aplicar) await writeFile(arquivo, buffer);
}

console.log(`\n${mexidos} arquivos alterados`);
console.log(`Total: ${mb(antes)} -> ${mb(depois)}`);
if (!aplicar) console.log('\nNada foi alterado. Rode com --aplicar para converter.');
