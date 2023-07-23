const fetch = require('node-fetch');
const { getTwitchUserDisplayNamesByIds } = require('../twitchAPI/usernames');

function getViewersExp(page, accessToken) {
    const elementsPerPage = 10;
    return new Promise(async (resolve, reject) => {
        await fetch(`https://api.funixgaming.fr/funixbot/user/exp?page=${page}&elemsPerPage=${elementsPerPage}`).then(async response => {
            if (response.ok) {
                const body = await response.json();
                body.content.sort((a, b) => b.level - a.level);

                const users = await getTwitchUserDisplayNamesByIds(body, accessToken);

                resolve(users);
            }
        });
    })
}

module.exports.getViewersExp = getViewersExp;