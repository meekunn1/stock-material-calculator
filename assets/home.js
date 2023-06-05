const homeBtn = document.querySelector('#HomeBtn');
const beamBtn = document.querySelector('#BeamBtn');
const resinBtn = document.querySelector('#ResinBtn');

const rodBeamHtml = "./rods-beams.html";
const homeHtml = "./home.html";

//button click event to change html
let clickMover = (btn,newHtml) => {btn.addEventListener("click", () => {assignHtml(newHtml)})}
let assignHtml = (newHtml) => {location.assign(newHtml);}

//html change event list
clickMover(beamBtn,rodBeamHtml);
clickMover(homeBtn,homeHtml);

//input items
class Beam {
  constructor(beamLength, beamWidth, beamHeight, beamThickness) {
    this.beamLength = beamLength;
    this.beamWidth = beamWidth;
    this.beamHeight = beamHeight;
    this.beamThickness = beamThickness;
  }
}

const newPurchase = new Beam(6096, 50.8, 101.6, 3.175); //hardcoded for test

console.log(newPurchase);   //test

const stock1 = new Beam(500, 50.8, 101.6, 3.175); //hardcoded for test
const stock2 = new Beam(1500, 50.8, 101.6, 3.175); //hardcoded for test
const stock3 = new Beam(3000, 50.8, 101.6, 3.175); //hardcoded for test

let stockList = []
let constructStockList = (stock1,stock2,stock3) => {
  stockList.push(stock1);
  stockList.push(stock2);
  stockList.push(stock3);
}
constructStockList(stock1,stock2,stock3);
console.log(stockList[0].beamLength);
//calculation items
