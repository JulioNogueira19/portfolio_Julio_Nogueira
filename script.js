/* Validação do formulário de contato */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContato');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            // Verificar se há campos vazios
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos.");
                return;

            }
            // Validação do e-mail
            if (!email.includes("@") || !email.includes(".")) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }
            // Mensagem de envio
            alert("Mensagem enviada com sucesso!");
            form.reset();

        });

    };

});
