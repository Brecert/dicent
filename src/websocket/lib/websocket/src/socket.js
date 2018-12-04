import { mix } from '../../util/mixin';
import { Emitter } from '../../util/Emitter';
/**
 * The socket class
 * Meant to extend any WebSocket complient api (`#onmessage`)
 */
export class Socket extends mix(WebSocket).with(Emitter) {
    constructor(url, ...protocols) {
        super(url, protocols);
        /**
         * Send data using the `SocketProtocol` class
         */
        this.sendProtocol = (protcol) => {
            this.send(JSON.stringify(protcol));
        };
        this.onmessage = (event) => {
            const res = JSON.parse(event.data);
            // todo: translate to query code to a string
            // trigger the query code
            this.trigger(res['q'], res);
        };
    }
}
