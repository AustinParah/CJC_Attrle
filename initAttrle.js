// Attrle is developed by Austin Parah, released under MIT licensing

// Init Attrle
// Scans page, finds instances of attrle components

class initAttrle {
  moduleList = new Map();
  components = [];
  componentsClasslist = [];

  constructor() {
    console.log("Loaded Attrle Library");

    // as new modals are added, they will need to be added here.
    // if you wish to add custom modules also add them here.
    this.moduleList.set("modal", async (element, componentName) => { const module = await import("./modal.js"); return new module.default(element, componentName); });
    this.moduleList.set("carosel", async (element, componentName) => { const module = await import("./carosel.js"); return new module.default(element, componentName); });

    // init sequence
    this.components = document.querySelectorAll('[attrle]');

    for (let [modName, modInit] of this.moduleList) {  // per module in the list
      for (let component of this.components) {       // per component
        let isUnnamedComponent = true;

        for (let attr of component.getAttribute('attrle').split(" ")) { //check if is a module
          if (isUnnamedComponent && attr == modName) {  // if so, mark down that this is the right module
            isUnnamedComponent = false;
            continue;
          }
          if (!isUnnamedComponent && attr) {
            this.componentsClasslist.push(modInit(component, attr)); // if marked as correct, initialize with the next value as namespace
          }
        }
      }
    }
  }
}

new initAttrle();
