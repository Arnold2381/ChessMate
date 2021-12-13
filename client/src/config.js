import firebase from 'firebase';

const Firebase = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_URL,
  projectId: process.env.ID,
  databaseUrl: process.env.DATABASE_URL,
});

export default Firebase;
