const express = require('express');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Korisničko ime za pristup MySQL bazi
    password: '', // Lozinka za pristup MySQL bazi
    database: 'myslopes' // Ime vaše MySQL baze podataka
  });
  
  connection.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL');
    }
  });
  
  // Middleware za obradu JSON zahteva
  app.use(bodyParser.json());








app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;
    // Hashiranje lozinke
    const hashedPassword = await bcrypt.hashSync(password, 10);
  
    const checkUserQuery = 'SELECT * FROM users WHERE Email = ?';
    connection.query(checkUserQuery, [email], (error, results) => {
      if (error) {
        return res.status(500).json({ message: 'Server error.' });
      }
      if (results.length > 0) {
        return res.status(400).json({ message: 'User already exists.' });
      } else {
        const insertUserQuery = 'INSERT INTO users (Username, Email, PasswordHash) VALUES (?, ?, ?)';
        connection.query(insertUserQuery, [username, email, hashedPassword], (error, results) => {
          if (error) {
            return res.status(500).json({ message: 'Error creating the user.' });
          }
          res.status(201).json({ message: 'User registered successfully.' });
        });
      }
    });
  });

  app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Logging in:', email); //
    const findUserQuery = 'SELECT * FROM users WHERE Email = ?';
    connection.query(findUserQuery, [email], async (error, results) => {
        console.log('User found:', error, results); // Logovanje rezultata pronalaska korisnika
      
      if (error) {
        return res.status(500).json({ message: 'Server error.' });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: 'User not found.' });
      } else {
        const user = results[0];
        const passwordMatch = await bcrypt.compareSync(password, user.PasswordHash);
        if (passwordMatch) {
          res.json({ message: 'Login successful.', user: { id: user.id, username: user.username, email: user.email } });
        } else {
          res.status(401).json({ message: 'Invalid credentials.' });
        }
      }
    });
  });
  






  const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
