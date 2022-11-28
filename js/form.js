var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault()
    
    var form = document.querySelector("#form-adiciona")
    var paciente = pacienteForm(form)

    var erros = validaPaciente(paciente)
    if(erros.length > 0){
        exibemsngerro(erros)
        return
    }
    // if(!validaPaciente(paciente)){
    //     console.log("Peso inválido")
    //     return
    // }

    //Adicionando o paciente na tabela
    
    adicionaPacienteTabela(paciente)

    form.reset()
    var mansagensErro = document.querySelector("#mensagens-erro")
    mansagensErro.innerHTML = ""
})

function adicionaPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente)
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
}


function exibemsngerro(erro){
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""
    erro.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    })
}

function pacienteForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr

}



function montaTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function validaPaciente(paciente){

    var erros = []

    if(paciente.nome.length == 0){
        erros.push("O nome não pode esta em branco")
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido")
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida")
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode esta em branco")
    }
    
    if(paciente.peso.length == 0){
        erros.push("O peso não pode esta em branco")
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode esta em branco")
    }
    return erros
}