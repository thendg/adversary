import { Server } from 'socket.io'

const SocketHandler = (req: any, res: any) => {
  // if (res.socket.server.io) {
  //   console.log('Socket is already running')
  // } else {
  //   console.log('Socket is initializing')
  //   //const io = new Server(res.socket.server)
  //   //res.socket.server.io = io
  //   //console.log(res.socket);
    

  //   // io.on('connection', socket => {
  //   //   socket.on('input-change', msg => {
  //   //     socket.broadcast.emit('update-input', msg)
  //   //     console.log("hello")
  //   //   })
  //   // })
  // }
  console.log(res)
  res.end()
}

export default SocketHandler