import express from 'express';
import data from './data.js';

const app = express();

// test
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/aka/:aka', (req, res) => {
  const product = data.products.find((x) => x.aka === req.params.aka);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
  console.log('Connection to the Server was Successful');
});
