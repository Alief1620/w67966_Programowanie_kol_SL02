function validateForm(event) {
  event.preventDefault();

  const login = document.getElementById("login");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  const loginError = document.getElementById("loginError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  loginError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  if (login.value.length < 3) {
    loginError.textContent = "Login musi mieć minimum 3 znaki.";
    return;
  }

  if (!email.validity.valid) {
    emailError.textContent = "Podaj poprawny adres email.";
    return;
  }

  if (password.value.length < 8) {
    passwordError.textContent = "Hasło musi mieć minimum 8 znaków.";
    return;
  }

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "Hasła nie są identyczne.";
    return;
  }

  alert("Rejestracja udana!");
}
