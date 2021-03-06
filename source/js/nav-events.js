'use strict';

(function () {
  function checkInitialActiveState(activeLink) {
    var linksList = activeLink.parentNode.parentNode.querySelectorAll('.cite-navigation__link');
    for (var item of linksList) {
      if ((item.classList.contains('cite-navigation__link--active')) && (item != activeLink)) {
        item.classList.remove('cite-navigation__link--active');
      }
    }
  }

  function setActiveState(e) {
    checkInitialActiveState(e.target);
    if (!e.target.classList.contains('cite-navigation__link--active')) {
      e.target.classList.add('cite-navigation__link--active');
    }
  }

  function setLinksHover(linkItems) {
    linkItems.forEach(function (link) {
      link.addEventListener('mouseover',setActiveState);
    });
  }

  window.nav = {
    getNavItems: function () {
      var navLists = document.querySelectorAll('.cite-navigation__list');
      for (var i = 0; i < navLists.length; i++) {
        var links = navLists[i].querySelectorAll('.cite-navigation__link');
        setLinksHover(links);
      }
    }
  };
})();
