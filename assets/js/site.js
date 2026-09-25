/* ==========================================================================
   Site interactions: BibTeX toggles, copy buttons, email copy with a toast,
   the news "show more" control, and two subtle pointer effects (hero glow,
   card spotlight). Plain JS, no dependencies.
   ========================================================================== */
(function () {
  'use strict';

  /* ---- Clipboard helper ---- */
  var copyText = function (text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      ok ? resolve() : reject(new Error('copy failed'));
    });
  };

  /* ---- Toast ---- */
  var toast = null;
  var toastTimer = null;
  var showToast = function (message) {
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2400);
  };

  /* ---- Email links: copy the address, since mailto: needs a mail client ---- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-copy-email]'), function (el) {
    el.addEventListener('click', function () {
      var address = el.getAttribute('data-copy-email');
      copyText(address).then(function () {
        showToast('Copied ' + address);
      }, function () {
        showToast(address);
      });
    });
  });

  /* ---- BibTeX toggles ---- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-bibtex-toggle]'), function (btn) {
    btn.addEventListener('click', function () {
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (!panel) return;
      var open = panel.hidden;
      panel.hidden = !open;
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* ---- Copy buttons ---- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-copy]'), function (btn) {
    var label = btn.querySelector('span');
    btn.addEventListener('click', function () {
      var src = document.getElementById(btn.getAttribute('data-copy'));
      if (!src) return;
      copyText(src.textContent.trim()).then(function () {
        btn.classList.add('is-copied');
        if (label) label.textContent = 'Copied';
        setTimeout(function () {
          btn.classList.remove('is-copied');
          if (label) label.textContent = 'Copy';
        }, 1600);
      }, function () {
        if (label) label.textContent = 'Select and copy';
      });
    });
  });

  /* ---- News: show all / fewer ---- */
  var newsBtn = document.querySelector('[data-news-toggle]');
  if (newsBtn) {
    var extra = Array.prototype.slice.call(document.querySelectorAll('[data-news-extra]'));
    var expanded = false;
    newsBtn.addEventListener('click', function () {
      expanded = !expanded;
      extra.forEach(function (li) { li.hidden = !expanded; });
      newsBtn.textContent = expanded ? newsBtn.getAttribute('data-less') : newsBtn.getAttribute('data-more');
      newsBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  /* ---- Pointer effects: only for mouse users who have not asked for reduced motion ---- */
  var finePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var okMotion = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  if (!finePointer || !okMotion) return;

  /* Hero glow: a blurred spot that eases toward the pointer while it is over the hero,
     then drifts back to its resting place. */
  var hero = document.querySelector('.hero');
  var glow = hero && hero.querySelector('.hero__glow');
  if (hero && glow) {
    var size = 480;
    var restPoint = function () {
      var r = hero.getBoundingClientRect();
      return { x: r.width * 0.8, y: r.height * 0.3 };
    };
    var target = restPoint();
    var pos = { x: target.x, y: target.y };
    var raf = null;
    var render = function () {
      glow.style.transform = 'translate(' + (pos.x - size / 2) + 'px, ' + (pos.y - size / 2) + 'px)';
    };
    var step = function () {
      pos.x += (target.x - pos.x) * 0.07;
      pos.y += (target.y - pos.y) * 0.07;
      render();
      if (Math.abs(target.x - pos.x) > 0.4 || Math.abs(target.y - pos.y) > 0.4) {
        raf = window.requestAnimationFrame(step);
      } else {
        raf = null;
      }
    };
    var kick = function () { if (!raf) raf = window.requestAnimationFrame(step); };
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      target = { x: e.clientX - r.left, y: e.clientY - r.top };
      kick();
    });
    hero.addEventListener('pointerleave', function () { target = restPoint(); kick(); });
    window.addEventListener('resize', function () { target = restPoint(); pos = { x: target.x, y: target.y }; render(); });
    render();
    glow.classList.add('is-ready');
  }

  /* Card spotlight: a faint highlight that follows the pointer across a card. */
  Array.prototype.forEach.call(document.querySelectorAll('.pub, .direction'), function (card) {
    card.classList.add('has-spotlight');
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
})();
