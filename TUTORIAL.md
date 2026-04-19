# FILIPE DEV — Tutorial: Publicando Novos Artigos

Guia completo para criar e publicar novos posts no blog, com todas as funcionalidades e componentes visuais disponíveis.

---

## Estrutura do Projeto

```
blog/
├── index.html              ← Página principal do blog (feed de posts)
├── css/
│   ├── shared.css          ← Estilos compartilhados (variáveis, layout, sidebar, widgets)
│   ├── index.css           ← Estilos exclusivos do feed/índice
│   └── article.css         ← Estilos exclusivos dos artigos
├── js/
│   ├── posts-data.js       ← ⭐ FONTE DE VERDADE: dados de todos os posts
│   ├── index.js            ← Lógica do feed (renderização, filtros)
│   └── article.js          ← Lógica dos artigos (scroll spy, checklist, progresso)
└── posts/
    ├── 001-inicio.html
    ├── 002-engine.html
    ├── 003-tiles.html
    └── 004-sistema-sanidade.html
```

---

## PASSO 1: Registrar o post em `posts-data.js`

Abra `js/posts-data.js` e adicione um objeto ao array `POSTS`:

```javascript
{
  id: '005',                           // ID único — sequencial
  slug: '005-meu-titulo',              // Slug único — usado no nome do arquivo
  title: 'Título do Meu Post',         // Título completo exibido no card e no artigo
  tag: 'devlog',                       // Uma de: devlog | engine | art | design
  tagLabel: 'DEVLOG',                  // Label em maiúsculas: DEVLOG | ENGINE | ART | DESIGN
  date: '15 Fev 2026',                 // Data de publicação formatada
  num: '#005',                         // Número do post com #
  scene: 'night',                      // Cena pixel: night | code | map | design | default
  readingTime: '5 min',                // Tempo estimado de leitura
  preview: 'Prévia do post...',        // 1-2 frases que aparecem no card do feed
  comments: 0,                         // Contador de comentários
  reposts: 0,                          // Contador de reposts
  likes: 0,                            // Contador de likes
  file: 'posts/005-meu-titulo.html'    // Caminho do arquivo HTML relativo ao index.html
},
```

**Cenas disponíveis (`scene`):**
| Valor      | Descrição                          |
|------------|------------------------------------|
| `night`    | Cena noturna com montanhas e lua   |
| `code`     | Terminal com código GDScript       |
| `map`      | Grid de tiles do mapa              |
| `design`   | Medidores de sanidade              |
| `default`  | Padrão xadrez neutro               |

---

## PASSO 2: Criar o arquivo HTML do artigo

Crie o arquivo `posts/exemplo.html` copiando o template abaixo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>#005 — Título do Post · FILIPE DEV</title>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/shared.css">
<link rel="stylesheet" href="../css/article.css">
</head>
<body>

<!-- Barra de progresso de leitura -->
<div id="reading-progress"></div>

