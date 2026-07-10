// Attrelle is developed by Austin Parah, released under MIT licensing

// Init Attrelle
// Scans page, finds instances of attrelle components

class initAttrelle {
  moduleList = new Map();
  components = [];
  componentsClasslist = [];

  constructor() {
    console.log("Loaded Attrelle Library");

    // as new modals are added, they will need to be added here.
    // if you wish to add custom modules also add them here.
    this.moduleList.set("modal", async (element, domain, componentName) => { const module = await import("./modal.js"); return new module.default(element, domain, componentName); });
    this.moduleList.set("carosel", async (element, domain, componentName) => { const module = await import("./carosel.js"); return new module.default(element, domain, componentName); });
    this.moduleList.set("dropdown", async (element, domain, componentName) => { const module = await import("./dropdown.js"); return new module.default(element, domain, componentName); });

    // init sequence
    this.components = document.querySelectorAll('[attrelle]');

    for(let [moduleType, moduleInitFunction] of this.moduleList){
      for(let component of this.components){
        let domain = component;
        let isCorrectModuleType = false;
        let namespace = null;
        for(let attribute of component.getAttribute('attrelle').split(' ')){
          if(moduleType == attribute)
            isCorrectModuleType = true;

          if(moduleType != attribute)
            namespace = attribute;
        }

        //console.log(`is correct module type-${moduleType} ${isCorrectModuleType} -- has namespace ${namespace}`);

        if(!isCorrectModuleType){
          continue;
        }


        if(namespace.includes("global-")){
          if(document.querySelectorAll(`[attrelle=${namespace}]`).length > 1){
            console.log(`Attrelle - Document Error: Non-unique global namespace ${document.querySelectorAll(`[attrelle=${moduleType} ${namespace}]`)}`);
            break;
          }
          domain = document;
        }
        this.componentsClasslist.push(moduleInitFunction(component, domain, namespace));
        
      }
    }

  }
}

new initAttrelle();
