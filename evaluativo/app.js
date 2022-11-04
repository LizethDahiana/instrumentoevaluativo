
const btnCalcular = document.getElementById("btn-calcular");
const txtname = document.getElementById("txt-name");
const txtnota1 = document.getElementById("txt-nota1");
const txtnota2 = document.getElementById("txt-nota2");
const txtnota3 = document.getElementById("txt-nota3");
const resulta = document.getElementById("p-result");

const printDate = () => {
  console.log(txtname.value);
  console.log(txtnota1.value);
  console.log(txtnota2.value);
  console.log(txtnota3.value);
}
btnCalcular.addEventListener("click", printDate);

btnCalcular.addEventListener("click", calcular)

function calcular(){

let nota1 = 0.3;
let nota2 = 0.3;
let nota3 = 0.4;

let txtName = txtname.value;
let n1 = txtnota1.value;
let n2 = txtnota2.value;
let n3 = txtnota3.value;

  let notafinal = (n1 * nota1) + (n2 * nota2) + (n3 * nota3) / 3;
  if (notafinal >= 4.5){
    resulta.textContent = `${txtName}, usted es Exelente" `    
  } else if (notafinal > 3.5 && notafinal < 4.5){
    resulta.textContent = `${txtName}, usted es Bueno" `    
  } else if (notafinal > 2 && notafinal < 3.4){
    resulta.textContent = `${txtName}, usted tiene la oportunidad de recuperar" `    
  } else {
    resulta.textContent = `${txtName}, usted debera repetir la materia" `    
  }


}


