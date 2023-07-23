const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../auth/auth');
const { getCommands } = require('../services/funixAPI/commands');

router.get('/commands', ensureAuthenticated, async (req, res) => {
    const commands = await getCommands();
    res.render('commands', {
        user: req.user,
        commands: commands,
        monthNames: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]
    });
});

module.exports = router;