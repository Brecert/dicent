/**
 * The socket protocol interface
 * All this does is provide a more reasonable interface to the Dicent protocol
 */
export class SocketProtocol {
    constructor(error, version, query, data) {
        this.error = error;
        this.version = version;
        this.query = query;
        this.data = data;
    }
    toJSON() {
        const res = {
            e: this.error,
            v: this.version,
            q: this.query
        };
        if (this.data)
            res.d = this.data;
        return res;
    }
}
