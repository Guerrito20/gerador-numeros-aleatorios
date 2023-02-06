const botao = document.querySelector("#botao");
const resetbtn = document.getElementById("reset");
const display = document.getElementById("resultado-final");
const defaultmin = 1;
const defaultmax = 50;
const defaultv = 0;

let min1 = parseInt(document.getElementById("Min").value);
let max1 = parseInt(document.getElementById("Max").value);

const buttons = document.querySelectorAll(".buttons2");


document.getElementById("Min").addEventListener("input", function() {
  
  min1 = parseInt(this.value);
  
  if (isNaN(min1)) {
    min1 = defaultmin;
    this.value = defaultmin;
  }
    

  console.log(min1);
})

document.getElementById("Max").addEventListener("input", function() {
  max1 = parseInt(this.value);

  if (isNaN(max1)) {
    max1 = defaultmax;
    this.value = defaultmax;
  }
    


  console.log(max1);
});



buttons.forEach(button => {
  button.addEventListener('click', event => {
    const clickedButtonId = event.target.id;

    //diminuir o minimo
    if (clickedButtonId === 'minusMin') {

        
    document.getElementById("Min").stepDown(1);
    min1--;
    console.log(min1);

     
    //aumentar o minimo
    }else if (clickedButtonId == "maxMin") {
      document.getElementById("Min").stepUp(1);
      min1++;
      console.log(min1);
  
    
      //diminuir o maximo
    } else if (clickedButtonId == "minusMax") {
      
      max1--;
      document.getElementById("Max").stepDown(1);
  
      console.log(max1);
      //aumentar o maximo
    } else if (clickedButtonId == "maxMax") {
     
      max1++;
      document.getElementById("Max").stepUp(1);
  
      console.log(max1);
    }
    
  });
});




botao.onclick = function ativar() {
  if (min1 > max1) {
    window.alert(
      `erro 1: o numero minimo ${min1} é maior do que o numero maximo ${max1}`
    );
  } else if (min1 <= 0 || min1 >= 9999) {
    window.alert(`erro2: o numero tem que ser entre 1 e 9999`);
    console.log(min1);
  } else {
    console.log(min1, max1);

    min1 = Math.ceil(min1);

    const result = Math.floor(Math.random() * (max1 - min1 + 1) + min1);

    display.innerHTML = result;

    console.log(`o resultado é ${result}`);
  }
};

