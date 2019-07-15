let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    s3.deleteObject({
        'Bucket': "indunil1",
        'Key': "1"
    }).promise()
        .then(data => {
            console.log(data);           // successful response
            /*
                data = {}
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

    s3.deleteObject({
        'Bucket': "indunil1",
        'Key': "10"
    }).promise()
        .then(data => {
            console.log(data);           // successful response
            /*
                data = {}
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });





    callback(null, { "message": "Successfully executed 888" });
}