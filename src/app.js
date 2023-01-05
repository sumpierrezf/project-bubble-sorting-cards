/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function randomCard() {
    var palos = ["♦", "♥", "♠", "♣"];

    const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];

    //Obtengo Numero
    let palosRandom = palos[Math.floor(Math.random() * palos.length)];
    let numerosRandom = numeros[Math.floor(Math.random() * numeros.length)];

    let color = palosRandom == "♥" || numerosRandom == "♦" ? "text-danger" : "";

    document.getElementById(
      "cartasAleatorias"
    ).innerHTML += `<div class="col-auto rounded">
    <!-- Card Body -->
    <div
      class="px-3 my-3 rounded m-auto bg-white "
      style="width: 6rem; height: 10rem"
      id="card"
    >
      <!-- Upper icon-->
      <div class="row  ${color}" style="font-size: 22px;">
        <span id="upper">${palosRandom}</span>
      </div>
      <!-- Number -->
      <div class="row text-center my-3 ${color}" style="font-size: 45px;">
        <span id="number">${numerosRandom}</span>
      </div>
      <!-- Lower icon-->
      <div
        class="d-flex flex-row  justify-content-end float-right ${color}"
        style="font-size: 22px; "
      >
        <span style="transform: rotate(180deg);" id="bottom">${palosRandom}</span>
      </div>
    </div>
</div>`;

    let aleatorio = [numerosRandom, palosRandom];

    return aleatorio;
  }

  let arrayCartas = [];

  //Generar Array de Cartas
  function generarLista() {
    document.getElementById("cartasAleatorias").innerHTML = "";
    arrayCartas = [];
    let carntidadDeCartas = document.getElementById("cantidad-cartas").value;
    for (let i = 0; i < carntidadDeCartas; i++) {
      let cartaAleatoria = randomCard();
      arrayCartas.push(cartaAleatoria);
      console.log(arrayCartas);
    }
    return arrayCartas;
  }

  //Llamamos a la funcion mediante el boton
  document.getElementById("draw").addEventListener("click", generarLista);
  document.getElementById("sort").addEventListener("click", function() {
    let wall = arrayCartas.length - 1;

    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //let temp1 = arrCartas[index + 1][1];

        if (arrayCartas[index + 1][0] == "K") {
          arrayCartas[index + 1][0] = 13;
        } else if (arrayCartas[index + 1][0] == "Q") {
          arrayCartas[index + 1][0] = 12;
        } else if (arrayCartas[index + 1][0] == "J") {
          arrayCartas[index + 1][0] = 11;
        } else if (arrayCartas[index + 1][0] == "A") {
          arrayCartas[index + 1][0] = 1;
        }

        if (arrayCartas[index][0] == "K") {
          arrayCartas[index][0] = 13;
        } else if (arrayCartas[index][0] == "Q") {
          arrayCartas[index][0] = 12;
        } else if (arrayCartas[index][0] == "J") {
          arrayCartas[index][0] = 11;
        } else if (arrayCartas[index][0] == "A") {
          arrayCartas[index][0] = 1;
        }

        if (arrayCartas[index][0] > arrayCartas[index + 1][0]) {
          let aux = arrayCartas[index];
          arrayCartas[index] = arrayCartas[index + 1];
          arrayCartas[index + 1] = aux;
        }
        index++;
      }
      wall--;
    }
    document.getElementById("cartasOrdenadas").innerHTML = "";
    for (let index = 0; index < arrayCartas.length; index++) {
      if (arrayCartas[index][0] == 13) {
        arrayCartas[index][0] = "K";
      } else if (arrayCartas[index][0] == 12) {
        arrayCartas[index][0] = "Q";
      } else if (arrayCartas[index][0] == 11) {
        arrayCartas[index][0] = "J";
      } else if (arrayCartas[index][0] == 1) {
        arrayCartas[index][0] = "A";
      }
      let color =
        arrayCartas[index][1] == "♥" || arrayCartas[index][0] == "♦"
          ? "text-danger"
          : "";
      document.getElementById(
        "cartasOrdenadas"
      ).innerHTML += `<div class="col-auto rounded">
                <!-- Card Body -->
                <div
                  class="px-3 my-3 rounded m-auto bg-white "
                  style="width: 6rem; height: 10rem"
                  id="card"
                >
                  <!-- Upper icon-->
                  <div class="row  ${color}" style="font-size: 22px;">
                    <span id="upper">${arrayCartas[index][1]}</span>
                  </div>
                  <!-- Number -->
                  <div class="row text-center my-3 ${color}" style="font-size: 45px;">
                    <span id="number">${arrayCartas[index][0]}</span>
                  </div>
                  <!-- Lower icon-->
                  <div
                    class="d-flex flex-row  justify-content-end float-right ${color}"
                    style="font-size: 22px; "
                  >
                    <span style="transform: rotate(180deg);" id="bottom">${arrayCartas[index][1]}</span>
                  </div>
                </div>
            </div>`;
    }
  });
};
