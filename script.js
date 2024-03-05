const passwordBox = document.querySelector('#password')
const length = 15;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = '0123456789'
const symbols = '@#&%;><ß$÷¨°^ˇ*-+[}]{'

const allChars = upperCase + lowerCase + number + symbols

function createPassword(){
   let password = ''

   password += upperCase[Math.floor(Math.random()*upperCase.length)]
   password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
   password += number[Math.floor(Math.random()*number.length)]
   password += symbols[Math.floor(Math.random()*symbols.length)]


   while(length > password.length){
      password += allChars[Math.floor(Math.random()*allChars.length)]
   }
   passwordBox.value = password
}

const btn = document.querySelector('#btn-pass')
btn.addEventListener('click', function(e){
   createPassword()
})

function copyPass(){
   const passwordToCopy = passwordBox.value
   navigator.clipboard.writeText(passwordToCopy)
}

const copy = document.querySelector('#copy-btn')
copy.addEventListener('click', function(e){
   copyPass()
})