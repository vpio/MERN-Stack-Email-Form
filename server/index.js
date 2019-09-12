const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String
});

var User = mongoose.model('User', userSchema);

mongoose.connect('mongodb+srv://vpio:ZrznvbEcR6HmIf8i@cluster0-zjfia.azure.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', () => {
    console.log('Successfully connected to MongoDB.');
});

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

app.get('/users/index', (req, res) => {
  User.find((err, user) => res.json({ user: user }))
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
