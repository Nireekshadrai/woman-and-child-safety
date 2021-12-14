const mongoose=require('mongoose');
const Msg=require('./models/messagesc');
const path = require('path');
const http = require('http');
const moment = require('moment');
const express = require('express');
const socketio = require('socket.io');
const mongoDB='mongodb+srv://Nireeksha:m215540@cluster0.pyaa4.mongodb.net/chatroom-database?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{useNewUrlParser:true,useUnifiedtopology:true}).then(()=>{
  console.log("connected");}).catch(err=>console.log(err))
const formatMessage = require('./utils/messages');
const {
  userJoin, 
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'ChatCord Bot';

// Run when client connects
io.on('connection', socket => {
  Msg.find().then(result=>{
    socket.emit('output-messages',result)
  })
  socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.id, username, room,moment().format('h:mm a'));

    socket.join(user.room);

    // Welcome current user
    socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!',moment().format('h:mm a')));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        'message',
        formatMessage(botName, `${user.username} has joined the chat`,moment().format('h:mm a'))
      );
      const message=new Msg();
      message.time=user.time;
      message.msg=`${user.username} has joined the chat`;
      message.username=botName; 
      message.save()
    // Send users and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  });

  // Listen for chatMessage
  socket.on('chatMessage', msg => {
    const user = getCurrentUser(socket.id);
    const message=new Msg();
    message.time=user.time;
    message.msg=msg;
    message.username=user.username;
    message.save().then(()=>{
    
    io.to(user.room).emit('message', formatMessage(user.username, msg,moment().format('h:mm a')))}
    )
    
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        'message',
        formatMessage(botName, `${user.username} has left the chat`,moment().format('h:mm a'))
      );

      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    }
  });
});



server.listen(3001, () => console.log(`Server running on port 3001`));
