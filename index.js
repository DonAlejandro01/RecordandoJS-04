function dobleFiltro(palabras){
let contador = 0;
for(let i =0;i<palabras.length;i++){
    //¿Porque la segunda condicion pones [i][0]? para leer la primera letra del texto que nos estan pasando
    if(palabras[i].length>=5 && palabras[i][0]==="a"){
        contador ++;
    }
}
return contador
}

const array=dobleFiltro(["amor", "animal", "sol", "amigo", "perro", "azul", "lunes"])

console.log(`Las palabras que empiezan con A y que tienen mas de 5 letras son ${array}`)