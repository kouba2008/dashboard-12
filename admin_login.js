function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  if (user === "yaakoub2004" && pass === "Foursadou12@") {
    window.location.href = "admin.html"; // يوجه إلى لوحة التحكم
  } else {
    errorMsg.textContent = "بيانات الدخول غير صحيحة!";
  }
