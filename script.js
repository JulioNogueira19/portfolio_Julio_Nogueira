/* Comentário: Validação e simulação de envio do formulário */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContato');

    if (form) {
        form.addEventListener('submit', function(event) {
            // Impede o envio real para focar na simulação exigida
            event.preventDefault(); 

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação de campos vazios
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos.");
                return;
                }

            // Validação do e-mail
            if (!email.includes("@") || !email.includes(".")) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            // Simulação de sucesso exigida no item 5 do PDF
            alert("Mensagem enviada com sucesso!");
            
            // Limpa os campos para o usuário
            form.reset(); 
        });
    }
});