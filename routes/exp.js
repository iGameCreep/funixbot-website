const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../auth/auth');
const { getViewersExp } = require('../services/funixAPI/exp');

router.get('/exp', ensureAuthenticated, async (req, res) => {
    const data = await getViewersExp(req.query.page || 1, req.user.accessToken);
    res.render('exp', {
        user: req.user,
        data: data,
        monthNames: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]
    });
});

module.exports = router;