import { SocketProtocol } from './protocol';
import { Socket } from './socket';
import { Query } from './query';
/**
 * The message protocol
 */
export class MessageProtocol {
    constructor(message, id = 0, timestamp = Date.now()) {
        this.message = message;
        this.id = id;
        this.timestamp = timestamp;
    }
}
/**
 * An easier to use socket, it has builtin methods to make sending queries easier
 */
export class SocketHandler extends Socket {
    constructor() {
        super(...arguments);
        this.MESSAGE = new SocketProtocol(0, 1, Query.Message);
    }
    sendMessage(msg) {
        this.MESSAGE.data = new MessageProtocol(msg);
        this.sendProtocol(this.MESSAGE);
    }
}
