import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCWpGsj-zeqVLKGpIuEsJ2MxvuTLU7wCjk',
  authDomain: 'house-market-place-app-69e26.firebaseapp.com',
  projectId: 'house-market-place-app-69e26',
  storageBucket: 'house-market-place-app-69e26.appspot.com',
  messagingSenderId: '136549724516',
  appId: '1:136549724516:web:23c7ae0a2ac4241ffc8a71',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
