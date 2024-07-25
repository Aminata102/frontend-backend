const express = require('express');
const mongoose = require('mongoose');
const productModel = require('./models/product.models.js');
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use("/api/products", productRoute);





app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
});



//app.get("/api/products", async (req, res) => {
    //try {
      //  const products = await Product.find({});
        //res.status(200).json(products);
    //} catch (error) {
      //  res.status(500).json({message: error.message});
    //}
// });



//app.get('/api/products/:id', async (req, res) =>{

    //try {
         //const { id } = req.params;
         //const product = await Product.findById(id);
         //res.status(200).json(product);
    //} catch (error) {
        //res.status(500).json({message: error.message});
    //}
//});



//app.post('/api/products', async (req, res) => {
    //try {
        //const product = await Product.create(req.body);
        //res.status(200).json(product);
    //} catch (error) {
        //res.status(500).json({ message: error.message }); // Corrected the status code to 500
    //}
//});



//update a product
//app.put('/api/product/:id', async (req, res) =>{
   //try {
        //const { id } = req.params;

        //const product = await Product.findByIdAndUpdate(id, req.body);

        //if (!product) {
            //return res.status(404).json({message: "Product not fond"});
        //}

        //const updateProduct = await Product.findById(id);

        //res.status(200).json(updateProduct);

   //} catch (error) {
     //res.status(500).json({message: error.message});
   //}
//});


//
//


//delete a product


// app.delete('/api/product/:id', async (req, res) =>{
//     try {
//          const { id } = req.params;
 
//          const product = await Product.findByIdAndDelete(id);
 
//          if (!product) {
//              return res.status(404).json({message: "Product not fond"});
//          }
 
//          //const updateProduct = await Product.findById(id);
 
//          res.status(200).json({message: "Product delete successfully"});
 
//     } catch (error) {
//       res.status(500).json({message: error.message});
//     }
//  });



mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log('Connected to database!');
        app.listen(3000, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });
