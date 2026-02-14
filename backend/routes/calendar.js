'use strict';

const express = require('express');
const router = express.Router();

// Fetch Hijri date
router.get('/hijri-date', (req, res) => {
    const hijriDate = new Date().toLocaleDateString('en-TN-u-ca-islamic'); // Example Hijri date
    res.json({ hijriDate });
});

// Fetch Islamic events
router.get('/events', (req, res) => {
    const events = [
        { date: '2026-02-14', event: 'Islamic event example 1' },
        { date: '2026-03-01', event: 'Islamic event example 2' }
    ];
    res.json({ events });
});

// Convert Gregorian date to Hijri date
router.get('/convert-to-hijri/:date', (req, res) => {
    const gregorianDate = req.params.date;
    // Dummy conversion logic
    const hijriEquivalent = new Date(gregorianDate).toLocaleDateString('en-TN-u-ca-islamic');
    res.json({ hijriEquivalent });
});

module.exports = router;