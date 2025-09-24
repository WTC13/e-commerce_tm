document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validação simples
        if (email && password) {
            alert('Formulário enviado com sucesso! (Esta é uma simulação)');
            // Aqui você faria uma requisição para a sua API de login
            // Exemplo:
            // fetch('/api/login', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email, password })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.success) {
            //         window.location.href = '/dashboard'; // Redireciona para a página principal
            //     } else {
            //         alert('E-mail ou senha incorretos.');
            //     }
            // });
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos
    const segmentTags = document.querySelectorAll('.segment-tag');
    const categorySelectContainer = document.getElementById('category-select-container');
    const userBtn = document.getElementById('user-btn');
    const cartBtn = document.getElementById('cart-btn');
    const settingsBtn = document.getElementById('settings-btn');

    // Funcionalidade para as Tags de Segmentos
    segmentTags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o link de recarregar a página
            
            // Exibe o select de categorias
            categorySelectContainer.classList.remove('hidden');

            const category = e.target.getAttribute('data-category');
            console.log(`Você clicou na categoria: ${category}. O select com mais opções foi exibido.`);
            
            // Aqui você poderia carregar as opções corretas para o select com base na categoria
            // Por exemplo:
            // if (category === 'futebol') {
            //     // Carregar opções de produtos de futebol
            // }
        });
    });

    // Funcionalidade para os botões do cabeçalho
    userBtn.addEventListener('click', () => {
        alert('Botão de Usuário clicado! Em um projeto real, aqui você mostraria um menu ou o perfil do usuário.');
    });

    cartBtn.addEventListener('click', () => {
        alert('Botão de Carrinho clicado! Em um projeto real, aqui você mostraria os itens do carrinho.');
    });

    settingsBtn.addEventListener('click', () => {
        alert('Botão de Configurações clicado! Em um projeto real, aqui você mostraria um menu de configurações.');
    });
});