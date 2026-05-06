(function () {
  'use strict';

  /* ── Constantes ──────────────────────────────────────────────── */
  const LOGO_SRC = 'assets/logo2.png';
  const LOGO_ALT = "Sapori d'Italia";
  const WA_URL   = 'https://wa.me/33685492251';

  const NAV_ITEMS = [
    { label: 'Accueil',        href: 'index.html' },
    { label: 'Notre Histoire', href: 'notre-histoire.html' },
    {
      label: 'Gastronomie', href: 'gastronomie.html',
      dropdown: [
        { label: 'Pâtes',           href: 'gastronomie.html#pates' },
        { label: 'Pizzas',          href: 'gastronomie.html#pizzas' },
        { label: 'Huiles',          href: 'gastronomie.html#huiles' },
        { label: 'Fromages',        href: 'gastronomie.html#fromages' },
        { label: 'Charcuterie',     href: 'gastronomie.html#charcuterie' },
        { label: 'Sauces & Épices', href: 'gastronomie.html#sauces' },
        { label: 'Caffè e Dolce',   href: 'gastronomie.html#caffe' },
      ]
    },
    { label: 'Spiritueux',   href: 'spiritueux.html' },
    { label: '🍽 Notre Menu', href: 'menu/', cta: true },
  ];

  /* ── Icônes SVG inline ───────────────────────────────────────── */
  const SVG = {
    chevron: `<svg class="dropdown-chevron" viewBox="0 0 20 20" fill="none"
        stroke="currentColor" stroke-width="2.2" stroke-linecap="round"
        stroke-linejoin="round" aria-hidden="true">
        <polyline points="5 8 10 13 15 8"/>
      </svg>`,

    pin: `<svg class="contact-icon" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>`,

    phone: `<svg class="contact-icon" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
          A19.5 19.5 0 013.07 11 19.79 19.79 0 010 2.18a2 2 0 012-.18h3
          a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91
          9.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339
          1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>`,

    mail: `<svg class="contact-icon" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4
          c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>`,

    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099
          -.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223
          -.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761
          -1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446
          -.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075
          -.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008
          -.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016
          -1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2
          5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871
          .118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173
          -1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87
          0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86
          9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0
          5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45
          -4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05
          0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945
          L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005
          c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>`,
  };

  /* ── Lien actif ──────────────────────────────────────────────── */
  function isActive(href) {
    const path = window.location.pathname;
    const name = href.replace(/^\//, '');
    if (!name || name === 'index.html') {
      return path === '/' || path.endsWith('/') || path.endsWith('/index.html');
    }
    const base = name.replace(/\.html$/, '').replace(/\/$/, '');
    return path.endsWith('/' + base + '.html') || path.endsWith('/' + base + '/') || path.endsWith('/' + base);
  }

  /* ── Construction du header ──────────────────────────────────── */
  function buildHeader() {
    const items = NAV_ITEMS.map(item => {
      const active = isActive(item.href) ? ' active' : '';

      if (item.dropdown) {
        const links = item.dropdown.map(d =>
          `<a class="dropdown-link" href="${d.href}">${d.label}</a>`
        ).join('');
        return `
          <li class="nav-item--dropdown">
            <a class="nav-link nav-link--has-dropdown${active}" href="${item.href}">
              ${item.label}${SVG.chevron}
            </a>
            <div class="dropdown-menu" role="menu">${links}</div>
          </li>`;
      }

      const cta = item.cta ? ' nav-link--cta' : '';
      return `<li><a class="nav-link${cta}${active}" href="${item.href}">${item.label}</a></li>`;
    }).join('');

    return `
      <header class="site-header">
        <div class="header-inner">
          <a class="logo-link" href="index.html" aria-label="Accueil — Sapori d'Italia">
            <img class="site-logo" src="${LOGO_SRC}" alt="${LOGO_ALT}" width="160">
          </a>
          <nav class="main-nav" aria-label="Navigation principale">
            <button class="nav-toggle" id="nav-toggle"
              aria-expanded="false" aria-controls="nav-links"
              aria-label="Ouvrir le menu">
              <span></span><span></span><span></span>
            </button>
            <ul class="nav-links" id="nav-links" role="list">${items}</ul>
          </nav>
        </div>
      </header>`;
  }

  /* ── Construction du footer ──────────────────────────────────── */
  function buildFooter() {
    return `
      <footer class="site-footer">
        <div class="footer-inner">

          <div class="footer-brand">
            <img class="footer-logo" src="${LOGO_SRC}" alt="${LOGO_ALT}">
            <p class="footer-tagline">Sapori d'Italia — La Halle Gourmande</p>
          </div>

          <div class="footer-contacts">
            <div class="contact-card">
              ${SVG.pin}
              <div class="contact-text">
                <span class="contact-label">Adresse</span>
                <span class="contact-value">210 Avenue de la Plage<br>40600 Biscarrosse-Plage</span>
              </div>
            </div>

            <a class="contact-card" href="tel:+33685492251">
              ${SVG.phone}
              <div class="contact-text">
                <span class="contact-label">Téléphone</span>
                <span class="contact-value">06 85 49 22 51<br>06 19 21 98 54</span>
              </div>
            </a>

            <a class="contact-card" href="mailto:epiceriemartone@gmail.com">
              ${SVG.mail}
              <div class="contact-text">
                <span class="contact-label">E-mail</span>
                <span class="contact-value">epiceriemartone@gmail.com</span>
              </div>
            </a>
          </div>

          <div class="footer-menu-cta">
            <a class="btn-primary" href="menu/">🍽&nbsp;Voir notre menu</a>
          </div>

          <div class="footer-copyright">
            <p>© 2026 Sapori d'Italia — La Halle Gourmande. Tous droits réservés.</p>
          </div>

        </div>
      </footer>

      <a class="whatsapp-btn" href="${WA_URL}"
        target="_blank" rel="noopener noreferrer"
        aria-label="Nous contacter sur WhatsApp">
        ${SVG.whatsapp}
      </a>`;
  }

  /* ── Injection DOM ───────────────────────────────────────────── */
  function inject() {
    const headerSlot = document.getElementById('header');
    const footerSlot = document.getElementById('footer');
    if (headerSlot) headerSlot.outerHTML = buildHeader();
    if (footerSlot) footerSlot.outerHTML = buildFooter();
  }

  /* ── Comportements interactifs ───────────────────────────────── */
  function initBehaviors() {
    const toggle   = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (!toggle || !navLinks) return;

    const dropItems = document.querySelectorAll('.nav-item--dropdown');
    const isMobile  = () => window.innerWidth < 768;

    /* Hamburger */
    function closeMenu() {
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('nav-open');
    }

    toggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('nav-open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    /* Dropdown */
    dropItems.forEach(item => {
      const parentLink = item.querySelector('.nav-link--has-dropdown');

      /* Mobile : clic sur le lien parent bascule le dropdown */
      parentLink.addEventListener('click', e => {
        if (!isMobile()) return;
        e.preventDefault();
        const wasOpen = item.classList.contains('dropdown-open');
        dropItems.forEach(d => d.classList.remove('dropdown-open'));
        if (!wasOpen) item.classList.add('dropdown-open');
      });

      /* Desktop : survol ouvre / ferme */
      item.addEventListener('mouseenter', () => {
        if (isMobile()) return;
        dropItems.forEach(d => d.classList.remove('dropdown-open'));
        item.classList.add('dropdown-open');
      });

      item.addEventListener('mouseleave', () => {
        if (isMobile()) return;
        item.classList.remove('dropdown-open');
      });
    });

    /* Clic hors de la nav → tout fermer */
    document.addEventListener('click', e => {
      if (!e.target.closest('.main-nav')) {
        closeMenu();
        dropItems.forEach(d => d.classList.remove('dropdown-open'));
      }
    });

    /* Resize → fermer le panneau mobile */
    window.addEventListener('resize', () => {
      if (!isMobile()) closeMenu();
    });
  }

  /* ── Point d'entrée ──────────────────────────────────────────── */
  function init() {
    inject();
    initBehaviors();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
