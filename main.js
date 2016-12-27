function calcular(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var negative = document.getElementById("valor").value;
    var salida = document.getElementById("salida");
    
    if(negative == true){
        if((a<0) && (b<0)){
            salida.innerHTML = 1;
        }
        else{
            salida.innerHTML = 0;
        }
        
    }
    
        if((a<0)||(b<0)){
        salida.innerHTML = 1;
        }
        else{
            salida.innerHTML = 0;
        }
    
}