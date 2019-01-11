var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties


var array = []
for ( var i = 0; i < 10; i++) {
    array.push([faker.commerce.productName(), faker.commerce.price()]);
}

console.log(array);