import { navbar, fetchUrl, login_btn, userStatus, stickynavbar } from './component.js'
window.addEventListener('scroll', stickynavbar)

document.getElementById("navbar").innerHTML = navbar();
window.addEventListener('load', userStatus)

var btn = document.getElementById("sign_btn")
btn.addEventListener('click', login_btn)

let data = async () => {
    let url = await fetchUrl(`https://www.themealdb.com/api/json/v1/1/random.php`)
    url = url.meals;
    display(url)
}

window.addEventListener('load', data)
function display(data) {
    let container = document.getElementById("container0fday")
    container.innerHTML = null;
    var ele = data[0]
    console.log(ele)
    var div = document.createElement("div")
    var image = document.createElement("img")
    image.src = ele.strMealThumb
    var name = document.createElement("p")
    name.innerText = ele.strMeal
    div.append(image, name)
    container.append(div)
}