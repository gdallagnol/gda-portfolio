/**
 * Converte PNG e JPG de src/assets para WebP, mantendo o nome do arquivo.
 * Usa o sharp, que ja vem instalado junto com o Astro.
 *
 * Uso:
 *   node scripts/converter-imagens.mjs           lista o que seria convertido
 *   node scripts/converter-imagens.mjs --aplicar converte de verdade
 *
 * GIF animado nao e convertido: o sharp perde a animacao.
 */

import { readdir, stat, unlink } from 'node:fs/promises';
import { join, extname, dirname, basename } from 'node:path';
import sharp from 'sharp';

const RAIZ = 'src/assets';
const LARGURA_MAXIMA = 2500;
const QUALIDADE = 80;
const aplicar = process.argv.includes('--aplicar');

async function listarArquivos(dir) {
  const entradas = await readdir(dir, { withFileTypes: true });
  const arquivos = [];

  for (const entrada of entradas) {
    const caminho = join(dir, entrada.name);
    if (entrada.isDirectory()) {
      arquivos.push(...(await listarArquivos(caminho)));
    } else if (['.png', '.jpg', '.jpeg'].includes(extname(entrada.name).toLowerCase())) {
      arquivos.push(caminho);
    }
  }

  return arquivos;
}

function formatar(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

const arquivos = await listarArquivos(RAIZ);
let antes = 0;
let depois = 0;

for (const arquivo of arquivos) {
  const info = await stat(arquivo);
  const destino = join(dirname(arquivo), `${basename(arquivo, extname(arquivo))}.webp`);

  const imagem = sharp(arquivo);
  const meta = await imagem.metadata();

  const buffer = await imagem
    .resize({ width: Math.min(meta.width ?? LARGURA_MAXIMA, LARGURA_MAXIMA), withoutEnlargement: true })
    .webp({ quality: QUALIDADE })
    .toBuffer();

  antes += info.size;
  depois += buffer.length;

  const reducao = Math.round((1 - buffer.length / info.size) * 100);
  console.log(`${arquivo}\n  ${formatar(info.size)} -> ${formatar(buffer.length)}  (${reducao}% menor)`);

  if (aplicar) {
    await sharp(buffer).toFile(destino);
    if (destino !== arquivo) await unlink(arquivo);
  }
}

console.log(`\nTotal: ${formatar(antes)} -> ${formatar(depois)}`);
if (!aplicar) console.log('\nNada foi alterado. Rode com --aplicar para converter.');
