var v=[81,100,88, 40]
//alert(v)
v[1]=200
//alert(v[2])

lista=["Zeca",80,"rua A","irati", "PR", 1900, false];
alert(lista);
for(var i=0;i<lista.length;i++)
{
    document.write("<h2>"+lista[i]+"</h2>");
}
lista.push("84500-000")//adiciona elemento na ultima linha da lista
alert(lista)
lista.pop()//retira o ultimo elemento da lista
alert(lista)