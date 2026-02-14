const express = require('express');
const router = express.Router();

router.get('/collections', (req, res) => {
    res.json({ message: 'Fetch hadith collections!' });
});

router.get('/:collection/:number', (req, res) => {
    const { collection, number } = req.params;
    res.json({ message: `Fetch Hadith ${number} from ${collection}!` });
});

router.get('/search', (req, res) => {
    const { keyword } = req.query;
    res.json({ message: `Search hadiths with keyword: ${keyword}!` });
});

module.exports = router;