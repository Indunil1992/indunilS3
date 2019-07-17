let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {

    sns.publish({
        Message: 'msg sns',
        Subject: 'sub sns',
        MessageAttributes: {},
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:indunil-topic'
    }).promise()
        .then(data => {
            console.log("yep");
            // your code goes here
        })
        .catch(err => {
            console.log("nooo");
            // error handling goes here
        });



    callback(null, { "message": "Successfully executed rrr" });
}