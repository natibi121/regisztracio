function ell(){
    hiba = false;
    pattern = /[0-9]/;
    password = document.getElementById("psw").value;
    if (password == "") {
        alert("Töltse ki a jelszó mezőt!");
        return
    }
    result = password.match(pattern);
    if (!result){
        alert("Számjegyet is tartalmazzon a jelszó!");
        document.getElementById("psw").value = "";
        return;
    }
    pattern = /[a-z]/;
    result = password.match(pattern);
    if (!result){
        hiba = true;
        alert("Kisbetűt is tartalmazzon a jelszó!");
        document.getElementById("psw").value = "";
        return;
    }
    pattern = /[A-Z]/;
    result = password.match(pattern);
    if (!result){
        hiba = true;
        alert("Nagybetűt is tartalmazzon a jelszó!");
        document.getElementById("psw").value = "";
        return;
    }
    pattern = /[@_$]/;
    result = password.match(pattern);
    if (!result){
        hiba = true;
        alert("Különleges karaktert is tartalmazzon a jelszó!");
        document.getElementById("psw").value = "";
        return;
    }
}

function ell2() {

    password = document.getElementById("psw").value;
    password2 = document.getElementById("psw2").value;
    if (password2 != ''){

        if (password != password2){
            alert("Nem egyezik a két jelszó!");
            document.getElementById("psw2").focus();
            document.getElementById("psw2").value = "";
        }
    }
}

function mezottorol(){
    mezok = document.getElementsByTagName("input");
    for (let index = 0; index < mezok.length; index++) {
        if (mezok[index].type == "radio" || mezok[index].type == "checkbox"){ 
            mezok[index].checked = false;
        }
        mezok[index]. value = "";
    }
}