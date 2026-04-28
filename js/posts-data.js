/* ══════════════════════════════════════════
   FILIPE DEV — posts-data.js
   Fonte de verdade dos posts do blog.
   
   Para publicar um novo artigo:
   1. Crie o arquivo HTML em posts/NNN-slug.html
      (use o arquivo posts/005-prancheta.html como template —
       ele é autocontido: CSS e JS já estão inlinados, sem
       dependência de arquivos externos. Basta copiar e editar.)
   2. Adicione um objeto neste array
   3. Salve — o index renderiza automaticamente
   ══════════════════════════════════════════ */

const POSTS = [{
        id: '001',
        slug: '001-inicio',
        title: 'O Início: Por que "O Alienista"?',
        tag: 'devlog',
        tagLabel: 'DEVLOG',
        date: '10 Jan 2026',
        num: '#001',
        scene: 'night',
        readingTime: '4 min',
        preview: 'Sempre fui fascinado pela obra de Machado de Assis, e a ideia de transformar "O Alienista" em um jogo rondou minha mente por meses. A linha tênue entre a razão e a loucura é um tema perfeito para uma narrativa interativa...',
        comments: 7,
        reposts: 14,
        likes: 42,
        file: 'posts/001-inicio.html'
    },
    {
        id: '002',
        slug: '002-Pesquisa Alienista',
        title: 'A Origem: Pesquisa como Jogo',
        tag: 'art',
        tagLabel: 'ART',
        date: '24 Jan 2026',
        num: '#002',
        scene: 'map',
        readingTime: '5 min',
        preview: 'Começando a construir a sala onde irá se passar o jogo. O desafio é capturar o Brasil do século XIX com uma paleta de cores limitada',
        comments: 9,
        reposts: 18,
        likes: 67,
        file: 'posts/002-Pesquisa Alienista.html'
    },

    {
        id: '003',
        slug: '003-apresentacao-o-alienista',
        title: 'O Alienista: Apresentação do Projeto',
        tag: 'design',
        tagLabel: 'DESIGN',
        date: '02 Abr 2026',
        num: '#003',
        image: 'img/casaverteste.png',
        readingTime: '4 min',
        preview: 'Bem-vindos ao diário de desenvolvimento de O Alienista, um jogo focado em narrativa, exploração e gestão de sanidade mental baseado em Machado de Assis.',
        comments: 0,
        reposts: 0,
        likes: 0,
        file: 'posts/003-apresentacao-o-alienista.html'
    },
    /* 
      ── TEMPLATE PARA NOVO POST ──
      O arquivo posts/005-prancheta.html é o template de referência.
      Ele é autocontido — shared.css, article.css e article.js já
      estão inlinados dentro do <style> e <script>.
      Para criar um novo artigo:
      1. Copie 005-prancheta.html
      2. Renomeie para NNN-seu-slug.html
      3. Edite title, seções e conteúdo
      4. Adicione a entrada abaixo:
      
    {
      id: '006',
      slug: '006-meu-slug',
      title: 'Título do Post',
      tag: 'devlog',        // devlog | engine | art | design
      tagLabel: 'DEVLOG',
      date: '01 Mai 2026',
      num: '#006',
      scene: 'night',       // night | code | map | design | default
      readingTime: '5 min',
      preview: 'Prévia que aparece no card (1-2 frases)...',
      comments: 0,
      reposts: 0,
      likes: 0,
      file: 'posts/006-meu-slug.html'
    },
    */
];
