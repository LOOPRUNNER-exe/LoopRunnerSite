import { auth, database } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("saveBtn").addEventListener("click", () => {
      const username = document.getElementById("username").value;
      const vehicle = document.getElementById("vehicle").value;
      const bio = document.getElementById("bio").value;

      const userRef = ref(database, `users/${user.uid}`);
      set(userRef, {
        username,
        vehicle,
        bio,
        email: user.email
      })
      .then(() => {
        document.getElementById("status").innerText = "Profile saved.";
      })
      .catch((error) => {
        document.getElementById("status").innerText = error.message;
      });
    });
  } else {
    document.getElementById("status").innerText = "Not logged in.";
  }
});
