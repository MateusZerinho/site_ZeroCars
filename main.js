$(document).ready(function() {
    // Máscaras
    $('#telefone').mask('(00) 00000-0000');

    // Validação de e-mail em tempo real
    $('#email').on('input', function() {
        var email = $(this).val();
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            $(this).addClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid');
        }
    });

    // Nome deve conter apenas letras e espaços
    $('#nome').on('input', function() {
        this.value = this.value.replace(/[^A-Za-z\s]/g, '');
    });

    // Veículo de Interesse deve conter letras, números e espaços
    $('#veiculo-interesse').on('input', function() {
        this.value = this.value.replace(/[^A-Za-z0-9\s]/g, '');
    });

    // Função de validação ao enviar o formulário
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário, caso haja erros
        let isValid = true;

        // Validar o campo Nome
        const nome = $('#nome').val().trim();
        if (nome === "") {
            $('#nome').addClass('is-invalid');
            isValid = false;
        } else {
            $('#nome').removeClass('is-invalid');
        }

        // Validar o campo Telefone
        const telefone = $('#telefone').val().trim();
        if (telefone === "" || !telefone.match(/^\(\d{2}\) \d{5}-\d{4}$/)) {
            $('#telefone').addClass('is-invalid');
            isValid = false;
        } else {
            $('#telefone').removeClass('is-invalid');
        }

        // Validar o campo E-mail
        const email = $('#email').val().trim();
        if (email === "" || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            $('#email').addClass('is-invalid');
            isValid = false;
        } else {
            $('#email').removeClass('is-invalid');
        }

        // Validar o campo Veículo de Interesse
        const veiculo = $('#veiculo-interesse').val().trim();
        if (veiculo === "") {
            $('#veiculo-interesse').addClass('is-invalid');
            isValid = false;
        } else {
            $('#veiculo-interesse').removeClass('is-invalid');
        }

        // Validar o campo Mensagem
        const mensagem = $('#mensagem').val().trim();
        if (mensagem === "") {
            $('#mensagem').addClass('is-invalid');
            isValid = false;
        } else {
            $('#mensagem').removeClass('is-invalid');
        }
    });
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h5').text();
        
        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        })
    });
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário para que possamos validar
    
        let isValid = true; // Suponha que o formulário é válido
        const inputs = this.querySelectorAll('input, textarea');
    
        // Validação dos campos
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                input.classList.add('is-invalid'); // Adiciona uma classe para destacar o campo inválido
            } else {
                input.classList.remove('is-invalid'); // Remove a classe se o campo estiver válido
            }
        });
    
        // Exibir *toast* com base na validade
        const toastSuccess = new bootstrap.Toast(document.getElementById('toast-success'));
        const toastError = new bootstrap.Toast(document.getElementById('toast-error'));
    
        if (isValid) {
            toastSuccess.show(); // Mostra o toast de sucesso
        } else {
            toastError.show(); // Mostra o toast de erro
        }
    });
});