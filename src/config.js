import Firebase from 'firebase'
let config = {
   apiKey: "AIzaSyAdWVJzhS4ayah3n11X1tJrbgZv0XWrUs4",
   authDomain: "kampus-734c0.firebaseapp.com",
   databaseURL: "https://kampus-734c0.firebaseio.com",
   projectId: "kampus-734c0",
   storageBucket: "kampus-734c0.appspot.com",
   messagingSenderId: "489314169197",
   appId: "1:489314169197:web:8bc56d9170ffdf65472a64",
   measurementId: "G-FGD25LJ45L"
}
let app = Firebase.initializeApp(config);
export const db = app.database();