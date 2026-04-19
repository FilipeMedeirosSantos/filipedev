/* ══════════════════════════════════════════
   FILIPE DEV — index.js
   Lógica da página de feed/índice
   ══════════════════════════════════════════ */

/* ── RENDERIZAÇÃO DOS CARDS ── */
function buildScene(type) {
    const scenes = {
        night: `
      <div class="scene-night">
        <div class="stars"></div>
        <div class="moon"></div>
        <div class="mountain"></div>
        <div class="water"><div class="reflection"></div></div>
      </div>`,
        code: `
      <div class="scene-code">
        <div class="code-line"><span class="c-keyword">extends</span> <span class="c-fn">Node2D</span></div>
        <div class="code-line"><span class="c-comment"># Alienista — main scene</span></div>
        <div class="code-line"><span class="c-keyword">var</span> sanity: <span class="c-fn">int</span> = <span class="c-num">100</span></div>
        <div class="code-line"><span class="c-keyword">var</span> patient := <span class="c-string">""</span></div>
        <div class="code-line"><span class="c-keyword">func</span> <span class="c-fn">_ready</span>() → <span class="c-keyword">void</span>:</div>
        <div class="code-line">&nbsp;&nbsp;<span class="c-fn">load_town</span>(<span class="c-string">"Itaguai"</span>)</div>
      </div>`,
        map: `
      <div class="scene-map">
        <div class="map-tile tile-road"></div><div class="map-tile tile-building"></div><div class="map-tile tile-grass"></div><div class="map-tile tile-tree"></div><div class="map-tile tile-building"></div><div class="map-tile tile-grass"></div><div class="map-tile tile-tree"></div><div class="map-tile tile-grass"></div>
        <div class="map-tile tile-grass"></div><div class="map-tile tile-road"></div><div class="map-tile tile-road"></div><div class="map-tile tile-road"></div><div class="map-tile tile-road"></div><div class="map-tile tile-road"></div><div class="map-tile tile-road"></div><div class="map-tile tile-grass"></div>
        <div class="map-tile tile-tree"></div><div class="map-tile tile-road"></div><div class="map-tile tile-building"></div><div class="map-tile tile-building"></div><div class="map-tile tile-building"></div><div class="map-tile tile-building"></div><div class="map-tile tile-road"></div><div class="map-tile tile-tree"></div>
        <div class="map-tile tile-grass"></div><div class="map-tile tile-road"></div><div class="map-tile tile-building"></div><div class="map-tile tile-water"></div><div class="map-tile tile-water"></div><div class="map-tile tile-building"></div><div class="map-tile tile-road"></div><div class="map-tile tile-grass"></div>
        <div class="map-tile tile-road"></div><div class="map-tile tile-road"></div><div class="map-tile tile-road"></div><div class="map-tile tile-road"></div><div class="map-tile tile-road"></div><div class="map-tile tile-road"></div><div class="map-tile tile-road"></div><div class="map-tile tile-road"></div>
      </div>`,
        design: `
      <div class="scene-design">
        <div class="sanity-meter">
          <div class="sanity-label">SANIDADE</div>
          <div class="sanity-bar">
            <div class="sanity-pip"></div><div class="sanity-pip"></div>
            <div class="sanity-pip"></div><div class="sanity-pip"></div>
            <div class="sanity-pip"></div><div class="sanity-pip empty"></div>
            <div class="sanity-pip empty"></div><div class="sanity-pip empty"></div>
          </div>
        </div>
        <div style="display:flex;gap:4px;align-items:flex-end;">
          <div class="d-bar" style="height:60px;"><div class="d-fill" style="height:65%;background:#4caf50;"></div></div>
          <div class="d-bar" style="height:60px;"><div class="d-fill" style="height:30%;background:#e8c84a;"></div></div>
          <div class="d-bar" style="height:60px;"><div class="d-fill" style="height:80%;background:#c0392b;"></div></div>
        </div>
      </div>`,
        default: `
      <div class="scene-default"><span>📝</span></div>`
    };
    return scenes[type] || scenes.default;
}

function buildCard(post) {
    // Lógica para decidir se renderiza a imagem ou a cena CSS
    let heroContent = '';
    if (post.image) {
        heroContent = `<img src="${post.image}" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="${post.title}">`;
    } else {
        heroContent = buildScene(post.scene);
    }

    return `
    <article class="post-card" data-tag="${post.tag}" data-file="${post.file}">
      <div class="card-scene">${heroContent}</div>
      <div class="post-body">
        <div class="post-meta">
          <span class="post-tag ${post.tag}">${post.tagLabel}</span>
          <span class="post-date">${post.date} · ${post.num}</span>
          <span style="font-size:6px;color:var(--text-muted);margin-left:auto;">⏱ ${post.readingTime}</span>
        </div>
        <h2 class="post-title">${post.title}</h2>
        <p class="post-preview">${post.preview}</p>
        <div class="post-footer">
          <span class="post-action">💬 ${post.comments}</span>
          <span class="post-action">🔁 ${post.reposts}</span>
          <span class="post-action">❤️ ${post.likes}</span>
          <a class="read-more" href="${post.file}">LER MAIS →</a>
        </div>
      </div>
    </article>`;
}

/* ── FILTRO POR TAG ── */
let currentFilter = 'all';

function filterPosts(tag) {
    currentFilter = tag;
    const cards = document.querySelectorAll('.post-card');
    let visible = 0;

    cards.forEach(card => {
        const match = tag === 'all' || card.dataset.tag === tag;
        card.style.display = match ? '' : 'none';
        if (match) visible++;
    });

    // Atualiza contador
    const badge = document.getElementById('post-count');
    if (badge) badge.textContent = visible + (visible === 1 ? ' POST' : ' POSTS');

    // Atualiza tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === tag);
    });

    // Atualiza nav buttons
    document.querySelectorAll('.nav-btn[data-filter]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === tag);
    });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
    const feed = document.getElementById('post-feed');
    if (!feed || typeof POSTS === 'undefined') return;

    // Renderiza cards (mais recentes primeiro)
    const ordered = [...POSTS].reverse();
    feed.innerHTML = ordered.map(buildCard).join('');

    // Atualiza contagem inicial
    const badge = document.getElementById('post-count');
    if (badge) badge.textContent = POSTS.length + ' POSTS';

    // Event listeners dos filtros (tabs)
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => filterPosts(tab.dataset.filter));
    });

    // Event listeners nav sidebar
    document.querySelectorAll('.nav-btn[data-filter]').forEach(btn => {
        btn.addEventListener('click', () => filterPosts(btn.dataset.filter));
    });

    // Event listener tag pills da sidebar direita
    document.querySelectorAll('.tag-pill[data-filter]').forEach(pill => {
        pill.addEventListener('click', () => filterPosts(pill.dataset.filter));
    });
});