window.addEventListener('load', makeButtonsSquare)
window.addEventListener('resize', makeButtonsSquare);

function makeButtonsSquare() {
    let elements = Array.from(document.getElementsByClassName("top-row-button")); 
    let divs = elements.filter(element => element.nodeName === "BUTTON" || element.nodeName === "SELECT");
    divs.forEach(div => {
        div.style.height = div.offsetWidth + "px";
        console.log(div);
    });
    let topRow = document.getElementById("top-row"); 
    console.log(topRow);
}
