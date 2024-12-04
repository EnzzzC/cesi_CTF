document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    // Identifiants de test (normalement stockés de manière sécurisée côté serveur)
    const validCredentials = {
        username: 'utilisateur',
        password: 'motdepasse'
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Vérification des identifiants
        if (username === validCredentials.username && password === validCredentials.password) {
            // Redirection en cas de succès
            window.location.href = 'page2.html';
        } else {
            // Affichage du message d'erreur
            errorMessage.textContent = 'incorrect';
            errorMessage.style.display = 'block';
        }
    });
});