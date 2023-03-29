function contaLikes(){
  heart.classList.toggle('heart-animation')
  let pElementV=parseInt(pElement.innerHTML);
  if(pElementV!==pInicial)
    pElement.innerHTML=pElementV-1;
  else
    pElement.innerHTML=pElementV+1;   
}
function contaLikes2(){
  heart2.classList.toggle('heart-animation')
  let pElementV=parseInt(pElement2.innerHTML);
  if(pElementV!==pInicial2)
    pElement2.innerHTML=pElementV-1;
  else
    pElement2.innerHTML=pElementV+1;   
}
function contaLikes3(){
  heart3.classList.toggle('heart-animation');
  let pElementV=parseInt(pElement3.innerHTML);
  if(pElementV!==pInicial3)
    pElement3.innerHTML=pElementV-1;
  else
    pElement3.innerHTML=pElementV+1;   
}


const heart = document.querySelector('.heart1');
let pElement = document.getElementById("areaContador1");
let pInicial=parseInt(pElement.innerHTML);

const heart2 = document.querySelector('.heart2');
let pElement2 = document.getElementById("areaContador2");
let pInicial2=parseInt(pElement2.innerHTML);

const heart3 = document.querySelector('.heart3');
let pElement3 = document.getElementById("areaContador3");
let pInicial3=parseInt(pElement3.innerHTML);


heart.addEventListener('click', contaLikes);
heart2.addEventListener('click', contaLikes2);
heart3.addEventListener('click', contaLikes3);


const dropdownElementList = document.getElementById('settingButton')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))