'use strict';

(function () {

  var pageHeader = document.querySelector('.main-header');
  var pageNav = document.querySelector('.main-header__navigation-container');
  var startPosition = pageNav.getBoundingClientRect().bottom;
  var navActive = pageNav.cloneNode(true);
  navActive.classList.add('main-header__navigation-container--active');

  //var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //pageNav[0].clientHeight == 135px

  function setNavState(evt) {
    evt.preventDefault();
    if (evt.currentTarget.pageYOffset > startPosition) {
      pageNav.insertAdjacentElement('afterend', navActive)
    } else {
      if (pageHeader.contains(navActive)) {
        pageHeader.removeChild(navActive);
      }
    }
    console.log(evt.currentTarget.pageYOffset);
  }

  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', setNavState);
  });

  /*if (scrollTop > pageHeader[0].clientHeight) {
    pageHeader[0].classList.toggle('main-header__navigation-container--active');
  }*/
})();
