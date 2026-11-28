import * as THREE from 'three';

/* =========================================================
   Escultura de vidro líquido
   Todos os parâmetros ajustáveis estão em CONFIG.
   ========================================================= */
export const CONFIG = {
  // 'trefoil' = nó entrelaçado da versão anterior; 'custom' = percurso livre definido em points
  shape: 'trefoil',
  // Percurso da escultura (curva fechada). x: direita, y: cima, z: em direção ao observador
  points: [
    [-0.352,  0.715,  0.000],
    [-0.165,  0.502,  0.140],
    [-0.152,  0.203,  0.210],
    [-0.028, -0.048,  0.210],
    [ 0.223, -0.135,  0.210],
    [ 0.435,  0.003,  0.140],
    [ 0.485,  0.228,  0.140],
    [ 0.347,  0.427,  0.140],
    [ 0.147,  0.352,  0.280],
    [ 0.060,  0.102,  0.630],
    [ 0.147, -0.223,  0.770],
    [ 0.185, -0.547,  0.700],
    [-0.003, -0.760,  0.630],
    [-0.352, -0.797,  0.560],
    [-0.677, -0.573,  0.420],
    [-0.815, -0.172,  0.280],
    [-0.703,  0.177,  0.070],
    [-0.427,  0.302, -0.350],
    [ 0.022,  0.240, -0.490],
    [ 0.422,  0.128, -0.420],
    [ 0.647,  0.077, -0.210],
    [ 0.797,  0.352,  0.070],
    [ 0.785,  0.652,  0.140],
    [ 0.660,  0.802,  0.070],
    [ 0.522,  0.677,  0.070],
    [ 0.472,  0.427,  0.210],
    [ 0.460,  0.102,  0.210],
    [ 0.347, -0.160,  0.000],
    [-0.003, -0.198, -0.210],
    [-0.352, -0.022, -0.210],
    [-0.565,  0.253, -0.070],
    [-0.590,  0.552, -0.070],
    [-0.502,  0.690,  0.000],
  ],
  scale: 1.7,
  depth: 1.0,            // multiplica o eixo z
  radius: 0.13,          // espessura média
  radiusVariation: 0.08, // variação de espessura ao longo do percurso
  ellipse: 0.05,         // achatamento da seção transversal
  tubularSegments: 512,
  radialSegments: 64,

  glass: {
    ior: 1.48,            // refração
    dispersion: 0.035,    // separação cromática
    transparency: 0.55,   // 0 = opaco, 1 = invisível no centro
    reflection: 0.9,      // intensidade dos reflexos
    iridescence: 0.85,    // película iridescente
    roughness: 0.04,
    edge: 0.75,          // força do azul nas bordas
    warm: 1.0,           // amarelo perolado nas curvas inferiores
  },

  palette: {
    crystal: '#5E90F5', sky: '#8FB2FF', glacier: '#D8E3FF', translucent: '#DCEBFF',
    lemon: '#F2FFB5', pearl: '#FFFBD8', peach: '#FFE0D2',
  },

  envTop: '#8AA8F2',     // céu do estúdio (azul)
  envBottom: '#E9F3C8',  // chão do estúdio (amarelo perolado)
  lights: { key: 1.6, side: 1.2, rim: 1.4, bottom: 0.9, top: 1.0 },
  exposure: 1.0,

  motion: { spin: 0.28, float: 0.06, tiltX: 0.25, tiltY: 0.1, speed: 1, mouse: 0.6 },
  baseRotation: [0.35, -0.4, 0.15],
};

