let inputEl =document.getElementById('password')
let btnEl =document.querySelector('.generate')
let spanEl =document.querySelector('span')
let popup =document.querySelector('.popup')

btnEl.addEventListener('click', createRandom)

function createRandom(){
const randomLetters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = 14;
    var generatedPassword='';

    for(let i=0; i<length; i++){
  let b = Math.floor(Math.random()*randomLetters.length);
  generatedPassword += randomLetters.substring(b, b-1);
    }
inputEl.value = generatedPassword

}

spanEl.addEventListener('click', ()=>{
  inputEl.select();
  inputEl.setSelectionRange(0, 9999)
  navigator.clipboard.writeText(inputEl.value)
  if(inputEl.select){
    popup.classList.add('active')
  popup.textContent= inputEl.value + ' Copied!'
  setTimeout(() => {
    popup.classList.remove('active')
    popup.style.transition = 'all 0.7s'
  }, 3000);
  }
  
})
