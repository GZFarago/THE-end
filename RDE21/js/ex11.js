var cont, n, tabuada
n=parseFloat(prompt("digite a tabuada desejada"))
for(cont=0;cont<10001;cont++){
    tabuada=n*cont
    document.write("<h2>"+tabuada+"<h2><br>")
}
