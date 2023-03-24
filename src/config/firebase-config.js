import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBKr0wWW6VwTBg3s67CBnqYtpVdyK_OPTo',
  authDomain: 'ivo-hristov-portfolio.firebaseapp.com',
  databaseURL: 'https://ivo-hristov-portfolio-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'ivo-hristov-portfolio',
  storageBucket: 'ivo-hristov-portfolio.appspot.com',
  messagingSenderId: '497352428168',
  appId: '1:497352428168:web:59f9ad30fdcf67d1086d3d'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