/* ---------- Variações prontas ---------- */
export const PRESETS = {
  // nó entrelaçado da home
  knot: {},
  // fita de vidro aberta da seção Sobre (elemento 5)
  ribbon: {
    // laço fechado descrito por uma série de Fourier: curvas sempre suaves,
    // com raio de curvatura maior que a espessura do tubo (sem "pontas")
    shape: 'fourier',
    closed: true,
    fourier: [[-0.0683, 0.06, -0.0451], [-0.3818, 0.7994, -0.0402], [0.0562, 0.1785, 0.415], [0.3718, 0.0512, 0.0477], [-0.2857, -0.1916, 0.006], [0.0417, 0.0359, 0.0466], [-0.0258, 0.0755, 0.0288]],
    scale: 1.6,
    radius: 0.14,
    radiusVariation: 0,    // espessura constante: superfície lisa
    ellipse: 0,
    tubularSegments: 480,
    radialSegments: 56,
    wave: 0,               // sem deformação da forma
    baseRotation: [0.05, 0.1, 0],
    motion: { spin: 0, float: 0.05, tiltX: 0.2, tiltY: 0.5, mouse: 0.4, speed: 1.8 },
    glass: { transparency: 0.7, edge: 0.6, iridescence: 1.0, reflection: 1.15 },
  },



};

/* ---------- Curva fechada a partir de coeficientes de Fourier ---------- */
function fourierPoints(C, n = 160) {
  const K = (C.length - 1) / 2, out = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    const p = [...C[0]];
    for (let k = 1; k <= K; k++) {
      const a = C[2 * k - 1], b = C[2 * k];
      for (let d = 0; d < 3; d++) p[d] += a[d] * Math.cos(k * t) + b[d] * Math.sin(k * t);
    }
    out.push(p);
  }
  return out;
}

/* ---------- Laço fluido (seção Sobre) ---------- */
function loopPoints(n = 96) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    out.push([
      Math.sin(t) + 0.22 * Math.sin(2 * t),
      0.78 * Math.sin(2 * t) + 0.32 * Math.cos(t),
      0.85 * Math.cos(t) + 0.18 * Math.sin(3 * t),
    ]);
  }
  return out;
}

/* ---------- Nó entrelaçado (forma da versão anterior) ---------- */
function trefoilPoints(n = 96) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    const x = Math.sin(t) + 2 * Math.sin(2 * t);
    const y = Math.cos(t) - 2 * Math.cos(2 * t);
    const z = -Math.sin(3 * t) * 1.1;
    out.push([(x * 0.62 + Math.sin(t * 3) * 0.12) / 2, (y * 0.62) / 2, (z * 0.75) / 2]);
  }
  return out;
}

