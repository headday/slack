const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const routes = require("./routes")
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json())
app.get('/auth/', routes.authController);


// создаем HTTP-сервер
const server = require('http').createServer()
// подключаем к серверу Socket.IO
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
})

const log = console.log

// // получаем обработчики событий
// const registerMessageHandlers = require('./handlers/messageHandlers')
// const registerUserHandlers = require('./handlers/userHandlers')

// данная функция выполняется при подключении каждого сокета (обычно, один клиент = один сокет)
const onConnection = (socket) => {
  // выводим сообщение о подключении пользователя
  log('User connected')

  // получаем название комнаты из строки запроса "рукопожатия"
  const { roomId } = socket.handshake.query
  // сохраняем название комнаты в соответствующем свойстве сокета
  socket.roomId = roomId
  // log(romi)
  log(socket.handshake)
  // присоединяемся к комнате (входим в нее)
  socket.join(roomId)

  // регистрируем обработчики
  // обратите внимание на передаваемые аргументы
  // registerMessageHandlers(io, socket)
  // registerUserHandlers(io, socket)

  // обрабатываем отключение сокета-пользователя
  socket.on('disconnect', () => {
    // выводим сообщение
    log('User disconnected')
    // покидаем комнату
    socket.leave(roomId)
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
