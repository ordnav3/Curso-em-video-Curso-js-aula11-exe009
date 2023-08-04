function verificar(){
    var nas = window.document.getElementById('nasc').value
    var res = window.document.getElementById('res')

    res.innerHTML = `<p>Você nasceu em <strong>${nas}</strong> !</p>`

    if(nas == 'Brasil'){
        res.innerHTML += 'Você é <strong>Brasileiro!</strong>'
    }else{
        res.innerHTML += 'Você é gringo, e <strong>vai pagar mais caro</strong>'
    }
}