/* ---------- Geometria tubular com raio e seção variáveis ---------- */
function buildGeometry(cfg) {
  const closed = cfg.shape === 'trefoil' ? true : (cfg.closed ?? true);
  const src = cfg.shape === 'trefoil' ? trefoilPoints() : cfg.shape === 'loop' ? loopPoints() : cfg.shape === 'fourier' ? fourierPoints(cfg.fourier) : cfg.points;
  const S = cfg.tubularSegments, R = cfg.radialSegments;
  const rings = closed ? S : S + 1;
  const capVerts = closed ? 0 : 2 * (R + 1);
  const pos = new Float32Array((rings * R + capVerts) * 3);
  const TAU = Math.PI * 2;

  // índices (fixos)
  const idx = [];
  const segs = closed ? S : S;
  for (let i = 0; i < segs; i++) {
    const i2 = closed ? (i + 1) % S : i + 1;
    for (let j = 0; j < R; j++) {
      const j2 = (j + 1) % R;
      const a = i * R + j, b = i2 * R + j, c = i2 * R + j2, d = i * R + j2;
      idx.push(a, b, d, b, c, d);
    }
  }
  const capStart = rings * R;
  if (!closed) {
    for (let e = 0; e < 2; e++) {
      const base = capStart + e * (R + 1), center = base + R;
      for (let j = 0; j < R; j++) {
        const j2 = (j + 1) % R;
        if (e === 0) idx.push(center, base + j2, base + j);
        else idx.push(center, base + j, base + j2);
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setIndex(idx);
  // posição ao longo do percurso (0 a 1), usada no efeito de conexão
  const uAttr = new Float32Array(rings * R + capVerts);
  for (let i = 0; i < rings; i++) for (let j = 0; j < R; j++) uAttr[i * R + j] = i / S;
  if (!closed) for (let e = 0; e < 2; e++) for (let j = 0; j <= R; j++) uAttr[capStart + e * (R + 1) + j] = e;
  geo.setAttribute('aU', new THREE.BufferAttribute(uAttr, 1));

  const p = new THREE.Vector3();
  const pts = src.map(() => new THREE.Vector3());
  let offset = null;

  function update(time = 0) {
    const w = cfg.wave || 0;
    src.forEach(([x, y, z], i) => {
      const ox = w ? Math.sin(time * 0.9 + i * 0.7) * 0.035 * w : 0;
      const oy = w ? Math.cos(time * 0.7 + i * 0.9) * 0.035 * w : 0;
      const oz = w ? Math.sin(time * 0.8 + i * 1.1) * 0.05 * w : 0;
      pts[i].set((x + ox) * cfg.scale, (y + oy) * cfg.scale, (z + oz) * cfg.scale * cfg.depth);
    });
    const curve = new THREE.CatmullRomCurve3(pts, closed, 'centripetal');
    const frames = curve.computeFrenetFrames(S, closed);
    for (let i = 0; i < rings; i++) {
      const u = i / S;
      curve.getPointAt(Math.min(u, 1), p);
      const N = frames.normals[Math.min(i, S)], B = frames.binormals[Math.min(i, S)];
      const taper = closed ? 1 : 1 - (cfg.taper || 0) * (1 - u);
      const r = cfg.radius * cfg.scale * taper * (1
        + cfg.radiusVariation * 0.55 * Math.sin(TAU * u * 2 + 0.6)
        + cfg.radiusVariation * 0.30 * Math.sin(TAU * u * 5 + 1.9)
        + cfg.radiusVariation * 0.15 * Math.sin(TAU * u * 9 + 0.3));
      const flat = cfg.ellipse * Math.sin(TAU * u * 3 + 1.1);
      const ra = r * (1 + flat), rb = r * (1 - flat);
      for (let j = 0; j < R; j++) {
        const t = (j / R) * TAU;
        const c = Math.cos(t), sn = Math.sin(t);
        const k = (i * R + j) * 3;
        pos[k]     = p.x + ra * c * N.x + rb * sn * B.x;
        pos[k + 1] = p.y + ra * c * N.y + rb * sn * B.y;
        pos[k + 2] = p.z + ra * c * N.z + rb * sn * B.z;
      }
    }
    if (!closed) {
      // tampas planas nas pontas abertas (corte do vidro)
      [0, rings - 1].forEach((ring, e) => {
        const base = capStart + e * (R + 1);
        let cx = 0, cy = 0, cz = 0;
        for (let j = 0; j < R; j++) {
          const k = (ring * R + j) * 3, q = (base + j) * 3;
          pos[q] = pos[k]; pos[q + 1] = pos[k + 1]; pos[q + 2] = pos[k + 2];
          cx += pos[k]; cy += pos[k + 1]; cz += pos[k + 2];
        }
        const q = (base + R) * 3;
        pos[q] = cx / R; pos[q + 1] = cy / R; pos[q + 2] = cz / R;
      });
    }
    if (!offset) {
      geo.computeBoundingBox();
      offset = geo.boundingBox.getCenter(new THREE.Vector3());
    }
    for (let k = 0; k < pos.length; k += 3) { pos[k] -= offset.x; pos[k + 1] -= offset.y; pos[k + 2] -= offset.z; }
    geo.attributes.position.needsUpdate = true;
    geo.computeVertexNormals();
  }
  update(0);
  geo.userData.update = update;
  geo.userData.animated = !!cfg.wave;
  return geo;
}

/* ---------- Estúdio: painéis luminosos para o mapa de ambiente ---------- */
function buildEnvironment(renderer, cfg) {
  const env = new THREE.Scene();
  const pal = cfg.palette;
  const room = new THREE.Mesh(
    new THREE.SphereGeometry(20, 32, 16),
    new THREE.ShaderMaterial({ side: THREE.BackSide, uniforms: { top: { value: new THREE.Color(cfg.envTop) }, bottom: { value: new THREE.Color(cfg.envBottom) } },
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 top; uniform vec3 bottom; varying vec3 vP; void main(){ gl_FragColor = vec4(mix(bottom, top, smoothstep(-0.6, 0.5, vP.y)), 1.0); }' })
  );
  env.add(room);
  const panel = (color, intensity, w, h, position, look) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity), side: THREE.DoubleSide }));
    m.position.set(...position); m.lookAt(...look); env.add(m);
  };
  const L = cfg.lights;
  panel('#F4F8FF', 4 * L.key, 9, 6, [4, 5, 8], [0, 0, 0]);          // principal, branca levemente azulada
  panel(pal.sky, 3 * L.side, 5, 12, [-10, 1, 3], [0, 0, 0]);        // lateral azul clara
  panel(pal.crystal, 3.5 * L.rim, 14, 4, [0, 3, -10], [0, 0, 0]);   // traseira, contornos
  panel(pal.lemon, 2.2 * L.bottom, 12, 8, [0, -10, 2], [0, 0, 0]);  // inferior amarelo limão
  panel('#FFFFFF', 3 * L.top, 10, 10, [0, 12, 0], [0, 0, 0]);       // superior difusa
  panel(pal.peach, 1.2, 4, 4, [8, -4, 4], [0, 0, 0]);               // toque pêssego
  // mapa cúbico simples: compatível com qualquer versão recente do three.js
  const rt = new THREE.WebGLCubeRenderTarget(256, {
    type: THREE.HalfFloatType,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
  });
  new THREE.CubeCamera(0.1, 100, rt).update(renderer, env);
  env.traverse((o) => { o.geometry?.dispose(); o.material?.dispose(); });
  return rt;
}


