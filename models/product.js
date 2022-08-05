const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'products.json' 
);

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if(err){
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    } // constructing a object with title t

    save() {
        this.id = Math.random().toString();
        //products.push(this)
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    } // storing current object in the array

    static fetchAll(cb){
        getProductsFromFile(cb);
        //return products;
    } // it is static, it is called directly on the class no t on an instantiated object

    static findById(id, cb){
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }


}