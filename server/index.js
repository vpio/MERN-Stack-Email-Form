const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.port || 3001

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  if (req.body) {
    console.log('Email: ', req.body.email)
    console.log('Name: ', req.body.name)
    res.send({ success: true })
  }
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
