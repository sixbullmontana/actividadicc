(function () {
  'use strict';

  /* ---------- Categorías ---------- */
  var CATS = {
    ia:   { nombre: 'Inteligencia artificial y datos', icono: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>' },
    seg:  { nombre: 'Seguridad digital', icono: '<path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>' },
    red:  { nombre: 'Internet y redes', icono: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>' },
    sw:   { nombre: 'Software y sistemas', icono: '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>' },
    emer: { nombre: 'Tecnologías emergentes', icono: '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/>' },
    edu:  { nombre: 'Educación digital', icono: '<path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>' }
  };
  var SVG_NS = 'http://www.w3.org/2000/svg';

  function norm(s) {
    return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) { n.className = cls; }
    if (text) { n.textContent = text; }
    return n;
  }
  function thumb(cat) {
    var d = el('div', 'thumb cat-' + cat);
    d.setAttribute('aria-hidden', 'true');
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.innerHTML = CATS[cat].icono;
    d.appendChild(svg);
    return d;
  }
  function extLink(a, url, label) {
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.appendChild(document.createTextNode(label));
    var s = el('span', 'sr-only', ' (se abre en una pestaña nueva)');
    a.appendChild(s);
  }

  var data = (window.ENTRADAS || []).slice();

  /* ---------- Portada ---------- */
  var portada = document.getElementById('portadaGrid');
  if (portada) {
    data.filter(function (e) { return e.dest; }).slice(0, 4).forEach(function (e, i) {
      var a = el('a', 'feat' + (i === 0 ? ' feat--big' : ''));
      a.href = e.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.appendChild(thumb(e.cat));
      var body = el('div', 'feat__body');
      body.appendChild(el('span', 'tag', CATS[e.cat].nombre));
      var h = el('h3', null, e.titulo);
      body.appendChild(h);
      if (i === 0) { body.appendChild(el('p', 'feat__sum', e.resumen)); }
      body.appendChild(el('p', 'feat__meta', e.tipo === e.fuente ? e.fuente : e.tipo + ' · ' + e.fuente));
      body.appendChild(el('span', 'sr-only', ' (se abre en una pestaña nueva)'));
      a.appendChild(body);
      portada.appendChild(a);
    });
  }

  /* ---------- Feed con filtros ---------- */
  var feed = document.getElementById('feed');
  if (feed) {
    var PAGE = 9;
    var state = { cat: 'todas', tipo: 'todos', q: '', shown: PAGE };
    var count = document.getElementById('feedCount');
    var more = document.getElementById('moreBtn');
    var search = document.getElementById('buscar');
    var catRow = document.getElementById('filtroCat');
    var tipoRow = document.getElementById('filtroTipo');

    function chip(parent, label, group, value, pressed) {
      var b = el('button', 'chip-btn', label);
      b.type = 'button';
      b.setAttribute('aria-pressed', pressed ? 'true' : 'false');
      b.dataset.group = group;
      b.dataset.value = value;
      parent.appendChild(b);
    }
    chip(catRow, 'Todas', 'cat', 'todas', true);
    Object.keys(CATS).forEach(function (k) { chip(catRow, CATS[k].nombre, 'cat', k, false); });
    chip(tipoRow, 'Todas', 'tipo', 'todos', true);
    chip(tipoRow, 'Blogs tecnológicos', 'tipo', 'Blog', false);
    chip(tipoRow, 'Wikipedia', 'tipo', 'Wikipedia', false);

    function filtered() {
      var q = norm(state.q.trim());
      return data.filter(function (e) {
        if (state.cat !== 'todas' && e.cat !== state.cat) { return false; }
        if (state.tipo !== 'todos' && e.tipo !== state.tipo) { return false; }
        if (q && norm(e.titulo + ' ' + e.resumen + ' ' + e.fuente).indexOf(q) === -1) { return false; }
        return true;
      });
    }

    function render() {
      var list = filtered();
      feed.textContent = '';
      list.slice(0, state.shown).forEach(function (e) {
        var li = el('li');
        var art = el('article', 'post');
        art.appendChild(thumb(e.cat));
        var body = el('div', 'post__body');
        body.appendChild(el('p', 'post__cat', CATS[e.cat].nombre));
        var h = el('h3');
        var a = el('a');
        extLink(a, e.url, e.titulo);
        h.appendChild(a);
        body.appendChild(h);
        body.appendChild(el('p', 'post__sum', e.resumen));
        var meta = el('div', 'post__meta');
        var left = el('span');
        left.appendChild(el('span', 'tag ' + (e.tipo === 'Wikipedia' ? 'tag--wiki' : 'tag--blog'), e.tipo));
        if (e.tipo !== e.fuente) { left.appendChild(document.createTextNode(' ' + e.fuente)); }
        meta.appendChild(left);
        var read = el('a', 'post__link');
        extLink(read, e.url, 'Leer fuente →');
        meta.appendChild(read);
        body.appendChild(meta);
        art.appendChild(body);
        li.appendChild(art);
        feed.appendChild(li);
      });
      var total = list.length;
      count.textContent = total === 0
        ? 'No hay entradas que coincidan con tu búsqueda.'
        : 'Mostrando ' + Math.min(state.shown, total) + ' de ' + total + ' entradas.';
      more.hidden = state.shown >= total;
    }

    function onChip(e) {
      var b = e.target.closest('.chip-btn');
      if (!b) { return; }
      var group = b.dataset.group;
      var row = group === 'cat' ? catRow : tipoRow;
      Array.prototype.forEach.call(row.querySelectorAll('.chip-btn'), function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      state[group] = b.dataset.value;
      state.shown = PAGE;
      render();
    }
    catRow.addEventListener('click', onChip);
    tipoRow.addEventListener('click', onChip);
    search.addEventListener('input', function () { state.q = search.value; state.shown = PAGE; render(); });
    more.addEventListener('click', function () { state.shown += PAGE; render(); });
    render();
  }

  /* ---------- Progreso de lectura y volver arriba ---------- */
  var bar = document.getElementById('progressBar');
  var toTop = document.getElementById('toTop');
  var ticking = false;
  function onScroll() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, pct)) + '%';
    toTop.classList.toggle('is-visible', window.scrollY > 600);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---------- Menú móvil ---------- */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('menu');
  function closeMenu() { menu.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') { closeMenu(); } });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) { closeMenu(); toggle.focus(); }
  });

  /* ---------- Tarjetas de herramientas: mostrar/ocultar detalle ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.card__toggle'), function (btn) {
    var body = document.getElementById(btn.getAttribute('aria-controls'));
    var label = btn.querySelector('.card__toggle-label');
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      body.hidden = expanded;
      label.textContent = expanded ? 'Mostrar detalle' : 'Ocultar detalle';
    });
  });
  function openCardFromHash() {
    var id = window.location.hash.slice(1);
    var card = id && document.getElementById(id);
    if (card && card.classList.contains('card')) {
      var btn = card.querySelector('.card__toggle');
      if (btn && btn.getAttribute('aria-expanded') === 'false') { btn.click(); }
    }
  }
  window.addEventListener('hashchange', openCardFromHash);
  openCardFromHash();

  /* ---------- Sección activa en el menú ---------- */
  if ('IntersectionObserver' in window) {
    var links = {};
    Array.prototype.forEach.call(menu.querySelectorAll('a'), function (a) {
      links[a.getAttribute('href').slice(1)] = a;
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && links[entry.target.id]) {
          Object.keys(links).forEach(function (k) {
            links[k].classList.remove('is-active');
            links[k].removeAttribute('aria-current');
          });
          links[entry.target.id].classList.add('is-active');
          links[entry.target.id].setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    Object.keys(links).forEach(function (id) {
      var node = document.getElementById(id);
      if (node) { observer.observe(node); }
    });
  }
})();
