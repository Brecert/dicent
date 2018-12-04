import * as express from 'express'
const app = express()
const express_ws = require('express-ws')(app)
const port = 7777

app.ws('/', (ws, req) => {
	ws.on('message', msg => {
		console.log(msg)
	})

	console.log('socket', req)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))