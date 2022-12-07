var n1, n2, soma, subtração, multiplicação, divisão;
n1=parseFloat(prompt("digite um número: "));
n2=parseFloat(prompt("digite outro número: "));
soma=n1+n2;
subtração=n1-n2;
multiplicação=n1*n2;
divisão=n1/n2;
alert("a soma é: "+soma);
alert("a subtração é: "+subtração);
alert("a multiplicação é: "+multiplicação);
if(n2==0){
    alert("divisão não pode ser realizada");
}
else{
    alert(divisão);
}

