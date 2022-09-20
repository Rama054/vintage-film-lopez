import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCtgh4aVG87ky1iEZ12ik7Y1uV_xumzaSs",
    authDomain: "vintagefilm-c9627.firebaseapp.com",
    databaseURL: "https://vintagefilm-c9627-default-rtdb.firebaseio.com",
    projectId: "vintagefilm-c9627",
    storageBucket: "vintagefilm-c9627.appspot.com",
    messagingSenderId: "349590274034",
    appId: "1:349590274034:web:d446b86a86589851d4f56b"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db;