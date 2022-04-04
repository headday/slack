const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const routes = require("./routes")
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json())
app.use('/auth/', routes.authController);
app.get('/test/', (req, res) => {
  const a = {
    test: "test"
  };
  return res.json(a)
});


// создаем HTTP-сервер
const server = require('http').createServer(app)

// подключаем к серверу Socket.IO
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
})

const log = console.log

const onConnection = (socket) => {
  log('User connect')
  socket.on('disconnect', () => {
    // выводим сообщение
    log('User disconnected')
    // покидаем комнату
    // socket.leave(roomId)
  })
}

// обрабатываем подключение
io.on('connection', onConnection)

const start = async () =>{
  try {
    await sequelize.authenticate();
    server.listen(PORT, () => {
      console.log(`Server app listening at Port:${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start();
