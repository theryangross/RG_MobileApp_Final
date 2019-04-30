import * as firebase from 'firebase';
import 'firebase/firestore';
import APIkeys from '../Constants/APIkeys';

if (!firebase.apps.length) {
    firebase.initializeApp(APIkeys.FirebaseConfig);
}

export const db = firebase.firestore();
export default firebase;