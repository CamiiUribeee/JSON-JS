function sumar(acumulado, valor, callback) {
    let suma
    setTimeout(function () {   //para retrasar la respuesta 300 milisegundos 
        suma = acumulado + valor
        callback(suma)
    }, 1000);



    //return suma          //comenté ese return al poner el callback (suma)  => callback es ejecutar 
}

let acumulado = 0
sumar(acumulado, 4, function (suma) {   //función anonima que me sirva como tercer parametro    //quité el "acumulado =" porque no estoy retornando nada 
    sumar(suma, 4, function (suma) {
        sumar(suma, 2, function (suma) {
            console.log(suma)
        })
    })

})

console.log("Estoy al final!!!!")


/* acumulado = sumar(acumulado, 4)
acumulado = sumar(acumulado, 4)

console.log(acumulado) */
