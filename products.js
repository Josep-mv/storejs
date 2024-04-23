// class Product {
//     constructor(id, title, price, stock, images, onsale) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.stock = stock;
//     this.images = images;
//     this.onsale = onsale;
// }
// }

// const prod1 = new Product("id123","mesa");
// const prod2 = new Product([],[],15,5);
// const prod3 = new Product([],[],[],[],[],true);

// console.log(prod1);
// console.log(prod2);
// console.log(prod3);
//------------------
// class Product {
//     constructor(id, title, price, stock, images, onsale, supplier) {
//     this._supplier = supplier;
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.stock = stock;
//     this.images = images;
//     this.onsale = onsale;
//     }
//     get getSupplier() {
//             return this._supplier;
//     }
//     set setSupplier(newName) {
//             this._supplier = newName;
//     }
// }
// const prod4 = new Product("id123", "mesa", 15, 5,[],true,"folk");
// console.log(prod4.getSupplier);

// prod4.setSupplier = "mavira";
// console.log(prod4.getSupplier);
//----------------
// class Product {
//     constructor(id, title, price, stock, images, onsale) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.stock = stock;
//     this.images = images;
//     this.onsale = onsale;
// }
//     sellUnits(units) {
//         this.stock = this.stock - units
//         if(this.stock>=1){
//             console.log("El stock del producto "+this.title+" acaba de disminuir a: "+this.stock);
//         } else{
//             console.log("No hay suficiente stock")
//         } 
//     }
// }

// const prod5 = new Product("id123", "mesa", 15, 12,[],true);
// console.log(prod5);

// prod5.sellUnits(10);
// prod5.sellUnits(5);
///////////////
// class Product {
//     constructor(id, title, price, stock, images, onsale) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.stock = stock;
//     this.images = images;
//     this.onsale = onsale;
// }
// }

// // Crear instancias de productos
// const prod1 = new Product("id1", "Silla", 50, 10, ["silla1.jpg", "silla2.jpg"], false);
// const prod2 = new Product("id2", "Mesa", 100, 5, ["mesa1.jpg", "mesa2.jpg"], true);
// const prod3 = new Product("id3", "Lámpara", 30, 20, ["lampara1.jpg"], true);
// const prod4 = new Product("id4", "Sofá", 200, 3, ["sofa1.jpg", "sofa2.jpg", "sofa3.jpg"], false);

// // Definir el array de productos
// const products = [prod1, prod2, prod3, prod4];

// // Imprimir array completo en la consola
// console.log("Array completo:");
// console.log(products);

// // Imprimir el segundo elemento del array
// console.log("Segundo elemento del array:");
// console.log(products[1]);

// // Imprimir la propiedad 'title' del último elemento del array
// console.log("Título del último elemento del array:");
// console.log(products[products.length - 1].title);
/////////////////

// class Product {
//     constructor(id, title, price, stock, images, onsale) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.stock = stock;
//     this.images = images;
//     this.onsale = onsale;
// }
// }
    
// //Crear instancias de productos
// const prod1 = new Product("id1", "Silla", 50, 10, ["silla1.jpg", "silla2.jpg"], false);
// const prod2 = new Product("id2", "Mesa", 100, 5, ["mesa1.jpg", "mesa2.jpg"], true);
// const prod3 = new Product("id3", "Lámpara", 30, 20, ["lampara1.jpg"], true);
// const prod4 = new Product("id4", "Sofá", 200, 3, ["sofa1.jpg", "sofa2.jpg", "sofa3.jpg"], false);
    
// //Definir el array de productos
// const products = [prod1, prod2, prod3, prod4];

// // Crear nuevas instancias de productos
// const prod5 = new Product("id5", "Escritorio", 150, 8, ["escritorio1.jpg", "escritorio2.jpg"], true);
// const prod6 = new Product("id6", "Estantería", 80, 15, ["estanteria1.jpg", "estanteria2.jpg"], false);

// // Agregar prod5 al inicio del array
// products.unshift(prod5);
// console.log("Producto agregado al inicio del array:");
// console.log(products);

// // Agregar prod6 al final del array
// products.push(prod6);
// console.log("Producto agregado al final del array:");
// console.log(products);
//////////////
// class Product {
//     constructor(id, title, price, stock, images, onsale) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.stock = stock;
//     this.images = images;
//     this.onsale = onsale;
// }
// }
    
// //Crear instancias de productos
// const prod1 = new Product("id1", "Silla", 50, 10, ["silla1.jpg", "silla2.jpg"], false);
// const prod2 = new Product("id2", "Mesa", 100, 5, ["mesa1.jpg", "mesa2.jpg"], true);
// const prod3 = new Product("id3", "Lámpara", 30, 20, ["lampara1.jpg"], true);
// const prod4 = new Product("id4", "Sofá", 200, 3, ["sofa1.jpg", "sofa2.jpg", "sofa3.jpg"], false);
    
// //Definir el array de productos
// const products = [prod1, prod2, prod3, prod4];

// // Quitar el primer elemento del array
// const primerProductoEliminado = products.shift();
// console.log("Primer elemento eliminado del array:");
// console.log(products);

// // Quitar el último elemento del array
// const ultimoProductoEliminado = products.pop();
// console.log("Último elemento eliminado del array:");
// console.log(products);
///////////
class Product {
    constructor(id, title, price, stock, colors, description, images, onsale) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.colors = colors;
    this.description = description;
    this.images = images;
    this.onsale = onsale;
}
}
// Crear instancias de productos
const prod1Images = ["silla1.jpg", "silla2.jpg", "silla3.jpg"];
const prod2Images = ["mesa1.jpg", "mesa2.jpg", "mesa3.jpg"];
const prod3Images = ["lampara1.jpg", "lampara2.jpg"];
const prod4Images = ["sofa1.jpg", "sofa2.jpg"];

const prod1 = new Product("id1", "Silla", 50, 10, ["negro", "blanco", "gris"], "Una cómoda silla para tu hogar.", prod1Images, false);
const prod2 = new Product("id2", "Mesa", 100, 5, ["marrón", "blanco"], "Una mesa resistente y elegante para tu comedor.", prod2Images, true);
const prod3 = new Product("id3", "Lámpara", 30, 20, ["plateado", "dorado"], "Una lámpara moderna para iluminar tu espacio.", prod3Images, true);
const prod4 = new Product("id4", "Sofá", 200, 3, ["azul", "gris"], "Un cómodo sofá para relajarte después de un largo día.", prod4Images, false);
    
// Definir el array de productos
let products = [prod1, prod2, prod3, prod4];

// Agregar las impresiones para observar los cambios en la lista de productos
console.log("Lista de productos completa:");
console.log(products);