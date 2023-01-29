import {navbar, fetchUrl, displayData, login_btn, userStatus, stickynavbar} from './component.js'

window.addEventListener('scroll', stickynavbar)
document.getElementById("navbar").innerHTML = navbar();
let data = async(Name) => {
    let url = await fetchUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Name}`)
    url = url.meals;
    return url;
}

window.addEventListener('load', function(){
    document.getElementById("sea-reci").style.display = 'block'

})
document.getElementById("sea-reci").addEventListener('input', Sec_food)
var id;
function Sec_food(){
   if(id){
        clearTimeout(id)
   }
   setTimeout(function(){
    let name =  document.getElementById("sea-reci").value;
    data(name).then(function(rex){
        displayData(rex)
    }, function(err){
        console.log(err)
    })
   }, 1000)
}


window.addEventListener('load',userStatus)
var btm = document.getElementById("sign_btn")
btm.addEventListener('click',login_btn)