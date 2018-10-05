const express = require("express")
const bodyParser = require("body-parser")
const axios = require('axios')

const app = express()

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json({extended : false}))

app.get("/", (req, res) => {
    
    axios({
        method: 'post',
        url: 'https://fcm.googleapis.com/fcm/send',
        headers: {'Content-Type': 'application/json', 'Authorization' : 'key=AAAArPfVPXA:APA91bGJLn4TLdkKwerTGb1vwDNL8VuNr6J7MhlHqhGXUotKDczBx8xSI9vHBBD-2VAC-8Qnw9L6yjYQrQITkEbcP2ReL3Y3TJDFW1gNt3OfxNMis0J1bEDwRvw5YabRyuLP3zavoPeJ'},
        data: {
            "to" : "/topics/test",
            "priority" : "high",
            "notification" : {
              "body" : "This is a Firebase Cloud Messaging Topic Message!",
              "title" : "FCM Message"
            }
        }
    }).then(response => {
        console.log(response.data)
        res.send("hello")
    }).catch(err => {
        console.log(err)
        res.send("hello")
    })

})

app.listen(3000, err => {
    if (err) console.log(err)
    console.log("Server started at port 3000")
})