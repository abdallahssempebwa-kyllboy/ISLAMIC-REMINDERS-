const express = require('express');
const router = express.Router();

// Dummy data for duas
const duas = [
    { id: 1, text: "Dua for guidance", category: "guidance" },
    { id: 2, text: "Dua for forgiveness", category: "forgiveness" },
    { id: 3, text: "Dua for health", category: "health" },
    { id: 4, text: "Dua for protection", category: "protection" }
];

// Get all duas
router.get('/duas', (req, res) => {
    res.json(duas);
});

// Filter duas by category
router.get('/duas/category/:category', (req, res) => {
    const category = req.params.category;
    const filteredDuas = duas.filter(dua => dua.category === category);
    res.json(filteredDuas);
});

// Get daily dua (dummy implementation)
router.get('/duas/daily', (req, res) => {
    const dailyDua = duas[Math.floor(Math.random() * duas.length)];
    res.json(dailyDua);
});

// Save favorite dua (dummy implementation)
router.post('/duas/favorite', (req, res) => {
    const duaId = req.body.id;
    // Logic to save the favorite dua (e.g., in a database)
    res.json({ message: `Dua ID ${duaId} has been added to favorites.` });
});

// Search duas
router.get('/duas/search', (req, res) => {
    const query = req.query.q;
    const results = duas.filter(dua => dua.text.toLowerCase().includes(query.toLowerCase()));
    res.json(results);
});

module.exports = router;