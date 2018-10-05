'use strict';

(function () {
  var pageHeader = document.querySelector('.main-header');
  var pageNav = document.querySelector('.main-header__navigation-container');
  var startPosition = pageNav.getBoundingClientRect().bottom;
  var navActive = pageNav.cloneNode(true);
  navActive.classList.add('main-header__navigation-container--active');

  function setNavState(evt) {
    evt.preventDefault();
    if (evt.currentTarget.pageYOffset > startPosition) {
      pageNav.insertAdjacentElement('afterend', navActive)
      window.nav.getNavItems();
    } else {
      if (pageHeader.contains(navActive)) {
        pageHeader.removeChild(navActive);
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', setNavState);
    window.nav.getNavItems();
  });
})();
