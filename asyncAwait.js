function sumar(acumulado, valor) {
    return new Promise(function (resolve, reject) {
        if (valor == 2) return reject("Los números 2 son de mala suerte")



        let suma
        setTimeout(function () {
            suma = acumulado + valor
            resolve(suma)
        }, 1000);
    })
}


async function main() {   //estoy indicando que la función es asíncrona 
    let acumulado = 0
    //si no pongo el try catch me bota error 
    try {
        acumulado = await sumar(acumulado, 4)
        acumulado = await sumar(acumulado, 4)
        acumulado = await sumar(acumulado, 2)

    } catch (error) {
        console.log(error)
    }


    console.log(acumulado)
}
console.log("Estoy al final!!!!")

main()


