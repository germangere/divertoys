const data = [
  {
    id: 1,
    title: 'Auto radio control',
    price: 3500,
    description: 'Excelente autonomía. 100mts de alcance. Velocidad máxima de 30km/h',
    category: 'juguetes',
    img: '/assets/img/auto_rc.jpg',
    stock: 11
  },
  {
    id: 2,
    title: 'Hulk',
    price: 1200,
    description: 'Oficial Marvel. 15cm de alto, totalmente articulado',
    category: 'juguetes',
    img: '/assets/img/hulk.jpg',
    stock: 19
  },
  {
    id: 3,
    title: 'Ajedrez',
    price: 2300,
    description: 'Clásico juego de mesa. Alta calidad de plásticos y tablero plegable',
    category: 'juegos de mesa',
    img: '/assets/img/ajedrez.jpg',
    stock: 26
  },
  {
    id: 4,
    title: 'Paletas',
    price: 1500,
    description: 'Par de paletas con pelota incluída. Ideal para llevar a la playa',
    category: 'aire libre',
    img: '/assets/img/paletas.jpg',
    stock: 8
  },
  {
    id: 5,
    title: 'Cama elástica',
    price: 12000,
    description: 'Diámetro 3 Mts. Tela reforzada. Con escalera. Seguridad y máxima resistencia',
    category: 'aire libre',
    img: '/assets/img/cama_elastica.jpg',
    stock: 13
  },
  {
    id: 6,
    title: 'TEG',
    price: 6400,
    description: 'Clásico infaltable. Gran juego de guerra y estrategia. Arma tu plan para conquistar el mundo!',
    category: 'juegos de mesa',
    img: '/assets/img/teg.jpg',
    stock: 12
  },
  {
    id: 7,
    title: 'Monopatín',
    price: 4300,
    description: 'Ruedas de 10cm a rulemanes. Colores varios. Altura regulable',
    category: 'aire libre',
    img: '/assets/img/monopatin.jpg',
    stock: 10
  },
  {
    id: 8,
    title: 'Estación de servicio',
    price: 6400,
    description: 'Plásticos de primera calidad. Colores vívidos. Incluye calcomanías y vehículos',
    category: 'juguetes',
    img: '/assets/img/estacion.jpg',
    stock: 7
  }
]

export default function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

export function getItem(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = data.find(el => el.id === parseInt(item));
      if (result) resolve(result);
      else reject(new Error('Elemento no encontrado'));
    }, 1000)
  })
}

export function getByCategory(cat) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = data.filter((el) => el.category === cat);
      if (result) resolve(result);
      else reject(new Error('Categoría no encontrada'));
    }, 1000)
  })
}