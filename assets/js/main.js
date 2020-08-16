$(document).ready(function() {

  if(window.location !== "index.html"){
        $('.popup__container--about').addClass('showme');
  }


  class Header extends HTMLElement {
connectedCallback() {
  this.innerHTML = `


    <div class="header-content__container">

      <div class="flex-item--left header-item--left">
        <span class="nav-link nav-link--home">Candice Strongwater</span>
      </div>

      <div class="flex-item--right header-item--right">
        <a class="nav-link nav-link--exhibitions" href="./index.html">Exhibitions & Programs</a>
        <a class="nav-link nav-link--programs" href="./writing.html">Writing</a>
        <span class="nav-link nav-link--about">About</span>
      </div>

    </div>

    <div class="popup__container--about">
      <div class="flex-item--left about-item--left">
         <span class="about-text-lc">
         I am an independent curator and cultural producer. The work included here is a selection of projects spanning exhibitions, programs, oral histories, artist publications, radio broadcasts, and site-specific installations. I hold a BA in Film Theory & Criticism at Muhlenberg College and am pursuing an MA at the Center for Curatorial Studies at Bard College (2021).
         <br><br>
         Website accessibility: This site is in the process of featuring image descriptions.
         </span>

         <br><br>

         <a class="nav-link" href="mailto:strongwater.candice@gmail.com" target="_blank">EMAIL</a><span class="about-text-lc"> *Feel free to message me</span>
         <br>
         <a class="nav-link" href="https://www.instagram.com/cancode/?hl=en" target="_blank">INSTAGRAM</a>

      </div>

      <div class="flex-item--right about-item--right">
        <span class="nav-link nav-link--close">Close X</span>
      </div>
    </div>


  `;
}
}


customElements.define('main-header', Header);




// ABOUT POPUP

$('.nav-link--about').click(function() {
    $('.header-content__container').addClass('hideme');
    $('.main-content__container').addClass('hideme');
    $('.popup__container--about').addClass('showme');
});

$('.nav-link--close').click(function() {
    $('.popup__container--about').removeClass('showme');
    $('.header-content__container').removeClass('hideme');
    $('.main-content__container').removeClass('hideme');
});














  });
