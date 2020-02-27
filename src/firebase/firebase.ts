import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyArdnQ0PziBW1-3N-QFho-PaKKpeT0VQ_g',
  authDomain: 'reactredux-148810.firebaseapp.com',
  databaseURL: 'https://reactredux-148810.firebaseio.com',
  projectId: 'reactredux-148810',
  storageBucket: 'reactredux-148810.appspot.com',
  messagingSenderId: '880668506680',
  appId: '1:880668506680:web:59ae44d74781325cb244cd',
  measurementId: 'G-PM2H5Y1Q2K'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const auth = firebase.auth()
export const db = firebase.database()
