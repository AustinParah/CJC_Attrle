
// IMPORTANT NOTE: Attrelle's default modal module is designed to use <dilog> tags only
//
// Usage: bind "attrelle='modal <componentName>'" to the modal element
//        bind "<componentName>='(open/close/toggle)'" to assign controls
// 
// Keywords: 
//    "open"   -- set button to open modal
//    "close"  -- set button to close modal
//    "toggle" -- set button to toggle modal


export default class modal{
  modal = null;

  opperations = (surface, componentName) => {
    console.log(surface);
    if(surface.getAttribute(componentName) == "open"){
        this.modal.showModal();
        return;
      }
      if(surface.getAttribute(componentName) == "close"){
        this.modal.close();
        return;
      }
      if(surface.getAttribute(componentName) == "toggle"){
        if(this.modal.open){
          this.modal.close();
          return;
        }
        this.modal.showModal();
      }
  }

  constructor(element, domain, componentName){
    console.log(`Attrelle: modal module bound: ${componentName}`);

    // save attrelle="modal componentName" element
    this.modal = element;

    // now that we've bound to a specific html component, we need to find then link all our stuff
    let componentSurfaces = domain.querySelectorAll(`[${componentName}]`);

    for(let surface of componentSurfaces){
      surface.addEventListener("click", () => this.opperations(surface, componentName));
    }
  }
}
