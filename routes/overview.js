const express = require('express');
const router = express.Router();
const gs = require('gradespeed-dodea');

router.get('/', (req, res) => {
    try {
        const { username, password, schoolid } = req.query;
        gs.getGradesOverview(username, password, schoolid)
            .then(grades => {
                res.status(200).json(grades);
            })
            .catch(err => {
                res.status(401).send(err);
            })
    } catch (e) {
        res.send(e).status(401);
    }
});

module.exports = router;
