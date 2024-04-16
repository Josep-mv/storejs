let totalApagar = 0;

// Pedir al usuario la cantidad de productos
const cantidad = Number(prompt("¿Cuántos productos desea llevar?"));

// Iterar sobre la cantidad de productos
for (let index = 1; index <= cantidad; index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidadProducto = Number(prompt("¿Cuántas unidades del producto " + nombre + " desea llevar?"));
    const precio = Number(prompt("¿Cuánto cuesta cada unidad del producto " + nombre + " S/ ?"));
    const subtotal = cantidadProducto * precio;
    totalApagar += subtotal;
    console.log("LLevaste " + cantidadProducto + " unidades de " + nombre + " a " + precio + " soles c/u")
}

// Mostrar el total a pagar
alert("Total a pagar: S/" + totalApagar.toFixed(2));