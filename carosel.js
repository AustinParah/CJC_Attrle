
// Carosel module for attrelle
//
// Usage: Bind "attrelle='carosel <caroselName>'" to carosel container 
//        Bind "<caroselName>" to carosel slide itself
//        Bind "<caroselName>='(next/prev)'" to next or previous buttons
//
// Keywords:
//     "next" = move to next carosel slide
//     "prev" = move to previous carosel slide
//
// Dynamically loaded resources: 
//     Carosel.css -> .shown          display: block;
//                    .caroselSlides  display: none;
//


export default class carosel{
  shownClass="shown";
  caroselSlideClass="caroselSlide";

  caroselContainer = null;
  caroselSlides = [];
  incrementor = 0;

  constructor(element, domain, componentName){
    console.log(`Attrelle: Carosel Module Loaded: ${componentName}`);
    document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="./carosel.css">');

    this.caroselContainer = element;

    let moduleSurfaces = domain.querySelectorAll(`[${componentName}]`);
    for(let surface of moduleSurfaces){
      if(surface.getAttribute(componentName) == ""){
        surface.classList.add(this.caroselSlideClass);
        this.caroselSlides.push(surface);
      }
      if(surface.getAttribute(componentName) == "next"){
        surface.addEventListener('click', () => {this.incrementor++; this.update()});
      }
      if(surface.getAttribute(componentName) == "prev"){
        surface.addEventListener('click', () => {this.incrementor--; this.update()});
      }
    }
    this.caroselSlides[0].classList.add(this.shownClass);
  }

  hideShown(){
    for(let slide of this.caroselSlides){
      slide.classList.remove(this.shownClass);
    }
  }

  update(){
    this.hideShown();
    this.incrementor = Math.abs(this.incrementor) % this.caroselSlides.length;
    this.caroselSlides[this.incrementor].classList.add(this.shownClass);
  }
}