<div class="layout">

  <!-- ══ SIDEBAR ESQUERDA ══ -->
  <aside class="sidebar-left">

    <div class="sidebar-logo">
      FILIPE DEV
      <span class="logo-sub">Devlog — O Alienista</span>
      <span class="logo-tag">DEVLOG</span>  <!-- Altere para a tag do post -->
    </div>

    <a href="../index.html" class="back-btn">← VOLTAR AO BLOG</a>

    <span class="nav-section-title">▸ NESTE ARTIGO</span>

    <!-- Nav com scroll spy automático -->
    <!-- O href DEVE bater com o id da section correspondente -->
    <nav class="nav-section">
      <a href="#secao-01" class="nav-btn active">
        <span class="nav-num">01</span>Primeira Seção
      </a>
      <a href="#secao-02" class="nav-btn">
        <span class="nav-num">02</span>Segunda Seção
      </a>
      <a href="#secao-03" class="nav-btn">
        <span class="nav-num">03</span>Terceira Seção
      </a>
      <!-- Adicione quantas seções precisar -->
    </nav>

  </aside>

  <!-- ══ CONTEÚDO PRINCIPAL ══ -->
  <main class="main-content">

    <!-- Header fixo com título e breadcrumb -->
    <div class="content-header">
      <h1>Título do Post</h1>
      <a href="../index.html" class="breadcrumb">← index</a>
    </div>

    <!-- Imagem/cena hero do artigo (120px de altura) -->
    <div class="article-hero">
      <!-- Cole aqui o HTML de uma cena pixel (ver seção de cenas abaixo) -->
    </div>

    <!-- ── SEÇÃO 1 (OBRIGATÓRIO: id no guide-section) ── -->
    <section class="guide-section" id="secao-01">
      <span class="section-badge">▸ 01 — LABEL DA SEÇÃO</span>
      <h2 class="section-title">Título da Seção</h2>

      <p class="section-intro">
        Parágrafo introdutório da seção. Explica o contexto em 2-3 frases.
      </p>

      <!-- Conteúdo da seção (veja componentes disponíveis abaixo) -->

    </section>

    <!-- Adicione mais <section class="guide-section" id="secao-02"> conforme necessário -->

  </main>

  <!-- ══ SIDEBAR DIREITA ══ -->
  <aside class="sidebar-right">

    <!-- Widget padrão de metadados -->
    <div class="widget">
      <span class="widget-title">SOBRE O POST</span>
      <div class="widget-body">
        <div class="stat-row"><span>Data</span><span class="stat-val" style="font-size:7px;">15 Fev 2026</span></div>
        <div class="stat-row"><span>Número</span><span class="stat-val">#005</span></div>
        <div class="stat-row"><span>Tag</span><span class="stat-val" style="font-size:7px;">DEVLOG</span></div>
        <div class="stat-row"><span>Leitura</span><span class="stat-val" style="font-size:7px;">~5 min</span></div>
        <div class="stat-row"><span>❤️ Likes</span><span class="stat-val">0</span></div>
      </div>
    </div>

    <!-- Widget de tags -->
    <div class="widget">
      <span class="widget-title">TAGS</span>
      <div class="tag-cloud">
        <span class="tag green">devlog</span>
        <span class="tag">godot4</span>
      </div>
    </div>

    <!-- Widget de navegação entre posts -->
    <div class="widget">
      <span class="widget-title">NAVEGAÇÃO</span>
      <div class="link-list">
        <a href="004-sistema-sanidade.html" class="link-item">🎮 #004 — Post anterior</a>
        <a href="../index.html" class="link-item">🏠 Blog</a>
      </div>
    </div>

  </aside>

</div>

<!-- IMPORTANTE: script com caminho relativo a posts/ -->
<script src="../js/article.js"></script>
</body>
</html>
```

---

## PASSO 3: Componentes disponíveis

Todos os componentes abaixo funcionam dentro de qualquer `<section class="guide-section">`.

---

### 📣 CALLOUT (aviso/destaque)

```html
<!-- Variantes: padrão (vermelho), .info (verde), .warn (amarelo) -->
<div class="callout info">
  <span class="callout-title">✅ TÍTULO DO AVISO</span>
  Texto do aviso aqui.
</div>
```

---

### 📋 STEP CARD (etapa numerada)

```html
<div class="step-card">
  <div class="step-header">
    <div class="step-num">1</div>            <!-- Número ou ícone (▸, ✅, etc.) -->
    <div class="step-title">Título da Etapa</div>
  </div>
  <div class="step-body">
    Descrição da etapa. Pode conter listas:
    <ul>
      <li>Item com bullet automático</li>
      <li>Outro item</li>
    </ul>
  </div>
</div>
```

---

### 🖥️ RESULT BOX (terminal / conclusão)

```html
<div class="result-box">
  <span class="result-title">▸ TÍTULO DO RESULTADO</span>
  <div class="result-line">Linha normal (texto claro)</div>
  <div class="result-line indent-1">→ Linha com indentação</div>
  <div class="result-line indent-2">→ Indentação dupla</div>
  <div class="result-line success">✅ Linha de sucesso (verde)</div>
  <div class="result-line warn">⚠️ Linha de aviso (amarelo)</div>
  <div class="result-line danger">❌ Linha de erro (vermelho)</div>
