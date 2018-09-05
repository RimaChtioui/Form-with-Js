function validate() {
    let y = document.getElementById('email').value
    let x = document.getElementById('pwd').value
    let z = document.getElementById('name').value
    let v = document.getElementById('adress').value

    if (z == "") {
        alert("You have to enter your name !")

        if (v == "") {
            alert("You have to enter your address!")

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(y)) {

            } else {
                alert("You have entered an invalid email address!")
            }

            if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}/.test(x)) {} else {
                alert("You have entered an invalid password!")
            }
        }