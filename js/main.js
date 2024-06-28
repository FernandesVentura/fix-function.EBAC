$(document).ready(function () {
    $('#carousel').slick({
        autoplay: true,
        arrows: false,
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },  
        },
        messages:{
            nome: 'Por favor, preencha este campo',
            email: 'Por favor, preencha este campo',
            telefone: 'Por favor, preencha este campo',
            endereco: 'Por favor, preencha este campo',
            cep: 'Por favor, preencha este campo',
            cpf: 'Por favor, preencha este campo',
        },

        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            console.log (form)
        },
        invalidHandler: function (form, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Há ${camposIncorretos} campos que precisam ser preenchidos`);
            }
        }
    })
})