</div>
```

---

### 🔢 FORMULA BOX (equação / fórmula)

```html
<div class="formula-box">
  Variável A
  <span class="f-arrow"> → </span>
  Variável B
  <span class="f-arrow"> = </span>
  <span class="f-up">↑ Resultado</span>
  <span class="f-label">Explicação opcional da fórmula</span>
</div>
```

---

### 📊 TABELA

```html
<div class="px-table-wrap">
  <table>
    <thead>
      <tr><th>Coluna 1</th><th>Coluna 2</th><th>Coluna 3</th></tr>
    </thead>
    <tbody>
      <tr><td>Dado</td><td>Dado</td><td><code>código</code></td></tr>
      <tr><td>Dado</td><td>Dado</td><td>Dado</td></tr>
    </tbody>
  </table>
</div>
```

---

### ✅ CHECKLIST interativa

```html
<div class="checklist">
  <div class="checklist-header">▸ TÍTULO DA LISTA</div>
  <div class="check-item">
    <div class="check-box"></div>
    <span class="check-text">Item da checklist (clicável)</span>
  </div>
  <div class="check-item checked">   <!-- .checked = marcado inicialmente -->
    <div class="check-box">✓</div>
    <span class="check-text">Item já concluído</span>
  </div>
</div>
```

---

### 🔄 FLOW BOX (fluxograma)

```html
<div class="flow-box">
  <div class="flow-step">
    <span class="flow-arrow">1</span>
    <span class="flow-actor">Ator</span>
    <span class="flow-action">Ação que acontece</span>
  </div>
  <div class="flow-step">
    <span class="flow-arrow">→</span>
    <span class="flow-actor">Sistema</span>
    <span class="flow-action">Reação ao evento</span>
    <span class="flow-condition">[condição opcional]</span>
  </div>
  <div class="flow-step">
    <span class="flow-arrow">→</span>
    <span class="flow-actor">Resultado</span>
    <span class="flow-action">Desfecho</span>
    <span class="flow-result-yes">→ Consequência positiva</span>
  </div>
</div>
```

---

### 📖 OBRA CARD (referência/item)

```html
<div class="obra-card">
  <div class="obra-num">📖</div>        <!-- Emoji ou número -->
  <div class="obra-content">
    <div class="obra-title">Título da Obra</div>
    <div class="obra-author">Autor · Ano · Contexto</div>
    <div class="obra-desc">Descrição breve da obra e sua relevância para o projeto.</div>
  </div>
</div>
```

---

### ⚠️ ERROR CARD (problema / bug)

```html
<div class="error-card">
  <div class="error-title">⚠️ TÍTULO DO PROBLEMA</div>
  <div class="error-body">
    <ul>
      <li>Descrição do problema
        <span class="fix">→ Como foi resolvido</span>
      </li>
    </ul>
  </div>
</div>
```

---

### 💻 CODE BLOCK (trecho de código)

```html
<div class="code-block">
  <div class="code-line"><span class="c-keyword">extends</span> <span class="c-fn">Node2D</span></div>
  <div class="code-line"><span class="c-comment"># Comentário</span></div>
  <div class="code-line"><span class="c-keyword">var</span> x: <span class="c-fn">int</span> = <span class="c-num">0</span></div>
  <div class="code-line"><span class="c-string">"string"</span></div>
</div>

<!-- Classes de highlight disponíveis:
  .c-keyword  → palavras-chave (vermelho)
  .c-fn       → funções/tipos (azul claro)
  .c-comment  → comentários (cinza)
  .c-num      → números (azul)
  .c-string   → strings (azul suave)
