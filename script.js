/* ======================
   FUNÇÕES DE LOGIN
====================== */

// Função para login (simulação sem backend)
function login(e) {
    e.preventDefault(); // evita reload do formulário
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

// Função para verificar se o utilizador está logado antes de aceder à loja
function checkLogin() {
    const user = localStorage.getItem("user");
    if (!user) {
        alert("Precisa de fazer login para aceder à loja.");
        window.location.href = "login.html"; // redireciona para login
    }
}

// Função para logout
function logout() {
    localStorage.removeItem("user"); // remove sessão
    alert("Sessão terminada.");
    window.location.href = "index.html"; // volta à página inicial
}
