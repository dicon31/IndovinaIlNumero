const ms1=document.getElementById("messaggio1");
const ms2=document.getElementById("messaggio2");

const tentativi=document.getElementById("tentativi");
const NumeroInserire=document.getElementById("NumeroInserire");

const bt1=document.getElementById("Indovina");
const bt2=document.getElementById("NuovaPartita");
const error=document.getElementById("errore");
const error1=document.getElementById("errore1");

let NumRandom=Math.floor(Math.random()*100)+1;
console.log(NumRandom);

let count=0;

tentativi.onblur=function() {
    if (tentativi.value==""){ //se non ho scritto nulla
        error.innerHTML="Inserire i numeri di tentativi";
        ms2.style.display="none";
        error.style.display="block";
        setTimeout(function(){
            error.style.display="none";
        },5000);
    } else { //se ho scritto qualcosa
        error.innerHTML="";
    }
}
NumeroInserire.onblur=function() {
    if (NumeroInserire.value==""){ //se non ho scritto nulla
        error1.innerHTML="Inserire il numero";
        ms2.style.display="none";
        error1.style.display="block";
        setTimeout(function(){
            error1.style.display="none";
        },5000);
    } else { //se ho scritto qualcosa
        error1.innerHTML="";
    }
}


bt1.onclick=function() { //all click del buttone INDOVINA
    count++;
    tentativi.disabled=true; //per bloccare subito quando inserisco il numero
  
    if (NumeroInserire.value==NumRandom){ //Se è uguale
        ms1.innerHTML="BRAVO HAI INDOVINATO! IL  NUMERO ESTRATTO E' "+ "<span>" + NumRandom + "</span>" 
        ms1.style.display="block"
        ms2.style.display="none"
        console.log(count,NumeroInserire.value)
        console.log("BRAVO HAI INDOVINATO! IL  NUMERO ESTRATTO E' "+ NumRandom)
        bt1.disabled=true;
        NumeroInserire.disabled=true;
    } 
    else if (NumeroInserire.value>NumRandom){ //Se è basso
        ms2.innerHTML="TENTATIVO " + count + " ERRATTO.<br>INSERISCI UN NUMERO + BASSO"
        ms2.style.display="block"
        console.log(count,NumeroInserire.value)
        console.log("TENTATIVO " + count )
        console.log("Inserisci un numero più basso")
        setTimeout(function(){
            ms2.style.display="none";
        },3000);

    }
    else if (NumeroInserire.value<NumRandom){ //Se è alto
        ms2.innerHTML="TENTATIVO " + count + " ERRATTO.<br>INSERISCI UN NUMERO + ALTO"
        ms2.style.display="block"
        console.log(count,NumeroInserire.value)
        console.log("TENTATIVO " + count )
        console.log("Inserisci un numero più alto")
        setTimeout(function(){
            ms2.style.display="none";
        },3000);

    }
    if (tentativi.value<count){
        ms2.innerHTML="GAME OVER IL NUMERO E' " + NumRandom +"! VUOI FARE UN ALTRA PARTITA?"
        ms2.style.display="block"
        ms1.style.display="none"
        error1.style.display="none"
        console.log(count,NumeroInserire.value)
        console.log("GAME OVER! VUOI FARE UN ALTRA PARTITA?")
        setTimeout(function(){
            ms2.style.display="none";
        },6000);
        bt1.disabled=true; 
        NumeroInserire.disabled=true;
        
        
    }
}

bt2.onclick=function(){ //Ricarico la pagina
    window.location.reload()
}