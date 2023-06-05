const homeBtn = document.querySelector('#HomeBtn');
const beamBtn = document.querySelector('#BeamBtn');
const resinBtn = document.querySelector('#resinBtn');

let rodBeamHtml = "./rods-beams.html";
let homeHtml = "./home.html";

//button click event to change html
let clicker = (btn,newHtml) => {btn.addEventListener("click", () => {assignHtml(newHtml)})}
let assignHtml = (newHtml) => {location.assign(newHtml);}

//click even list
clicker(beamBtn,rodBeamHtml);
clicker(homeBtn,homeHtml);

