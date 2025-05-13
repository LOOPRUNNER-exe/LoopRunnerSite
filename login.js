import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

document.getElementById("login").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("message").innerText = "Logged in successfully.";
      window.location.href = "profile.html";
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
});
