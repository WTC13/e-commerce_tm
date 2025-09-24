document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;

        // Validação simples
        if (!name || !email || !password || !confirmPassword) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Validação de senhas
        if (password !== confirmPassword) {
            alert('As senhas não coincidem. Por favor, tente novamente.');
            return;
        }

        // Validação de formato de e-mail básica
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Se tudo estiver certo, exibe uma mensagem de sucesso
        alert('Cadastro realizado com sucesso! (Esta é uma simulação)');
        
        // Em um cenário real, você faria uma requisição para a sua API de cadastro
        // Exemplo:
        // fetch('/api/register', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, email, password })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         window.location.href = 'index.html'; // Redireciona para a página de login
        //     } else {
        //         alert('Ocorreu um erro no cadastro. Tente novamente.');
        //     }
        // });
    });
});