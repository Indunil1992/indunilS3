let AWS = require('aws-sdk');
const sns = new AWS.SNS();


exports.handler = function (event, context, callback) {

    sns.publish({
        Message: 'hi sns ',
        Subject: 'sub sns',
        MessageAttributes: {
            '1': {
                'DataType': 'String',
                'StringValue': 'abc'
            }
        },
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestSNS'
    }).promise()
        .then(data => {
            console.log("yes");
            // your code goes here
        })
        .catch(err => {
            console.log("no");
            // error handling goes here
        });



    callback(null, { "message": "Successfully executed puooo" });
}