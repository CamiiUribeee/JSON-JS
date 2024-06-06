function sumar(acumulado, valor) {
    return new Promise(function (resolve, reject) {    //variables para saber cuando se esta cumpliendo la promesa y cuando se está rechazando 
        if (valor == 2) return reject("Los números 2 son de mala suerte")   //aquí quiero rechazar la promesa 



        let suma
        setTimeout(function () {
            suma = acumulado + valor
            resolve(suma)   //aqui le estoy indicando que se cumpla la promesa 
        }, 1000);
    })
}

let acumulado = 0
sumar(acumulado, 4).then(function (suma) {   //el .then es cuando yo cumplo la promesa 
    //console.log(suma)
    return sumar(suma, 4)
})
    .then(function (suma) {
        //console.log(suma)
        return sumar(suma, 2)
    })
    .then(function (suma) {
        console.log(suma)
    })
    .catch(function (error) {
        console.log(error)
    })

console.log("Estoy al final!!!!")

