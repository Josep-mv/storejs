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
class Product {
    constructor(id, title, price, stock, images, onsale) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
}
    sellUnits(units) {
        this.stock = this.stock - units
        if(this.stock>=1){
            console.log("El stock del producto "+this.title+" acaba de disminuir a: "+this.stock);
        } else{
            console.log("No hay suficiente stock")
        } 
    }
}

const prod5 = new Product("id123", "mesa", 15, 12,[],true);
console.log(prod5);

prod5.sellUnits(10);
prod5.sellUnits(5);

