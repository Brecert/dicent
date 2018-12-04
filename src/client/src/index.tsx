import dom from '../../util/dom'
import { Query, SocketHandler } from './ws/index'

const ws = new SocketHandler('ws://localhost:7777')
ws.on(Query.Message, msg => {
	console.log(msg)
})