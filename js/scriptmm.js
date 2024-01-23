const opciones=['rojo','verde','azul','amarillo','negro','blanco'];
let jugadamaquina=[];
//La máquina elige sus 4 colores
for(let i=0;i<4;i++){
    jugadamaquina[i]=opciones[Math.floor(Math.random() * 5)]
}
//Pasamos por consola la jugada para poder hacer comprobaciones
console.log(jugadamaquina)
intento=0;

existeenarray=function(arry,numero){
    for(let i=0;i<arry.length;i++){
        if(arry[i]==numero){
            return true;
        }
    }
    return false;
}
//Creamos un contador que nos dirá al final cuanto hemos tardado
let tiempo=0;
function contador(){
    tiempo=tiempo+1;
}
let Intervalotiempo=setInterval(contador,1000);

let estado=false;
let Boton=document.getElementById('Send');
Boton.onclick=function(){
    if (intento<10 && estado===false){
        let parent = document.getElementById('columna2');
        let caja=document.getElementsByClassName('caja')[intento];
        let divTag = document.createElement('div');
        divTag.setAttribute("class", "caja");
        //Obtenemos las elecciones del jugador
        let eleccion1=document.getElementsByClassName('Eleccion1')[0]
        let eleccion2=document.getElementsByClassName('Eleccion2')[0]
        let eleccion3=document.getElementsByClassName('Eleccion3')[0]
        let eleccion4=document.getElementsByClassName('Eleccion4')[0]
        let jugadajugador=[eleccion1.value,eleccion2.value,eleccion3.value,eleccion4.value];

        //Cambiamos los botones de elección por botones con el color correspondiente
        let Eleccion1=document.createElement('button')
        Eleccion1.setAttribute("class", `btn${eleccion1.value}`);
        eleccion1.remove()
        let Eleccion2=document.createElement('button')
        Eleccion2.setAttribute("class", `btn${eleccion2.value}`);
        eleccion2.remove()
        let Eleccion3=document.createElement('button')
        Eleccion3.setAttribute("class", `btn${eleccion3.value}`);
        eleccion3.remove()
        let Eleccion4=document.createElement('button')
        Eleccion4.setAttribute("class", `btn${eleccion4.value}`);
        eleccion4.remove()
        caja.appendChild(Eleccion1)
        caja.appendChild(Eleccion2)
        caja.appendChild(Eleccion3)
        caja.appendChild(Eleccion4)
        let botonoc=document.createElement('button');
        botonoc.setAttribute("class", `btnoculto`);
        caja.appendChild(botonoc)
        let exacto=0;
        let correcto=0;
        let resultados=[];
        for (let i=0;i<4;i++){
            if(jugadajugador[i]===jugadamaquina[i]){
                exacto++;
                resultados[i]=i;
            }
            else{
                resultados[i]=-1;
            }
        }
        for (let i=0;i<4;i++){
            if(resultados[i]===-1){
                for(let j=0;j<4;j++){
                    if(i!=j && jugadajugador[i]===jugadamaquina[j] && existeenarray(resultados,j)===false){
                        correcto++;
                        resultados[i]=j;
                        break;
                    }
                }
            }
        }
        console.log(exacto,correcto)
        console.log(resultados)

        let cajaaciertos=document.createElement('div');
        cajaaciertos.setAttribute("class", "aciertos");
        caja.appendChild(cajaaciertos);
        //pone los aciertos exactos y los aciertos que no encajen.
        for (let i=0;i<exacto;i++){
            let btnexacto=document.createElement('button');
            btnexacto.setAttribute("class", `btnnegro`);
            cajaaciertos.appendChild(btnexacto)
        }
        for (let i=0;i<correcto;i++){
            let btncorrecto=document.createElement('button')
            btncorrecto.setAttribute("class", `btnblanco`);
            cajaaciertos.appendChild(btncorrecto)
        }
        for (let i=exacto+correcto;i<4;i++){
            let btnvacio=document.createElement('button');
            btnvacio.setAttribute("class", `btnoculto`);
            cajaaciertos.appendChild(btnvacio);
        }

        //Comprobamos si hemos ganado y entonces mostramos la solución y el tiempo
        if(resultados[0]===0&&resultados[1]===1&&resultados[2]===2&&resultados[3]===3){
            estado=true;
            clearInterval(Intervalotiempo);
            let padre = document.getElementById('columna1');
            let parrafo=document.createElement('div');
            parrafo.innerHTML=`<p>${tiempo}s</p>`;
            padre.appendChild(parrafo);
            for(let i=0;i<4;i++){
                let oculto=document.getElementById(`btnoculto${i}`);
                oculto.setAttribute("class", `btn${jugadamaquina[i]}`);
                
            }
            Boton.remove()
            //Creamos boton para crear nueva partida
            let boton=document.createElement('div');
            boton.innerHTML='<button onclick="location.reload()">Volver a jugar</button>';
            parent.appendChild(boton);
        }
        else{
        //Creamos las opciones de la siguiente jugada solo si no hemos ganado
            divTag.innerHTML = `<select class="Eleccion1">
                <option value="rojo">rojo</option>
                <option value="verde">verde</option>
                <option value="azul">azul</option>
                <option value="amarillo">amarillo</option>
                <option value="negro">negro</option>
                <option value="blanco">blanco</option>
            </select>
            <select class="Eleccion2">
                <option value="rojo">rojo</option>
                <option value="verde">verde</option>
                <option value="azul">azul</option>
                <option value="amarillo">amarillo</option>
                <option value="negro">negro</option>
                <option value="blanco">blanco</option>
            </select>
            <select class="Eleccion3">
                <option value="rojo">rojo</option>
                <option value="verde">verde</option>
                <option value="azul">azul</option>
                <option value="amarillo">amarillo</option>
                <option value="negro">negro</option>
                <option value="blanco">blanco</option>
            </select>
            <select class="Eleccion4">
                <option value="rojo">rojo</option>
                <option value="verde">verde</option>
                <option value="azul">azul</option>
                <option value="amarillo">amarillo</option>
                <option value="negro">negro</option>
                <option value="blanco">blanco</option>
            </select>`;

            parent.appendChild(divTag);
        }
        intento++;
    }
    else{
        if(estado===false){
        alert("Se acabaron los intentos");
        }
        else{
            alert("Ganaste");
        }
    }
}