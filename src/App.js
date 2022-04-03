import { useEffect, useRef } from "react";
import io from "socket.io-client";
const SERVER_URL = 'http://localhost:4000'
function App() {
  const socketRef = useRef(null);

  useEffect(() => {
    // создаем экземпляр сокета, передаем ему адрес сервера
    // и записываем объект с названием комнаты в строку запроса "рукопожатия"
    // socket.handshake.query.roomId
    socketRef.current = io(SERVER_URL);

    // отправляем событие добавления пользователя,
    // в качестве данных передаем объект с именем и id пользователя
    socketRef.current.emit("connection",{
      query: { "roomId": "asd" },
      test: "asd"
    });
    
    // обрабатываем получение списка пользователей
    // socketRef.current.on("users", (users) => {
    //   // обновляем массив пользователей
    //   // setUsers(users);
    // });

    // отправляем запрос на получение сообщений
    // socketRef.current.emit("message:get");

    // обрабатываем получение сообщений
    // socketRef.current.on("messages", (messages) => {
    //   // определяем, какие сообщения были отправлены данным пользователем,
    //   // если значение свойства "userId" объекта сообщения совпадает с id пользователя,
    //   // то добавляем в объект сообщения свойство "currentUser" со значением "true",
    //   // иначе, просто возвращаем объект сообщения
    //   const newMessages = messages.map((msg) => (msg.userId === userId ? { ...msg, currentUser: true } : msg));
    //   // обновляем массив сообщений
    //   setMessages(newMessages);
    // });

    return () => {
      // при размонтировании компонента выполняем отключение сокета
      socketRef.current.disconnect();
    };
  }, []);

  return <div className="App"></div>;
}

export default App;
