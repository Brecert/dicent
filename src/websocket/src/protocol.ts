import { Query } from './query'

/**
 * A raw socket's protocol
 * Any names are shortened send less data
 */
export interface RawSocket<T> {
  /**
   * Error
   */
  e: number,
  /**
   * Protocol Version
   */
  v: number,
  /**
   * Query ID
   */
  q: Query,
  /**
   * Data to send
   */
  d?: T
}

/**
 * The socket protocol interface
 * All this does is provide a more reasonable interface to the Dicent protocol
 */
export class SocketProtocol<T> {
  constructor(
    public error: number,
    public version: number,
    public query: Query,
    public data?: T
  ) {}

  toJSON(): RawSocket<T> {
    const res: RawSocket<T> = {
      e: this.error,
      v: this.version,
      q: this.query
    }
    if(this.data) res.d = this.data
    return res
  }
}