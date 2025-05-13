<!-- firebase.js -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB3fhRVtPPFt_Z89QEZBZujQKV_vS7JZXI",
    authDomain: "looprunner-1a1bc.firebaseapp.com",
    projectId: "looprunner-1a1bc",
    storageBucket: "looprunner-1a1bc.firebasestorage.app",
    messagingSenderId: "251377328592",
    appId: "1:251377328592:web:329ae4b4e01b228fde19d5"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  window.auth = auth;
</script>
