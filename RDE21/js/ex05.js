var n, nome, idade, cpf;
nome=prompt("qual seu nome?");
idade=parseFloat(prompt("qual sua idade?"));
alert("Bem vindo(a) "+nome+"! você tem "+idade+" anos.");
if(idade>=18){
    cpf=prompt("digite seu CPF, por favor");
    alert("seu CPF é: "+cpf);
    n=parseFloat(prompt("digite um número"));
    if(n%2==0){
        alert("o número é par");
    }
    else{
        alert("o número é ímpar");
    }
    if(n%7==0){
        alert("o número é divísivel por 7");
        if(n%7!=0){
            alert("não é dívisivel por 7")
        }
    }
    
    if(n%3==0){
        alert("o número é divisível por 3");
        if(n%3!=0){
            alert("não é dívisivel por 3")
        }
    }
    
}
else{
    alert("Você é menor de idade");
}
