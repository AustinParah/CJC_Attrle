
// Usage: Bind "<div attrelle='dropdown <dropdownName>'>"   parent div
//        Bind "<div <dropdownName>>"                       child div
//
// Keywords:
//      <dropdownName> - sets child div to hidden, until parent "<div attrelle='dropdown <dropdownName>'>" is clicked

export default class dropdown{
    hiddenClass = "hidden";
    shownClass  = "shown";
    dropdownTab = null;

    constructor(element, domain, elementName){
        document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="./dropdown.css">');
        console.log(`Attrelle: Dropdown Module Loaded: bound to ${elementName}`)
        this.dropdownTab = element;

        let temp = domain.querySelector(`[${elementName}]`);
        temp.classList.add(this.hiddenClass);
        this.dropdownTab.addEventListener('click', ()=> { this.toggleDropdown(temp); });
    }

    toggleDropdown(element){
        console.log(element)
        if(element.classList.contains(this.shownClass)){
            element.classList.remove(this.shownClass);
            return;
        }
        element.classList.add(this.shownClass);
    }

}

