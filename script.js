const botao = document.querySelector('#botao');

botao.onclick = function ativar() {

  let min1 = document.getElementById('Min').value;
  let max1 = document.getElementById('Max').value;

  min1 = Math.ceil(min1);

  const result = Math.floor(Math.random() * (max1 - min1 + 1) + min1);





  document.getElementById('resultado-final').innerHTML = result

  console.log(`o resultado é ${result}`)

}
