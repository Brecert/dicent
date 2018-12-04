export const Emitter = (superclass: any) => class extends superclass {
  /**
   * The listeners of the node
   */
  _listeners: Map<any, any> = new Map();

  /**
   * Create a reciever
   */
  on(listener: any, cb: <U>(data: U) => void) {
    if (!(listener in this._listeners)) {
      this._listeners[listener] = [];
    }
    this._listeners[listener].push(cb);
  }

  /**
   * Remove the reciever
   */
  remove(listener: any) {
    if (listener in this._listeners) {
      delete this._listeners[listener]
    }
  }

  /**
   * dispatch an event
   */
  dispatch<T, U>(listener: any, data: U) {
    if (listener in this._listeners) {
      this._listeners[listener].forEach(cb => {
        cb(data);
      });
    }
  }
}