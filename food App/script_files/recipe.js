import {navbar, fetchUrl, displayData, login_btn,  userStatus, stickynavbar} from './component.js'

window.addEventListener('scroll', stickynavbar)
document.getElementById("navbar").innerHTML = navbar();

let data = async() => {
    let url = await fetchUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
    url = url.meals;
    displayData(url)
}
window.addEventListener('load', data)
window.addEventListener('load', userStatus)
var btm = document.getElementById("sign_btn")
btm.addEventListener('click', login_btn)