const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirmPassword");
const noMatch = document.querySelector(".no-match");

confirmPassword.addEventListener("keydown", () => {
    setInterval(() => {
        if (password.value === confirmPassword.value) {
            password.classList = "success";
            confirmPassword.classList = "success";
            noMatch.textContent = "Passwords match!";
            noMatch.style.color = "green";
        }
    }, 10);
    setInterval(() => {
        if (password.value !== confirmPassword.value) {
            password.classList = "error";
            confirmPassword.classList = "error";
            noMatch.textContent = "Passwords do not match!";
            noMatch.style.color = "rgb(207, 56, 56)";
        }
    }, 10);
});
