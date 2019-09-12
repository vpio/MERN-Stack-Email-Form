const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

var userSchema = new mongoose.Schema({
  name: String,
  email: String
});

var User = mongoose.model('User', userSchema);

mongoose.connect(`mongodb+srv://vpio:${process.env.MONGOPASS}@cluster0-zjfia.azure.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

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
  if (req.body.email !== '' && req.body.name !== '' && req.body.persistent) {
    console.log(`Saving ${req.body.name}'s info to MongoDB...`)
    new User({ name: req.body.name, email: req.body.email}).save((err, user) => {
      if (err) {
        console.log('Failed to save: ' + err)
        res.status(400).send('Error: ' + err);
        return
      }
      console.log(user.name + " saved to User collection.");
    });
    res.sendStatus(200)
  } else if (req.body.email !== '' && req.body.name !== '' && !req.body.persistent){
    console.log(`Pretending to save ${req.body.name}'s info...`)
    res.sendStatus(200)
    console.log(`Saved!`)
  } else { res.status(400).send('Bad Request') }
})

app.post('/password', (req, res) => {
  if (req.body.password === process.env.PASSWORD){
    console.log('Password approved');
    res.send({ approved: true });
  } else {
    console.log('Incorrect password');
    res.send({ approved: false });
  }
})

app.get('/users/index', (req, res) => {
  User.find((err, user) => res.json({ user: user }))
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
