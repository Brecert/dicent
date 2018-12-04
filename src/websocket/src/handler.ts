import { SocketProtocol } from './protocol'
import { Socket } from './socket'
import { Query } from './query'

/**
 * The message protocol
 */
export class MessageProtocol {
  constructor(public message: string, public id: number = 0, public timestamp: number = Date.now()) {}
}

/**
 * An easier to use socket, it has builtin methods to make sending queries easier
 */
export class SocketHandler extends Socket {
  MESSAGE = new SocketProtocol(0, 1, Query.Message)

  sendMessage(msg: string) {
    this.MESSAGE.data = new MessageProtocol(msg)
    this.sendProtocol(this.MESSAGE)
  }
}