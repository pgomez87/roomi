'use strict';

const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

const socketURL = 'http://127.0.0.1:3000'

//TOmar nombre de usuario de URL
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

const socket = io(socketURL);


//Unirse al chat
socket.emit('joinRoom', { username, room });

//Get room and users
socket.on('roomUsers', ({ room, users }) => {
    outputRoomName('');
    outputUsers(users);
});


//Mensaje desde el servidor
socket.on('message', message => {
    console.log(message)
    outputMessage(message);

    //Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
});


//Mesaje enviado 
chatForm.addEventListener('submit', e => {
    e.preventDefault();

    const msg = e.target.elements.msg.value;

    //Emit mensaje al servidor
    socket.emit('chatMessage', msg)

    //Limpiar input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();

});

//Mensaje de salida para el DOM1

function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
};

//Agregar usuarios al DOM
function outputRoomName(room) {
    roomName.innerText = room;
}

function outputUsers(users) {
    userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
    `;
}