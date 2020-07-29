$(document).ready(function() {



  class Header extends HTMLElement {
connectedCallback() {
  this.innerHTML = `


    <div class="header-content__container">

      <div class="flex-item--left header-item--left">
        <a class="nav-link nav-link--home" href="../index.html">Candice Strongwater</a>
      </div>

      <div class="flex-item--right header-item--right">
        <a class="nav-link nav-link--exhibitions" href="./exhibitions.html">Exhibitions, Programs, Books</a>
        <a class="nav-link nav-link--programs" href="./writing.html">Writing</a>
        <span class="nav-link nav-link--about">About</span>
      </div>

    </div>

    <div class="popup__container--about">
      <div class="flex-item--left about-item--left">
         I am a New York-based curator and cultural producer. I hold a BA in Film Theory & Criticism from Muhlenberg College and am currently an MA candidate in Curatorial Studies at Bard.
         <br><br>
         My current research examines the design, dissemination, and cultural implications of educational technologies. I am also the NYPL’s Reserve Film and Video Collection Fellow for 2020 focusing on the history of the Donnell Media Center (1955–2008).

        <br><br>
        <a class="nav-link" href="mailto:strongwater.candice@gmail.com" target="_blank">EMAIL</a>
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
