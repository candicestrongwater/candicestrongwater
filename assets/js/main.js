$(document).ready(function() {

  // if(window.location !== "index.html"){
  //       $('.popup__container--about').addClass('showme');
  // }


  class Header extends HTMLElement {
connectedCallback() {
  this.innerHTML = `


    <div class="header-content__container">

      <div class="flex-item--left header-item--left">
        <a class="nav-link nav-link--home" href="../index.html">Candice Strongwater</a>
      </div>

      <div class="flex-item--right header-item--right">
        <a class="nav-link nav-link--exhibitions" href="./index.html">Work</a>
        <a class="nav-link nav-link--programs" href="./writing.html">Writing</a>
        <span class="nav-link nav-link--about">About</span>
      </div>

    </div>

    <div class="popup__container--about">
      <div class="flex-item--left about-item--left">
         <span class="about-text-lc">
           Candice Strongwater is an independent curator and creative project manager based in Queens. She has organized a wide range of public programs and exhibitions, from monographic surveys and radio broadcasts to site-specific installations. From 2015 to 2020, she served as Associate Curator and Head of Public Programs at Red Bull Arts, co-curating <span class="body-ital">Total Proof: The Gala Committee 1995–97</span> (2016), <span class="body-ital">Gretchen Bender: So Much Deathless</span> (2019), and <span class="body-ital">Rammellzee: Racing for Thunder (2018)</span>.
           <br><br>
           At the intersection of media history, architecture, and alternative education, her independent research focuses on the classroom as a site of governance within the U.S. public school system, as well as creative practices that challenge the rationalization of education. Currently, she serves as the Manager of Research & Curatorial Initiatives at SITU Research, a visual investigations practice that provides forensic evidence to lawyers, activists, and journalists addressing human rights violations.
         </span>

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
    $('body').addClass('bg-color-change');

});

$('.nav-link--close').click(function() {
    $('.popup__container--about').removeClass('showme');
    $('.header-content__container').removeClass('hideme');
    $('.main-content__container').removeClass('hideme');
    $('body').removeClass('bg-color-change');
});














  });
