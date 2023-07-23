const fetch = require('node-fetch');

async function getTwitchUserDisplayNamesByIds(result, accessToken) {
    const userIds = [];
    
    result.content.forEach(user => userIds.push(user.twitchUserId));

    const baseUrl = 'https://api.twitch.tv/helix/users';
    const idParam = `id=${userIds.join('&id=')}`;
    const url = `${baseUrl}?${idParam}`;

    const headers = {
        'Client-ID': process.env.TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${accessToken}`,
    };

    try {
        const response = await fetch(url, { headers });
        const data = await response.json();

        if (response.ok) {
            data.data.forEach(user => result.content.find(u => Number(u.twitchUserId) === Number(user.id)).display_name = user.display_name);
            return result;
        } else {
            throw new Error(data.message || 'Failed to fetch data from Twitch API.');
        }
    } catch (error) {
        throw new Error(`Error fetching data from Twitch API: ${error.message}`);
    }
}

module.exports.getTwitchUserDisplayNamesByIds = getTwitchUserDisplayNamesByIds;