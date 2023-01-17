const botao = document.querySelector("#botao");
const resetbtn = document.getElementById("reset");
const display = document.getElementById("resultado-final");
const defaultmin = 1;
const defaultmax = 50;
const defaultv = 0;

let min1 = parseInt(document.getElementById("Min").value);
let max1 = parseInt(document.getElementById("Max").value);

function plusminus(id) {
  if (id == "minusMin") {
    console.log(id);

    min1--;
    document.getElementById("Min").stepDown(1);

    console.log(min1);
  } else if (id == "maxMin") {
    console.log(id);
    min1++;
    document.getElementById("Min").stepUp(1);

    console.log(min1);
  } else if (id == "minusMax") {
    console.log(id);
    max1--;
    document.getElementById("Max").stepDown(1);

    console.log(max1);
  } else if (id == "maxMax") {
    console.log(id);
    max1++;
    document.getElementById("Max").stepUp(1);

    console.log(max1);
  }
}

resetbtn.onclick = function reset() {
  display.innerHTML = defaultv;
  min1 = defaultmin;
  max1 = defaultmax;

  console.log(display, min1, max1);
};

/* function diminuir(id) {
  if ((this.id = minusMin)) {
    min1 - 1;
    console.log(min1.value);
  }
} */

botao.onclick = function ativar() {
  min1 = parseInt(document.getElementById("Min").value);
  max1 = parseInt(document.getElementById("Max").value);

  if (min1 > max1) {
    window.alert(
      `erro 1: o numero minimo ${min1} é maior do que o numero maximo ${max1}`
    );
  } else {
    console.log(min1, max1);

    min1 = Math.ceil(min1);

    const result = Math.floor(Math.random() * (max1 - min1 + 1) + min1);

    display.innerHTML = result;

    console.log(`o resultado é ${result}`);
  }
};

/* maxlength="2"
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" */

/* document.getElementById('resultado-final').innerHTML = result; */
