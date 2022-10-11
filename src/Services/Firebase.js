import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKaDnm5w3hwCPgYyzgI4ANfEcf-F4IyM4",
  authDomain: "divertoys-212d9.firebaseapp.com",
  projectId: "divertoys-212d9",
  storageBucket: "divertoys-212d9.appspot.com",
  messagingSenderId: "179258481939",
  appId: "1:179258481939:web:eb0db4919a9fb38ae98ee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inicializo DB
const db = getFirestore(app);
const coleccion = collection(db, 'toys');

export async function getData() {
  const snapshot = await getDocs(coleccion);
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
}

export async function getItem(item) {
  const docRef = doc(db, 'toys', item);
  const snapDoc = await getDoc(docRef);
  return { id: snapDoc.id, ...snapDoc.data() };
}

export async function getByCategory(cat) {
  const q = query(coleccion, where('category', '==', cat));
  const snapQuery = await getDocs(q);
  const data = snapQuery.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
}

const data = [
  {
    title: 'Auto radio control',
    price: 3500,
    description: 'Excelente autonomía. 100mts de alcance. Velocidad máxima de 30km/h',
    category: 'juguetes',
    img: '/assets/img/auto_rc.jpg',
    stock: 11
  },
  {
    title: 'Hulk',
    price: 1200,
    description: 'Oficial Marvel. 15cm de alto, totalmente articulado',
    category: 'juguetes',
    img: '/assets/img/hulk.jpg',
    stock: 19
  },
  {
    title: 'Ajedrez',
    price: 2300,
    description: 'Clásico juego de mesa. Alta calidad de plásticos y tablero plegable',
    category: 'juegos de mesa',
    img: '/assets/img/ajedrez.jpg',
    stock: 26
  },
  {
    title: 'Paletas',
    price: 1500,
    description: 'Par de paletas con pelota incluída. Ideal para llevar a la playa',
    category: 'aire libre',
    img: '/assets/img/paletas.jpg',
    stock: 8
  },
  {
    title: 'Cama elástica',
    price: 12000,
    description: 'Diámetro 3 Mts. Tela reforzada. Con escalera. Seguridad y máxima resistencia',
    category: 'aire libre',
    img: '/assets/img/cama_elastica.jpg',
    stock: 13
  },
  {
    title: 'TEG',
    price: 6400,
    description: 'Clásico infaltable. Gran juego de guerra y estrategia. Arma tu plan para conquistar el mundo!',
    category: 'juegos de mesa',
    img: '/assets/img/teg.jpg',
    stock: 12
  },
  {
    title: 'Monopatín',
    price: 4300,
    description: 'Ruedas de 10cm a rulemanes. Colores varios. Altura regulable',
    category: 'aire libre',
    img: '/assets/img/monopatin.jpg',
    stock: 10
  },
  {
    title: 'Estación de servicio',
    price: 6400,
    description: 'Plásticos de primera calidad. Colores vívidos. Incluye calcomanías y vehículos',
    category: 'juguetes',
    img: '/assets/img/estacion.jpg',
    stock: 7
  }
]
export async function setData() {
  const coleccion = collection(db, 'toys');
  data.forEach(async function (doc) {
    await addDoc(coleccion, doc);
  })
}