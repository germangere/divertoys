import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAKaDnm5w3hwCPgYyzgI4ANfEcf-F4IyM4',
  authDomain: 'divertoys-212d9.firebaseapp.com',
  projectId: 'divertoys-212d9',
  storageBucket: 'divertoys-212d9.appspot.com',
  messagingSenderId: '179258481939',
  appId: '1:179258481939:web:eb0db4919a9fb38ae98ee6'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getData() {
  const coleccion = collection(db, 'toys');
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
  const coleccion = collection(db, 'toys');
  const q = query(coleccion, where('category', '==', cat));
  const snapQuery = await getDocs(q);
  const data = snapQuery.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
}

export async function setOrder(order) {
  const coleccion = collection(db, 'orders');
  let res = await addDoc(coleccion, order);
  return res.id;
}