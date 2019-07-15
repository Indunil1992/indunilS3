let AWS = require('aws-sdk');
const sns = new AWS.SNS();


exports.handler = function (event, context, callback) {

    sns.publish({
        Message: 'hiii',
        Subject: '123',
        MessageAttributes: {},
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestSNS'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });



    callback(null, { "message": "Successfully executed puooo" });
}