let navbar = () => {
    return `<div>
        <div><a href="home.html">Receipes</a> </div>
        <div><a href="recipe.html">Random Receipes</a></div>
        <div><a href="recipeOFday.html">Receipe of Day</a></div>
    </div>
    <div>
        <input placeholder="Search Receipes" type="text" id="sea-reci">
    </div>
    <div>
        <button id="sign_btn">SignUp</button>
    </div>`
}

let fetchUrl = async (url) =>{
    let data = await fetch(url)
    data = await data.json();
    // console.log(data)
    return data
}

function displayData(data){
    if(data==null)return;
    var cont = document.getElementById("containter")
    cont.innerHTML = null;
    data.forEach(ele => {
        console.log(ele)
        var div = document.createElement("div")
        var image = document.createElement("img")
        image.src = ele.strMealThumb
        var name = document.createElement("p")
        name.innerText = ele.strMeal
        div.append(image, name)
        cont.append(div)
    });
}

function userStatus(){
    var check_user = localStorage.getItem('user_status')
    var btn = document.getElementById("sign_btn")
    if(check_user == null){
        btn.innerText = "SignUp"
        window.location.href = "signUp.html"
    }else if(check_user == "LogOut"){
        window.location.href = "login.html"
    }
    
    else if(check_user == "SignUp" || check_user == "LogOut"){
    }else{
        btn.textContent = "LogOut"
    }
}


function login_btn(){
    var check_user = localStorage.getItem('user_status')
    var btm = document.getElementById("sign_btn")
    if(check_user == null){
        window.location.href = "index.html"
    }else if(check_user == "SignUp" || check_user == "LogOut"){
        window.location.href = "login.html"
    }else{
        localStorage.setItem('user_status', "LogOut") 
        window.location.reload()
    }
}

function stickynavbar(){
    const navbar = document.querySelector("#navbar")
    let top1 = navbar.offsetTop;
    if(window.scrollY >= top1){
        navbar.classList.add('sticky');
    }
}


export {navbar, fetchUrl,  displayData,  login_btn,  userStatus, stickynavbar}