-->
```

---

## Cenas Hero do Artigo

Cole dentro de `<div class="article-hero">` para definir a visual do cabeçalho.

### Cena Noturna

```html
<style>
  .scene-night{width:100%;height:100%;background:linear-gradient(180deg,#0a0e1a 0%,#1a2a4a 60%,#2a1a0a 100%);position:relative;overflow:hidden;}
  .scene-night .stars::before{content:'· · ·  · · · ·  · ·  · · · ·  · ·';position:absolute;top:14px;left:10px;right:10px;font-size:7px;color:#fff;letter-spacing:6px;opacity:.8;}
  .scene-night .moon{position:absolute;right:40px;top:18px;width:24px;height:24px;background:#e8c84a;border:2px solid #222;}
  .scene-night .mountain{position:absolute;bottom:30px;left:0;right:0;height:50px;background:#1a1a3a;clip-path:polygon(0 100%,20% 20%,35% 50%,50% 10%,65% 40%,80% 15%,100% 60%,100% 100%);}
  .scene-night .water{position:absolute;bottom:0;left:0;right:0;height:32px;background:#0a1a3a;border-top:3px solid #1a3a6a;}
  .scene-night .reflection{position:absolute;top:6px;left:50%;transform:translateX(-50%);width:20px;height:14px;background:rgba(232,200,74,.3);}
</style>
<div class="scene-night">
  <div class="stars"></div>
  <div class="moon"></div>
  <div class="mountain"></div>
  <div class="water"><div class="reflection"></div></div>
</div>
```

### Cena de Código

```html
<div style="background:#0d1117;font-family:'Press Start 2P',monospace;font-size:7px;padding:12px 16px;display:flex;flex-direction:column;gap:4px;overflow:hidden;height:100%;">
  <div><span style="color:#ff7b72">extends</span> <span style="color:#79c0ff">Node2D</span></div>
  <div><span style="color:#8b949e"># Seu comentário aqui</span></div>
  <div><span style="color:#ff7b72">var</span> example := <span style="color:#a5d6ff">"valor"</span></div>
</div>
```

---

## Widgets da Sidebar Direita

### Progress Bar

```html
<div class="widget">
  <span class="widget-title">PROGRESSO</span>
  <div class="widget-body">
    <div class="progress-label"><span>Feature A</span><span>75%</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width:75%"></div></div>

    <div class="progress-label"><span>Feature B</span><span>40%</span></div>
    <div class="progress-bar"><div class="progress-fill yellow" style="width:40%"></div></div>

    <div class="progress-label"><span>Feature C</span><span>10%</span></div>
    <div class="progress-bar"><div class="progress-fill red" style="width:10%"></div></div>
  </div>
</div>
```

### Mini Checklist (sidebar)

```html
<div class="widget">
  <span class="widget-title">MINI-CHECKLIST</span>
  <div class="widget-body" style="padding:10px 12px;">
    <div class="mini-check done">
      <div class="mini-dot">✓</div>
      <span>Item concluído</span>
    </div>
    <div class="mini-check">
      <div class="mini-dot"></div>
      <span>Item pendente (clicável)</span>
    </div>
  </div>
</div>
```

### Tag Cloud

```html
<div class="widget">
  <span class="widget-title">TAGS</span>
  <div class="tag-cloud">
    <span class="tag">tag-padrão</span>
    <span class="tag green">tag-verde</span>
    <span class="tag red">tag-vermelha</span>
  </div>
</div>
```

### Links

```html
<div class="widget">
  <span class="widget-title">NAVEGAÇÃO</span>
  <div class="link-list">
    <a href="004-sistema-sanidade.html" class="link-item">🎮 #004 — Post anterior</a>
    <a href="../index.html" class="link-item">🏠 Blog</a>
    <a href="https://github.com/..." class="link-item">🐙 GitHub</a>
  </div>
</div>
```

---

## Funcionalidades Automáticas

Todas as funcionalidades abaixo funcionam automaticamente ao incluir `../js/article.js`:

| Funcionalidade | Requisito |
|---|---|
| **Scroll Spy** | `<section class="guide-section" id="X">` + `<a href="#X" class="nav-btn">` |
| **Barra de leitura** | `<div id="reading-progress"></div>` no topo do body |
| **Checklist interativa** | `.check-item` dentro de `.checklist` |
| **Mini-check** | `.mini-check` na sidebar |
| **Botão voltar** | `.back-btn` com `href="../index.html"` |

---

## Resumo em 3 Passos

```
1. Adicione o objeto ao array POSTS em js/posts-data.js
2. Crie o arquivo em posts/NNN-slug.html usando o template
3. Atualize os links de navegação (próximo/anterior) nas sidebars dos posts adjacentes
```

O feed do index.html é atualizado automaticamente — nenhuma outra alteração necessária.

---

*FILIPE DEV Devlog — Sistema de blog estático, sem dependências de build.*
