const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.port || 3001

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  if (req.body.email !== '' && req.body.name !== '') {
    console.log('Email: ', req.body.email, 'Name: ', req.body.name)
    res.send({ success: true })
  } else {
    res.send({ success: false })
  }
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
