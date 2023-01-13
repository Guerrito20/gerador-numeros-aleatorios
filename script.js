const botao = document.querySelector("#botao");

botao.onclick = function ativar() {
  const display = document.getElementById("resultado-final");
  let min1 = parseInt(document.getElementById("Min").value);
  let max1 = parseInt(document.getElementById("Max").value);

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
