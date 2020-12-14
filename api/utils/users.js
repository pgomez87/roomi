const users = [];

// Usuario al unirse al chat
function userJoin(id, username) {
    const user = { id, username };

    users.push(user);

    return user;
}

// Get usuario actual
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

// Usuario deja el chat
function userLeave(id) {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// Get room usuarios
function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
};