let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    s3.deleteObject({
        'Bucket': "indunil1",
        'Key': "2"
    }).promise()
        .then(data => {
            console.log(data);
            console.log("successful response 1");      // successful response
            /*
                data = {}
            */
        })
        .catch(err => {
            console.log(err, err.stack);
            console.log("not successful response 1");
            // an error occurred
        });

    s3.deleteObject({
        'Bucket': "indunil1",
        'Key': "10"
    }).promise()
        .then(data => {
            console.log(data);
            console.log("successful response 2");           // successful response
            /*
                data = {}
            */
        })
        .catch(err => {
            console.log(err, err.stack);
            console.log("not successful response 2");  // an error occurred
        });





    callback(null, { "message": "Successfully executed 888" });
}