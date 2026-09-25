/* ==========================================================================
   Site interactions: BibTeX toggles, copy buttons, email reveal and copy
   with a toast, the news "show more" control, and a subtle card spotlight
   that follows the pointer. Plain JS, no dependencies.
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

  /* ---- Email: the address is never in the HTML. It is assembled from the reversed
     data-u/data-d fragments on hover, focus, or click, stays readable for a few
     seconds after the pointer leaves, and clicking copies it
     (a mailto: link would need a configured mail client). ---- */
  var unscramble = function (v) { return v.split('').reverse().join(''); };
  var emailOf = function (el) {
    return unscramble(el.getAttribute('data-u')) + '@' + unscramble(el.getAttribute('data-d'));
  };
  var LINGER_MS = 3000;
  Array.prototype.forEach.call(document.querySelectorAll('[data-u][data-d]'), function (el) {
    var text = el.querySelector('[data-email-text]');
    var hideTimer = null;
    var reveal = function () {
      clearTimeout(hideTimer);
      if (text && !text.getAttribute('data-shown')) {
        text.textContent = unscramble(el.getAttribute('data-u'));
        text.setAttribute('data-shown', '1');
      }
      el.classList.add('is-revealed');
    };
    var hideLater = function () {
      clearTimeout(hideTimer);
      hideTimer = setTimeout(function () { el.classList.remove('is-revealed'); }, LINGER_MS);
    };
    var copy = function () {
      reveal();
      hideLater();
      var address = emailOf(el);
      copyText(address).then(function () {
        showToast('Copied ' + address);
      }, function () {
        showToast(address);
      });
    };
    el.addEventListener('mouseenter', reveal);
    el.addEventListener('mouseleave', hideLater);
    el.addEventListener('focus', reveal);
    el.addEventListener('blur', hideLater);
    el.addEventListener('click', function (e) {
      e.preventDefault();
      /* If the visitor is selecting the address with the mouse, leave the selection alone. */
      var sel = window.getSelection ? window.getSelection() : null;
      if (sel && sel.toString() && sel.anchorNode && el.contains(sel.anchorNode)) return;
      copy();
    });
    el.addEventListener('keydown', function (e) {
      if (el.tagName !== 'A' && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); copy(); }
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

  /* Card spotlight: a faint highlight that follows the pointer across a card. */
  Array.prototype.forEach.call(document.querySelectorAll('.pub'), function (card) {
    card.classList.add('has-spotlight');
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
})();
