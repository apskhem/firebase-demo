import firebase from "firebase";

onload = () => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAYcu092RaX2Nc-h1WgBYRb0CQVJX5Tn-A",
        authDomain: "liquid-idiom-266403.firebaseapp.com",
        databaseURL: "https://liquid-idiom-266403-default-rtdb.firebaseio.com",
        projectId: "liquid-idiom-266403",
        storageBucket: "liquid-idiom-266403.appspot.com",
        messagingSenderId: "581997184297",
        appId: "1:581997184297:web:cf5342de2c2c6f4cd86338",
        measurementId: "G-9YTFE6X3L5"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    const displayer = document.getElementById("data-displayer");

    let isLoaded = false;
    const db = firebase.database();
    const root = db.ref();
    // const root = db.ref("/path");

    // SET data
    // dbRoot.set({ value: 12, value1: 34 });

    // GET data

    // GET UNIQUE KEY
    // const ukey = dbRoot.push().key;

    // UPDATE data
    // root.update({ value: { u: 19, d: 13 } });
    
    // DELETE data
    // root.child("value1").remove();

    root.once("value", () => {
        console.log("database loaded");
        isLoaded = true;
    });
    
    // EVENT LISTENER
    root.on("value", (snap) => {
        if (!isLoaded) {
            return;
        }

        if (!displayer) {
            throw new Error("The element does not exist");
        }

        displayer.textContent = JSON.stringify(snap.val(), null, 4);
        console.log(root.push().key);
    });

    onload = null;
};