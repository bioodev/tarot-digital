import React, { useState } from "react";

// Importar imágenes de las demás cartas...

const Tarot = () => {
  // Definir un arreglo con todas las cartas del tarot
  const tarot = [
    { nombre: "El Loco", imagen: "/tarot/big/maj00.jpg" },
    { nombre: "El Mago", imagen: "/tarot/big/maj01.jpg" },
    { nombre: "La Sacerdotisa", imagen: "/tarot/big/maj02.jpg" },
    { nombre: "La Emperatriz", imagen: "/tarot/big/maj03.jpg" },
    { nombre: "El Emperador", imagen: "/tarot/big/maj04.jpg" },
    { nombre: "El Sumo Sacerdote", imagen: "/tarot/big/maj05.jpg" },
    { nombre: "Los Enamorados", imagen: "/tarot/big/maj06.jpg" },
    { nombre: "El Carro", imagen: "/tarot/big/maj07.jpg" },
    { nombre: "La Justicia", imagen: "/tarot/big/maj08.jpg" },
    { nombre: "El Ermitaño", imagen: "/tarot/big/maj09.jpg" },
    { nombre: "La Rueda de la Fortuna", imagen: "/tarot/big/maj10.jpg" },
    { nombre: "La Fuerza", imagen: "/tarot/big/maj11.jpg" },
    { nombre: "El Colgado", imagen: "/tarot/big/maj12.jpg" },
    { nombre: "La Muerte", imagen: "/tarot/big/maj13.jpg" },
    { nombre: "La Templanza", imagen: "/tarot/big/maj14.jpg" },
    { nombre: "El Diablo", imagen: "/tarot/big/maj15.jpg" },
    { nombre: "La Torre", imagen: "/tarot/big/maj16.jpg" },
    { nombre: "La Estrella", imagen: "/tarot/big/maj17.jpg" },
    { nombre: "La Luna", imagen: "/tarot/big/maj18.jpg" },
    { nombre: "El Sol", imagen: "/tarot/big/maj19.jpg" },
    { nombre: "El Juicio", imagen: "/tarot/big/maj20.jpg" },
    { nombre: "El Mundo", imagen: "/tarot/big/maj21.jpg" },
  ];

  // Definir el estado para las cartas barajadas y las cartas seleccionadas
  const [cartasBarajadas, setCartasBarajadas] = useState([]);
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState([]);

  // Función para barajar las cartas
  const barajarCartas = () => {
    let currentIndex = tarot.length;
    let temporaryValue, randomIndex;
    let newArray = [...tarot];

    // Mientras queden elementos para mezclar
    while (0 !== currentIndex) {
      // Seleccionar un elemento aleatorio
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Intercambiar con el elemento actual
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }

    setCartasBarajadas(newArray);
  };

  // Función para seleccionar tres cartas aleatorias de las cartas barajadas
  const seleccionarCartas = () => {
    const array = [...cartasBarajadas];
    const selectedCards = [];

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * array.length);
      selectedCards.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    }

    setCartasSeleccionadas(selectedCards);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl p-4 font-black text-white drop-shadow-2xl">TAROT</h1>

      {cartasSeleccionadas.length > 0 && (
        <div>
          <h2 className="p-2 text-center text-white">Tirada:</h2>
          <ul className="max-w-full flex gap-4 place-content-center">
            {cartasSeleccionadas.map((carta) => (
              <li className="max-w-sm" key={carta.nombre}>
                <img className="max-h-96" src={carta.imagen} alt={carta.nombre} />
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="max-w-full flex flex-wrap gap-4 place-content-center p-4">
        <button
          className="text-lg hover:shadow-md active:animate-bounce active:bg-black bg-gradient-to-r from-rose-100 to-teal-100 rounded-md px-4 py-2 "
          onClick={barajarCartas}
        >
          Barajar
        </button>
        <button
          className="text-lg hover:shadow-md bg-gradient-to-r from-rose-100 to-teal-100 rounded-md px-4 py-2"
          onClick={seleccionarCartas}
        >
          Sacar cartas
        </button>
      </div>
    </div>
  );
};

export default Tarot;
