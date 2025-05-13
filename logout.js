<!-- logout.js -->
<script type="module">
  import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

  const auth = getAuth();
  const logoutBtn = document.getElementById("logout");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      signOut(auth).then(() => window.location.href = "home.html");
    });
  }
</script>
