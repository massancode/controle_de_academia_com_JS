module.exports ={

age: function(timestamp){
    const today = new Date () //objeto que controla a data dde hoje
    const birthday = new Date (timestamp) //objeto que controla a data de aniversario recebida no parametro timestamp (timestamp)

    let age = today.getFullYear() - birthday.getFullYear() // Ano de nascimento - ano atual = idade 
    const month =  today.getMonth() - birthday.getMonth () // mes atual - mes aniversario

    if (month < 0 || month ==0 && today.getDate() < birthday.getDate()  ) { //verifica o mes que a pessoa nasceu para saber se ela ja fez aniversario e verifica o dia tambem.
        age = age -1
    }

    return age 
}
}
// Para saber quandos anos a pessoa tem 

// Ano de nascimento - ano atual = idade 
     //1997 - 2024 = 27

// precisamos tambem calcular o 
//mes que pessoa nasceu para saber se ela ja fez aniversario
    // 11 - 12 = -1 (Resultado negativo)
    // 11 - 11 =  0 (Resultado 0)
    // 11 - 10 =1 (Resultado positivo)

// precisamos tambem calcular o 
//dia que pessoa nasceu para saber se ela ja fez aniversario
    // 8 - 9 = -1 (Resultado negativo)
    // 8 - 8 =  0 (Resultado 0)
    // 8 - 7  =1 (Resultado positivo) 