/* ---------- Material de vidro: refração do ambiente, Fresnel, dispersão e película iridescente ---------- */
function buildGlassMaterial(envTex, cfg) {
  const pal = cfg.palette, g = cfg.glass;
  const col = (c) => new THREE.Color(c);
  const uniforms = {
    envMap: { value: envTex.texture },
    uTime: { value: 0 },
    uIor: { value: g.ior },
    uDisp: { value: g.dispersion },
    uClear: { value: g.transparency },
    uRefl: { value: g.reflection },
    uIri: { value: g.iridescence },
    uRough: { value: g.roughness },
    uEdge: { value: g.edge ?? 0.8 },
    uGap: { value: 0 }, uGapCount: { value: cfg.connect?.gaps ?? 0 }, uGapPhase: { value: cfg.connect?.phase ?? 0.5 },
    uWarm: { value: g.warm ?? 0.8 },
    uCrystal: { value: col(pal.crystal) }, uSky: { value: col(pal.sky) }, uGlacier: { value: col(pal.glacier) },
    uLemon: { value: col(pal.lemon) }, uPearl: { value: col(pal.pearl) }, uPeach: { value: col(pal.peach) },
  };
  const vertexShader = `
    attribute float aU;
    varying vec3 vN; varying vec3 vW; varying vec3 vL; varying float vU;
    void main(){
      vU = aU;
      vec4 w = modelMatrix * vec4(position, 1.0);
      vW = w.xyz; vL = position;
      vN = normalize(mat3(modelMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * w;
    }`;
  const fragmentShader = `
    uniform samplerCube envMap;
    uniform float uTime, uIor, uDisp, uClear, uRefl, uIri, uRough, uEdge, uWarm;
    uniform vec3 uCrystal, uSky, uGlacier, uLemon, uPearl, uPeach;
    varying vec3 vN; varying vec3 vW; varying vec3 vL; varying float vU;
    uniform float uGap, uGapCount, uGapPhase;
    vec3 env(vec3 d, float r){ return texture(envMap, d, r * 40.0).rgb; }
    void main(){
      // fragmentos que se conectam: lacunas que se fecham até formar um percurso contínuo
      if (uGap > 0.001) {
        float f = fract(vU * uGapCount + uGapPhase);
        if (min(f, 1.0 - f) < uGap * 0.5) discard;
      }
      vec3 n = normalize(vN);
      vec3 v = normalize(cameraPosition - vW);
      bool backFace = !gl_FrontFacing;
      if (backFace) n = -n;
      float ndv = clamp(dot(n, v), 0.0, 1.0);
      float rim = 1.0 - ndv;
      float fres = 0.04 + 0.96 * pow(rim, 5.0);
      vec3 I = -v;

      // refração com leve dispersão cromática
      vec3 refr = vec3(
        env(refract(I, n, 1.0 / (uIor - uDisp)), uRough).r,
        env(refract(I, n, 1.0 / uIor), uRough).g,
        env(refract(I, n, 1.0 / (uIor + uDisp)), uRough).b);

      // absorção: o vidro fica mais azul onde a luz atravessa mais material (bordas)
      float path = pow(rim, 1.3);
      vec3 tint = mix(uGlacier, mix(uSky, uCrystal, smoothstep(0.45, 0.95, path)), smoothstep(0.0, 0.6, path));
      float warm = smoothstep(0.35, -0.9, vL.y);              // curvas inferiores mais quentes
      tint = mix(tint, mix(uPearl, uLemon, 0.5), warm * (1.0 - path) * uWarm);
      vec3 body = refr * tint;

      // película fina iridescente, dependente do ângulo
      float phase = rim * 2.2 + vL.y * 0.35 + vL.x * 0.2 + uTime * 0.03;
      vec3 a = uLemon, b = uPearl, c = uPeach, d = uGlacier;
      float p = fract(phase) * 4.0;
      vec3 film = p < 1.0 ? mix(a, b, p) : p < 2.0 ? mix(b, c, p - 1.0) : p < 3.0 ? mix(c, d, p - 2.0) : mix(d, a, p - 3.0);
      float filmMask = smoothstep(0.15, 0.45, rim) * (1.0 - smoothstep(0.75, 0.98, rim));
      body = mix(body, body * film * 1.25, filmMask * uIri);

      // reflexos do estúdio
      vec3 refl = env(reflect(I, n), uRough * 0.6);
      vec3 color = body + refl * (fres * 1.6 + 0.08) * uRefl;
      // contorno azul cristal, como nas bordas da referência
      float edge = smoothstep(0.5, 0.97, rim);
      color = mix(color, uCrystal * (0.9 + 0.3 * fres), edge * uEdge);
      color = mix(color, uSky, smoothstep(0.25, 0.6, rim) * (1.0 - edge) * uEdge * 0.45 * (1.0 - warm));

      float alpha = mix(1.0 - uClear, 1.0, smoothstep(0.1, 0.85, rim));
      alpha = clamp(alpha + dot(refl, vec3(0.333)) * fres * 0.6, 0.0, 1.0);
      if (backFace) { alpha *= 0.55; color = mix(color, color * uSky, 0.35); }

      gl_FragColor = vec4(color, alpha);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`;
  const make = (side) => new THREE.ShaderMaterial({
    uniforms, vertexShader, fragmentShader, side,
    transparent: true, depthWrite: false, toneMapped: cfg.toneMapped ?? false,
  });
  return { back: make(THREE.BackSide), front: make(THREE.FrontSide) };
}

