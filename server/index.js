const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String
});

var User = mongoose.model('User', userSchema);

mongoose.connect('mongodb+srv://vpio:ZrznvbEcR6HmIf8i@cluster0-zjfia.azure.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
const PORT = process.env.port || 3001

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  if (req.body.email !== '' && req.body.name !== '') {
    console.log(`Saving ${req.body.name}'s info'`)
    new User({ name: req.body.name, email: req.body.email}).save();
    res.send({ success: true })
  } else {
    res.send({ success: false })
  }
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
