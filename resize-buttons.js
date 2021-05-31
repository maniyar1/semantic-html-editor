window.addEventListener('load', makeButtonsSquare)
window.addEventListener('resize', makeButtonsSquare);

function makeButtonsSquare() {
    let elements = Array.from(document.getElementsByClassName("top-row-button")); 
    let interactives = elements.filter(element => element.nodeName === "BUTTON" || element.nodeName === "SELECT");
    interactives.forEach(elem => {
        elem.style.height = elem.offsetWidth + "px";
        console.log(elem);
    });
}