/* ---------- Montagem ---------- */
export function mountSculpture(host, userCfg = {}) {
  const preset = typeof userCfg === 'string' ? PRESETS[userCfg] : userCfg;
  const cfg = {
    ...CONFIG, ...preset,
    glass: { ...CONFIG.glass, ...(preset.glass || {}) },
    motion: { ...CONFIG.motion, ...(preset.motion || {}) },
    palette: { ...CONFIG.palette, ...(preset.palette || {}) },
    lights: { ...CONFIG.lights, ...(preset.lights || {}) },
  };
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = cfg.exposure;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = null;
  const envTex = buildEnvironment(renderer, cfg);

  const camera = new THREE.PerspectiveCamera(24, 1, 0.1, 100);
  camera.position.set(0, 0, 10.5);

  const geo = buildGeometry(cfg);
  const mat = buildGlassMaterial(envTex, cfg);
  const back = new THREE.Mesh(geo, mat.back);
  const front = new THREE.Mesh(geo, mat.front);
  back.renderOrder = 0; front.renderOrder = 1;
  const group = new THREE.Group();
  group.add(back, front);
  scene.add(group);

  const resize = () => {
    const w = host.clientWidth, h = host.clientHeight || w;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize); ro.observe(host); resize();

  let tx = 0, ty = 0, mx = 0, my = 0;
  const onMove = (e) => { tx = e.clientX / window.innerWidth - 0.5; ty = e.clientY / window.innerHeight - 0.5; };
  const onLeave = () => { tx = 0; ty = 0; };
  window.addEventListener('pointermove', onMove);
  document.addEventListener('pointerleave', onLeave);

  const [bx, by, bz] = cfg.baseRotation;
  const pose = (t) => {
    const mo = cfg.motion, s = mo.speed;
    group.rotation.x = bx + Math.sin(t * 0.37 * s) * mo.tiltX + my * mo.mouse;
    group.rotation.y = by + t * mo.spin * s + Math.sin(t * 0.23 * s + 1.2) * mo.tiltY + mx * mo.mouse * 1.4;
    group.rotation.z = bz + Math.sin(t * 0.17 * s) * 0.04;
    group.position.y = Math.sin(t * 0.6 * s) * mo.float * cfg.scale;
  };

  // efeito de conexão: começa fragmentado e se une quando entra na tela
  const cn = cfg.connect;
  let progress = cn ? 0 : 1, connecting = false;
  const U = mat.front.uniforms;
  const applyGap = () => { U.uGap.value = cn ? cn.from * Math.pow(1 - progress, 2) : 0; };
  let io = null;
  if (cn && !reduce) {
    io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { connecting = true; io.disconnect(); }
    }, { threshold: cn.threshold ?? 0.35 });
    io.observe(host);
  }
  if (reduce) progress = 1;
  applyGap();

  // só anima quando a aba está aberta e o vidro está visível na tela
  let raf = 0, last = performance.now(), t = 0, tabVisible = !document.hidden, onScreen = true;
  const active = () => tabVisible && onScreen;
  const resume = () => { if (!raf && active()) { last = performance.now(); raf = requestAnimationFrame(frame); } };
  const frame = (now) => {
    if (!active()) { raf = 0; return; }
    const dt = Math.min((now - last) / 1000, 0.05); last = now; t += dt;
    const k = 1 - Math.pow(0.02, dt);
    mx += (tx - mx) * k; my += (ty - my) * k;
    mat.front.uniforms.uTime.value = mat.back.uniforms.uTime.value = t;
    if (connecting && progress < 1) { progress = Math.min(1, progress + dt / cn.duration); applyGap(); }
    if (geo.userData.animated) geo.userData.update(t);
    pose(t);
    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  };
  const onVis = () => { tabVisible = !document.hidden; resume(); };
  const screenIO = new IntersectionObserver((entries) => {
    onScreen = entries.some((e) => e.isIntersecting);
    resume();
  }, { rootMargin: '100px' });

  if (reduce) { pose(0); renderer.render(scene, camera); }
  else { document.addEventListener('visibilitychange', onVis); screenIO.observe(host); raf = requestAnimationFrame(frame); }

  return {
    renderAt(time) { pose(time); renderer.render(scene, camera); },
    dispose() {
      cancelAnimationFrame(raf); ro.disconnect(); io?.disconnect(); screenIO.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVis);
      geo.dispose(); mat.back.dispose(); mat.front.dispose(); envTex.dispose(); renderer.dispose();
      renderer.domElement.remove();
    },
  };
}