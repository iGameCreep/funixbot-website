const fetch = require('node-fetch');

function getCommands() {
    return new Promise(async (resolve, reject) => {
        const commands = [];
    
        await fetch('https://api.funixgaming.fr/funixbot/command').then(async response => {
            if (response.ok) {
                const body = await response.json();
                body.content.forEach(command => commands.push(command));
            }
        });

        await fetch('https://raw.githubusercontent.com/FunixProductions/FunixBot/68a04b049f9599d3c826bc7e9c235c64938b2c45/funixbot-twitch/src/main/resources/json/commands.json').then(async response => {
                if (response.ok) {
                    const body = await response.json();

                    body.data.forEach(command => commands.push(command));
                }
        });

        resolve(commands);
    })
}

module.exports.getCommands = getCommands;