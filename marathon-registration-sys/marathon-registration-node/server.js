const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(session({
  secret: 'your-secret-key', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


const mongoURI = 'mongodb://mongo:27017/marathon';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));


const participantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  distance: { type: String, required: true },
  medical: { type: String },
  registrationDate: { type: Date, default: Date.now },
});

const Participant = mongoose.model('Participant', participantSchema);


app.get('/', (req, res) => {
  res.render('form');
});


app.post('/register', async (req, res) => {
    let { name, email, age, distance, medical } = req.body;

    if (!name || !email || !age || !distance) {
      return res.status(400).json({ success: false, error: 'Name, email, age, race and distance required' });
    }
  
    try {
      const newParticipant = new Participant({ name, email, age, distance, medical });
      await newParticipant.save();
  
      res.status(200).json({ success: true, message: 'Registration successful' });
    } catch (err) {
      res.status(500).json({ success: false, error: 'Error saving participant' });
    }
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
