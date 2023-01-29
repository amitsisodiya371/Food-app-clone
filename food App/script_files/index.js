document.getElementById("log_btn").addEventListener('click', lognpage)
function lognpage(){
    console.log('hello')
    window.location.href = "LogIn.html"
}

let btm = document.getElementById("sign_btn")
document.querySelector("#submit").addEventListener('click', signUp)
function signUp(){
    console.log('hello')
    var email = document.getElementById("email")
    var name = document.getElementById("name")
    var password = document.getElementById("password")

    let obj = {
        email:email.value,
        name:name.value,
        password:password.value
    }
    localStorage.setItem('user_status', "SignUp") 
    localStorage.setItem('user_data', JSON.stringify(obj)) 
    window.location.href = "logIn.html"
}