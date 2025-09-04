/* ======================
   FUN��ES DE LOGIN
====================== */

// Fun��o para login (simula��o sem backend)
function login(e) {
    e.preventDefault(); // evita reload do formul�rio
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (email && pass) {
        localStorage.setItem("user", email); // guarda login no navegador
        alert("Login feito com sucesso!");
        window.location.href = "loja.html"; // redireciona para loja
    } else {
        alert("Preencha todos os campos.");
    }
}

// Fun��o para verificar se o utilizador est� logado antes de aceder � loja
function checkLogin() {
    const user = localStorage.getItem("user");
    if (!user) {
        alert("Precisa de fazer login para aceder � loja.");
        window.location.href = "login.html"; // redireciona para login
    }
}

// Fun��o para logout
function logout() {
    localStorage.removeItem("user"); // remove sess�o
    alert("Sess�o terminada.");
    window.location.href = "index.html"; // volta � p�gina inicial
}
