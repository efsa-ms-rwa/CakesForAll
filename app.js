const express = require('express')
var cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

var products = [
    { productNumber: 1, productUnitPrice: 40.00, productName: "Čokoladna torta", productDescription: null, imageUrl: "assets/products/dark-chocolate-cake-2002494_960_720.jpg", isPopular: true },
    { productNumber: 2, productUnitPrice: 50.00, productName: "Rođendanska torta", productDescription: null, imageUrl: "assets/products/birthday-cake-name-gavin.png", isPopular: false },
];

app.get('/catalogue', (req, res) => {
    res.send(products)
})

// example: http://localhost:3000/catalogue/product/?productNumber=1
app.get('/catalogue/product', (req, res) => {
    let productNumber = req.query.productNumber;
    let product = products.filter(product => product.productNumber == productNumber)[0];

    res.send(product);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
