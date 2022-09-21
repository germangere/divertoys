const data = [
  {
    id: "1",
    title: "Auto radio control",
    price: "3500",
    description: "Excelente autonomía. 100mts de alcance. Velocidad máxima de 30km/h",
    category: "autos",
    img: "https://picsum.photos/200",
  },
  {
    id: "2",
    title: "Hulk",
    price: "1200",
    description: "Oficial Marvel. 15cm de alto, totalmente articulado",
    category: "figuras",
    img: "https://picsum.photos/200",
  },
  {
    id: "3",
    title: "Ajedrez",
    price: "2300",
    description: "Clásico juego de mesa. Alta calidad de plásticos y tablero plegable",
    category: "juegos de mesa",
    img: "https://picsum.photos/200",
  },
  {
    id: "4",
    title: "Paletas",
    price: "1500",
    description: "Par de paletas con pelota incluída. Ideal para llevar a la playa",
    category: "deportes",
    img: "https://picsum.photos/200",
  }
]

export default function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })
}

export function getItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data[1]);
    }, 2000)
  })
}