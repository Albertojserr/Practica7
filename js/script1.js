const elecciones=['piedra','papel','tijera','lagarto','spock'];
let intento=0;
let ganas=0;
let pierdes=0;

let etiquetaAudio = document.createElement("audio");
etiquetaAudio.setAttribute("src", "audio1.mp3");

let Botonp=document.getElementById('btnpiedra');
Botonp.onclick=function(){
    let guess='piedra';
    checkGuess(guess)
}
let Botont=document.getElementById('btntijera');
Botont.onclick=function(){
    let guess='tijera';
    checkGuess(guess)
}
let Botonpa=document.getElementById('btnpapel');
Botonpa.onclick=function(){
    let guess='papel';
    checkGuess(guess)
}
let Botonl=document.getElementById('btnlagarto');
Botonl.onclick=function(){
    let guess='lagarto';
    checkGuess(guess)
}
let Botons=document.getElementById('btnspock');
Botons.onclick=function(){
    let guess='spock';
    checkGuess(guess)
}

let guessButton=document.getElementById('guess-btn');
guessButton.onclick=function(){checkGuess()}
function checkGuess(guess) {
    //Sonará una música de combate cuando salgan las imágenes
    etiquetaAudio.pause()
    setTimeout(function sonido(){etiquetaAudio.play()},100);
    if (intento>0){
        let Div=document.getElementById('Div1')
        Div.remove()
        let Div2=document.getElementById('mensaje')
        Div2.remove()
    }
    intento++;
    //La máquina elige su jugada aleatoriamente
    let secretNumber = Math.floor(Math.random() * 5);
    let eleccion=elecciones[secretNumber];
    let mensaje= document.createElement('div')
    mensaje.setAttribute("id", "mensaje");
    let text="";
    //Comprobamos si ganamos, empatamos o perdemos
    //En esta opción hay más casos por lo que habrá más comparaciones en cada comprobación
    if (guess===eleccion){
        mensaje.innerHTML=`<br><h2>Empate</h2><p>${guess} no mata ${eleccion}</p>`;
        text="=";
    }
    else if(guess==='piedra' && eleccion==='tijera' ||guess==='tijera' && eleccion==='papel' || guess==='papel' && eleccion==='piedra'
        || guess==='piedra' && eleccion==='lagarto' || guess==='lagarto' && eleccion==='spock' || guess==='spock' && eleccion==='tijera'
        || guess==='tijera' && eleccion==='lagarto' || guess==='lagarto' && eleccion==='papel' || guess==='papel' && eleccion==='spock'
        || guess==='spock' && eleccion==='piedra'){
            if (guess=='piedra'){
                if (eleccion==='tijera')
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} aplasta ${eleccion}</p>`;
                else{
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} aplasta ${eleccion}</p>`;
                }
            }
            else if (guess=='tijera'){
                if (eleccion==='papel'){
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} corta ${eleccion}</p>`;
                }
                else{
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} decapita ${eleccion}</p>`;
                }
            }
            else if (guess==='papel'){
                if (eleccion==='piedra'){
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} envuelve ${eleccion}</p>`;
                }
                else{
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} desautoriza ${eleccion}</p>`;
                }
            }
            else if (guess==='lagarto'){
                if (eleccion==='papel'){
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} devora ${eleccion}</p>`;
                }
                else{
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} envenena ${eleccion}</p>`;
                }
            }
            else{
                if (eleccion==='tijera'){
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} rompe ${eleccion}</p>`;
                }
                else{
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} vaporiza ${eleccion}</p>`;
                }
            }
        ganas++;
        let ganados=document.getElementById('ganados')
        //Actualizamos, si hemos ganado, la variable de victorias
        ganados.innerText=`${ganas}`;
        text="+";
    }
    else{
        if (guess==='piedra'){
            if (eleccion==='papel'){
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} envuelve ${guess}</p>`;
            }
            else{
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} vaporiza ${guess}</p>`;
            }
        }
        else if (guess==='tijera'){
            if (eleccion==='piedra'){
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} aplasta ${guess}</p>`;
            }
            else{
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} rompe ${guess}</p>`;
            }
        }
        else if(guess==='papel'){
            if (eleccion==='tijera'){
            mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} corta ${guess}</p>`;
            }
            else{
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} devora ${guess}</p>`;
            }
        }
        else if (guess==='lagarto'){
            if (eleccion==='piedra'){
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} aplasta ${guess}</p>`;
            }
            else{
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} decapita ${guess}</p>`;
            }
        }
        else{
            if (eleccion==='lagarto'){
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} envenena ${guess}</p>`;
            }
            else{
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} desautoriza ${guess}</p>`;
            }
        }
        pierdes++;
        let perdidos=document.getElementById('perdidos')
        perdidos.innerText=`${pierdes}`;
        text="-";
    }
    //Creamos un div que contendrá la jugada del jugador, de la máquina y el resultado
    let divTag = document.createElement('div');
    divTag.setAttribute("id", "Div1");
    divTag.innerHTML = `<img src="imagenes/${guess}.png" alt=${guess} width="200px"> <img src="imagenes/vs2.png" alt="versus" height="185px"><img src="imagenes/${eleccion}.png" alt=${eleccion} width="200px">`;
    let parent = document.getElementById("columna2");
    console.log(parent)
    parent.appendChild(divTag);
    parent = document.getElementById("columna2");
    parent.appendChild(mensaje);
    let jugados=document.getElementById('jugados')
    jugados.innerText=`${intento}`;
    //Añadimos la jugada en la tabla
    let tabla=document.getElementsByClassName("default")
    let tr=document.createElement('tr')
    tr.innerHTML=`<td>${guess}</td><td>${eleccion}</td><td>${text}</td>`;
    tabla[0].appendChild(tr)

}


