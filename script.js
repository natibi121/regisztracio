function ell() {
    if(document.getElementById('psw').value != document.getElementById('psw2').value){
        alert('Nem ugyan az a jelszo');
        document.getElementById('psw2').value = "";
    }
}

/*
function m_t() {
    let input = document.getElementsByTagName('input');
    for(let i = 0; i < input.length; i++){
        if (input[i].type === 'radio' || input[i].type === 'checkbox'){
            input[i].checked = false;
        } else {
            input[i].value = '';
        }
    }
}*/