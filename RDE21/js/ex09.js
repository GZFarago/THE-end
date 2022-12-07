var dia;
dia=parseFloat(prompt("digite um número de um a sete"));
switch(dia){
    case 1:{
        alert("domingo");
        break;
    }
    case 2:{
        alert("segunda");
        break;
    }
    case 3:{
        alert("terça");
        break;
    }
    case 4:{
        alert("quarta");
        break;
    }
    case 5:{
        alert("quinta");
        break;
    }
    case 6:{
        alert("sexta");
        break
    }
    case 7:{
        alert("sábado");
        break;
    }
    default:{
        alert("opção inválida")
        break
    }
}