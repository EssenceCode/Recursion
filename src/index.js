import DomControl from "./modules/dom";
import "./style.css";


window.addEventListener("load", () => {
    const button = document.querySelector(".merge-btn");
    
    button.click();
})

DomControl().showMerge();
DomControl().showFibs();


DomControl().mergeDom();
DomControl().fibsDom();