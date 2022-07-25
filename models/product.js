const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    } // constructing a object with title t

    save() {
        products.push(this)
    } // storing current object in the array

    static fetchAll(){
        return products;
    } // it is static, it is called directly on the class no t on an instantiated object


}