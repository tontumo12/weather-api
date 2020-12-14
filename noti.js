'use strict'
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");
//var token = 'f8anmyDUoMkgAcxk_EB63V:APA91bE65GaeP7fQ9c0Z1twgIwWoLp2LCFvUTj2bMRDA7YzeKi66vWb1oJ05BygKsq4QyFlyqX3RhWvPgZt2PXDjFO1D00Xx11BvY88DWP4YPrxfvjizlnNcOgTsR0X58bVM_CTvyNTr'
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://tunt-16c2b.firebaseio.com"
})
module.exports = {
    sendNoti: (req, res) => {
        let data = {
            notification: {
                title: req.body.title,
                body: JSON.stringify(req.body.body)
            },
            data: {
                score: '850',
                time: '2:45'
            },
            token: req.body.token
        }
        console.log(req.body.body)
        admin.messaging().send(data).then( response => {
            console.log(response)
            //console.log(response)
            //console.log(messages)
            res.status(200).send("Notification sent successfully")
        })
        .catch( error => {
            console.log(error);
        })
    }
}