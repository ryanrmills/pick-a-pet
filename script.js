let userAge = document.getElementById('ageInput')
let typeInOut = document.getElementById('inOrOut')
let button = document.getElementById('recommend')
button.onclick = function(){
  let ageValue = userAge.value;
  let inOut = typeInOut.value;


  if (ageValue >= 0 && ageValue <= 10){
    if (inOut.toLowerCase() == 'indoor'){
      document.getElementById('recommendArea').innerHTML = "We recommend a tarantula!"
    } else if (inOut.toLowerCase() == 'outdoor') {
      document.getElementById('recommendArea').innerHTML = "We recommend a chicken!"
    }
  } else if (ageValue >= 11 && ageValue <= 20){
    if (inOut.toLowerCase() == 'indoor'){
      document.getElementById('recommendArea').innerHTML = "We recommend a boa constrictor!"
    } else if (inOut.toLowerCase() == 'outdoor') {
      document.getElementById('recommendArea').innerHTML = "We recommend an alpaca!"
    }
  } else if (ageValue >= 21 && ageValue <= 50){
    if (inOut.toLowerCase() == 'indoor'){
      document.getElementById('recommendArea').innerHTML = "We recommend a rat!"
    } else if (inOut.toLowerCase() == 'outdoor'){
      document.getElementById('recommendArea').innerHTML = "We recommend a cow!"
    }
  } else if (ageValue > 50){ 
    if (inOut.toLowerCase() == 'indoor'){
      document.getElementById('recommendArea').innerHTML = "We recommend a rabbit!"
    } else if(inOut.toLowerCase() == 'outdoor'){
      document.getElementById('recommendArea').innerHTML = "We recommend a goat!"
    }
  }
}
