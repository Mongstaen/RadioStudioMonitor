const dotenv = require('dotenv').config();
const Pusher = require("pusher")
const express = require('express')

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true
});


const app = express()
app.use(express.static('public'))
app.use('/', express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname })
})

app.get('/post', (req, res) => {
    console.log(req.query)
    res.sendStatus(200)
    pusher.trigger("my-channel", "my-event", {
        message: req.query
    });
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})


