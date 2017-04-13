const Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/ru/5/5e/Gothiccover.png",
        title: 'Gothic Video Game',
        description: 'Awesome Game',
        price: 10
    }),
    new Product({
        imagePath: "http://is4.mzstatic.com/image/thumb/Purple122/v4/76/71/92/76719213-306f-bbca-788e-44e6553288a3/source/1200x630bb.jpg",
        title: 'Minecraft Video Game',
        description: 'Awesome Game',
        price: 15
    }),
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/ru/0/05/Dark_Souls_Cover_Art.jpeg",
        title: 'Dark Souls Video Game',
        description: 'Awesome Game',
        price: 50
    })

];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if(done  === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
