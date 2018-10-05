'use strict';

(function () {

  function getNavItems() {
    var navLists = document.querySelectorAll('.cite-navigation__list');
    for (var i = 0; i < navLists.length; i++) {
      var links = navLists[i].querySelectorAll('.cite-navigation__link');
      setLinksHover(links);
    }
  }

  function checkInitialActiveState(activeLink){
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

  /*function removeActiveState(e) {
    if (e.target.classList.contains('cite-navigation__link--active')) {
      e.target.classList.remove('cite-navigation__link--active');
    }
  }*/


  function setLinksHover(linkItems) {
    linkItems.forEach(function (link) {
      link.addEventListener('mouseover',setActiveState);
    });

    /*linkItems.forEach(function (link) {
      link.addEventListener('mouseout', removeActiveState, false);
    });*/
  }

  document.addEventListener("DOMContentLoaded", function() {
    getNavItems();
  });

})();
