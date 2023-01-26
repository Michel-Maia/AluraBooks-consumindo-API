async function buscaEnd(cep) {

    try { 
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    var consultaCEPConvertida = await consultaCEP.json();

    if (consultaCEPConvertida.erro) {
        throw Error('CEP não existe');
    }

    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;

    } catch (erro) {
        console.log(erro)
    }

}

let ceps = ['01001000','01001001'];
let conjCeps = ceps.map(valores => buscaEnd(valores));
Promise.all(conjCeps).then(respostas => console.log(respostas));





