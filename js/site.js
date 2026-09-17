/* Sun Worx — header interactions.
   Replaces the Claude Designs reactive runtime: same behaviour, no framework. */
(function () {
  'use strict';

  /* Mobile nav */
  var navToggle = document.querySelector('[data-nav-toggle]');
  var navPanel = document.querySelector('[data-nav-panel]');
  if (navToggle && navPanel) {
    navToggle.addEventListener('click', function () {
      var open = navPanel.hidden;
      navPanel.hidden = !open;
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navPanel.querySelectorAll('[data-nav-close]').forEach(function (el) {
      el.addEventListener('click', function () {
        navPanel.hidden = true;
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Service Areas dropdown — opens on hover (pointer) and on click/keyboard */
  var areas = document.querySelector('[data-areas]');
  if (areas) {
    var toggle = areas.querySelector('[data-areas-toggle]');
    var panel = areas.querySelector('[data-areas-panel]');
    if (toggle && panel) {
      var set = function (open) {
        panel.hidden = !open;
        toggle.setAttribute('aria-expanded', String(open));
      };
      areas.addEventListener('mouseenter', function () { set(true); });
      areas.addEventListener('mouseleave', function () { set(false); });
      toggle.addEventListener('click', function () { set(panel.hidden); });
      areas.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !panel.hidden) { set(false); toggle.focus(); }
      });
      document.addEventListener('click', function (e) {
        if (!areas.contains(e.target)) set(false);
      });
    }
  }
})();
