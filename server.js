const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


mongoose.connect('mongodb://localhost:27017/magazinDB', { useNewUrlParser: true, useUnifiedTopology: true });


const Product = mongoose.model('Product', {
    name: String,
    category: String,
    price: Number,
    description: String
});


app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/add', async (req, res) => {
    const { name, category, price, description } = req.body;
    try {
        const product = new Product({ name, category, price, description });
        await product.save();
        res.send('Produsul a fost adăugat cu succes!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Eroare la adăugarea produsului.');
    }
});


app.get('/display', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Eroare la afișarea produselor.');
    }
});


app.delete('/delete/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        await Product.findByIdAndDelete(productId);
        res.send('Produsul a fost șters cu succes!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Eroare la ștergerea produsului.');
    }
});


app.get('/edit/:id', (req, res) => {
    const productId = req.params.id;
    res.sendFile(path.join(__dirname, 'public', 'edit.html'));
});


app.post('/search', async (req, res) => {
    const category = req.body.category;
    try {
        const products = await Product.find({ category });
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Eroare la căutarea produselor.');
    }
});


app.get('/details/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findById(productId);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).send('Eroare la căutarea produsului.');
    }
});


app.put('/update/:id', async (req, res) => {
    const productId = req.params.id;
    const { name, category, price, description } = req.body;
    try {
        const product = await Product.findByIdAndUpdate(productId, {
            name,
            category,
            price,
            description
        }, { new: true });

        if (!product) {
            return res.status(404).send('Produsul nu a fost găsit');
        }

        res.send('Produsul a fost actualizat cu succes!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Eroare la actualizarea produsului.');
    }
});

app.listen(port, () => {
    console.log(`Serverul rulează la adresa http://localhost:${port}`);
});
