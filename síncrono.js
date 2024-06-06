function sumar(acumulado, valor) {
    const suma = acumulado + valor   //este const solo está disponible para este bloque de código
    return suma
}

let acumulado = 0
acumulado = sumar(acumulado, 4)
acumulado = sumar(acumulado, 4)
acumulado = sumar(acumulado, 4)

console.log(acumulado)
//ejecuto en consola y me da 12 