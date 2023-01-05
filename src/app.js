/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var palos = ["♦", "♥", "♠", "♣"];

  const numeros = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "As"
  ];

  //let color = palos[indexPalos] == "♦" || palos[indexPalos] == "♥" ? "red" : "black";

  /*console.log(palos[indexPalos]);
                                              let top = document.getElementById("top");
                                              let bottom = document.getElementById("bottom");
                                              let number = document.getElementById("number");
                                              top.innerHTML = palos[indexPalos];
                                              document.getElementById("top").style.color = color;
                                              document.getElementById("bottom").style.color = color;
                                              document.getElementById("number").style.color = color;
                                              bottom.innerHTML = palos[indexPalos];
                                              number.innerHTML = numeros[indexNumeros];*/
  //declaramos un array que tendra todas las cartas
  let todasCartas = [];

  for (let i = 1; i <= 50; i++) {
    let indexPalos = Math.floor(Math.random() * palos.length);
    let indexNumeros = Math.floor(Math.random() * numeros.length);
    //aca obtengo el palo
    console.log(palos[indexPalos]);
    //aca obtengo el numero
    console.log(numeros[indexNumeros]);
    //generamos la variable carta que es el array que tendra el conjunto de datos; palos y numeros
    let carta = [palos[indexPalos], numeros[indexNumeros]];
    console.log(carta);
    //llamamos al array y con push ingresamos cada conjunto de datos que se genera con iteracion
    todasCartas.push(carta);
    console.log(todasCartas);

    if (palos[indexPalos] === "♥" || palos[indexPalos] === "♦") {
      document.body.innerHTML += `<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-danger" id="top">${palos[indexPalos]}</li>
      <li class="list-group-item text-danger" id="number">${numeros[indexNumeros]}</li>
      <li class="list-group-item text-danger" id="bottom">${palos[indexPalos]}</li>
    </ul>
  </div>`;
    } else {
      document.body.innerHTML += `<div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="top">${palos[indexPalos]}</li>
        <li class="list-group-item" id="number">${numeros[indexNumeros]}</li>
        <li class="list-group-item" id="bottom">${palos[indexPalos]}</li>
      </ul>
    </div>`;
    }
  }

  const bubbleSort = todasCartas => {
    console.log(bubbleSort(todasCartas));
  };
};
