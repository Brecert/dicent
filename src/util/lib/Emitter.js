export const Emitter = (superclass) => class extends superclass {
    constructor() {
        super(...arguments);
        /**
         * The listeners of the node
         */
        this._listeners = new Map();
    }
    /**
     * Create a reciever
     */
    on(listener, cb) {
        if (!(listener in this._listeners)) {
            this._listeners[listener] = [];
        }
        this._listeners[listener].push(cb);
    }
    /**
     * Remove the reciever
     */
    remove(listener) {
        if (listener in this._listeners) {
            delete this._listeners[listener];
        }
    }
    /**
     * dispatch an event
     */
    dispatch(listener, data) {
        if (listener in this._listeners) {
            this._listeners[listener].forEach(cb => {
                cb(data);
            });
        }
    }
};
