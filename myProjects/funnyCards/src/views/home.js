import { html } from '../../node_modules/lit-html/lit-html.js';
//import { getUserData } from '../util.js';

let homeTemplate = () => html`
<section id="home-page">
    <div id="slider">
        <div class="sliderWrap">
            <img src="/pictures/home-avatar.png" alt="home-avatar">
        </div>
        <div class="sliderWrap">
            <img src="/pictures/cat.png" alt="cat">
        </div>
        <div class="sliderWrap">
            <img src="/pictures/cow.png" alt="cow">
        </div>
        <div class="sliderWrap">
            <img src="/pictures/dog.png" alt="dog">
        </div>
        <div class="sliderWrap">
            <img src="/pictures/goose.png" alt="goose">
        </div>
    </div>
    <br>

<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>
    <h1>Welcome to our site for funny animals!</h1>
    <h3>Create funny cards and enjoy width us!</h3>
    <div>
        <a class="dashboard" href="/all-cards">See All Cards</a>
    </div>
</section>
`
/* */
export function homePage(ctx) {
    /*if(getUserData()) {
        ctx.page.redirect('/all-cards')
    }
    else {*/
    ctx.render(homeTemplate())
    showSlides()
    /* }*/
}
let slideIndex = 0;
//showSlides()

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("sliderWrap");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
     for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
     dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000);
}

