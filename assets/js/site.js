/* ==========================================================================
   Site interactions: BibTeX toggles, copy buttons, and the news
   "show more" control. Plain JS, no dependencies.
   ========================================================================== */
(function () {
  'use strict';

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
})();
