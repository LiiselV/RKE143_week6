const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const dataPath = path.join(__dirname, '..', 'data', 'countries.json');

function getCountriesData() {
  const raw = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(raw);
}

// GET /countries  -> tagastab kogu JSON-objekti (countries array sees)
router.get('/', (req, res) => {
  const data = getCountriesData();
  res.json(data);
});

// GET /countries/:id  -> tagastab ühe riigi objekti ID järgi
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  const data = getCountriesData();
  const country = data.countries.find(c => c.id === id);

  if (!country) {
    return res.status(404).json({ error: 'Country not found' });
  }

  res.json(country);
});

module.exports = router;
