/* ==========================================================================
   Site interactions: publication filters, BibTeX toggles, copy buttons,
   and the news "show more" control. Plain JS, no dependencies.
   ========================================================================== */
(function () {
  'use strict';

  /* ---- Publication filters ---- */
  var bar = document.querySelector('[data-pub-filters]');
  if (bar) {
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-pub]'));
    var chips = Array.prototype.slice.call(bar.querySelectorAll('[data-filter]'));
    var count = document.querySelector('[data-pub-count]');
    var empty = document.querySelector('[data-pub-empty]');

    var apply = function (filter) {
      var shown = 0;
      items.forEach(function (el) {
        var tags = (el.getAttribute('data-tags') || '').split('|');
        var ok = filter === 'all' || el.getAttribute('data-year') === filter || tags.indexOf(filter) !== -1;
        el.hidden = !ok;
        if (ok) shown++;
      });
      chips.forEach(function (c) {
        var active = c.getAttribute('data-filter') === filter;
        c.classList.toggle('is-active', active);
        c.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      if (count) {
        count.textContent = filter === 'all'
          ? items.length + ' publications'
          : shown + ' of ' + items.length + ' publications';
      }
      if (empty) empty.hidden = shown !== 0;
    };

    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        var f = c.getAttribute('data-filter');
        apply(f);
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, '', f === 'all' ? window.location.pathname : '#' + encodeURIComponent(f));
        }
      });
    });

    var initial = 'all';
    try { initial = decodeURIComponent(window.location.hash.slice(1)) || 'all'; } catch (e) { /* ignore */ }
    var known = chips.some(function (c) { return c.getAttribute('data-filter') === initial; });
    apply(known ? initial : 'all');
  }

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
