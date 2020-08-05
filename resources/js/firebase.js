import {initializeApp} from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC2JF14sC9Mg1ubY1uTADp7CHWy5g7md9c",
  authDomain: "haircos-1559512183849.firebaseapp.com",
  databaseURL: "https://haircos-1559512183849.firebaseio.com",
  projectId: "haircos-1559512183849",
  storageBucket: "haircos-1559512183849.appspot.com",
  messagingSenderId: "573583486063",
  appId: "1:573583486063:web:e923d68f18c3a9f9be319a"
};
const app = initializeApp(firebaseConfig)
const db = app.firestore()
const auth = app.auth()
const storage=app.storage().ref()
const productStorageRef=storage.child("Images/Products")
const productsRef = db.collection("Products")
const fHSAppointmentsRef = db.collection("FHSAppointments")
const fHSCommentsRef = db.collection("FHSComments")
const fHSUsersRef = db.collection("FHSUsers")
const independentTypeRef = db.collection("Indeepend")
const servicesRef = db.collection("Services")
const shopAppointmentsRef = db.collection("SopAppointments")
const shopCommentsRef = db.collection("ShopComments")
const shopUsersRef = db.collection("ShopUsers")
const shopsRef = db.collection("Shops")
const usersRef = db.collection("Users")
const messagesRef = db.collection("messages")
const productCategoriesRef = db.collection("ProductCategories")
export {
  app,
  db,
  productsRef,
  usersRef,
  messagesRef,
  fHSAppointmentsRef,
  fHSCommentsRef,
  fHSUsersRef,
  independentTypeRef,
  servicesRef,
  shopAppointmentsRef,
  shopCommentsRef,
  shopUsersRef,
  shopsRef,
  auth,
  productCategoriesRef,
  productStorageRef,
  storage
}
