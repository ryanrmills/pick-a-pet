/*
Name: Ryan Mills
Date: 10/11/2024
Filename: script.js
Intructs webpage behavior
*/

// define variables for age, type of pet, and button
let userAge = document.getElementById('ageInput')
let typeInOut = document.getElementById('inOrOut')
let button = document.getElementById('recommend')

// anonymous function accounting for age, type and recommendation
button.onclick = function(){
  //variables for each value 
  let ageValue = userAge.value;
  let inOut = typeInOut.value;

  // Display the age and type of the pet
  document.getElementById('summaryAge').innerHTML = `Age: ${ ageValue }`
  document.getElementById('summaryType').innerHTML = `Type: ${ inOut }`


  //if else conditional for each age group and pet type
  if (ageValue >= 0 && ageValue <= 10){
    if (inOut.toLowerCase() == 'indoor'){
      document.getElementById('recommendArea').innerHTML = "We recommend a tarantula!"
      document.getElementById('imageArea').innerHTML ='<img src="assets/tarantulaImage.jpg" style="width:400px; margin-bottom: 50px;">' 
    } else if (inOut.toLowerCase() == 'outdoor') {
      document.getElementById('recommendArea').innerHTML = "We recommend a chicken!"
      document.getElementById('imageArea').innerHTML ='<img src="assets/chickenImage.webp" style="width:400px; margin-bottom: 50px;">'
    }
  } else if (ageValue >= 11 && ageValue <= 20){
    if (inOut.toLowerCase() == 'indoor'){
      document.getElementById('recommendArea').innerHTML = "We recommend a boa constrictor!"
      document.getElementById('imageArea').innerHTML ='<img src="assets/boaImage.webp" style="width:400px; margin-bottom: 50px;">'
    } else if (inOut.toLowerCase() == 'outdoor') {
      document.getElementById('recommendArea').innerHTML = "We recommend an alpaca!"
      document.getElementById('imageArea').innerHTML ='<img src="assets/alpacaImage.webp" style="width:400px; margin-bottom: 50px;">'
    }
  } else if (ageValue >= 21 && ageValue <= 50){
    if (inOut.toLowerCase() == 'indoor'){
      document.getElementById('recommendArea').innerHTML = "We recommend a rat!"
      document.getElementById('imageArea').innerHTML ='<img src="assets/ratImage.jpg" style="width:400px; margin-bottom: 50px;">'
    } else if (inOut.toLowerCase() == 'outdoor'){
      document.getElementById('recommendArea').innerHTML = "We recommend a cow!"
      document.getElementById('imageArea').innerHTML ='<img src="assets/cowImage.webp" style="width:400px; margin-bottom: 50px;">'
    }
  } else if (ageValue > 50){ 
    if (inOut.toLowerCase() == 'indoor'){
      document.getElementById('recommendArea').innerHTML = "We recommend a rabbit!"
      document.getElementById('imageArea').innerHTML ='<img src="assets/rabbitImage.webp" style="width:400px; margin-bottom: 50px;">'
    } else if(inOut.toLowerCase() == 'outdoor'){
      document.getElementById('recommendArea').innerHTML = "We recommend a goat!"
      document.getElementById('imageArea').innerHTML ='<img src="assets/goatImage.png" style="width:400px; margin-bottom: 50px;">'
    }
  }
}
