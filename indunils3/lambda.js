let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {

    s3.getBucketLocation({
        'Bucket': "hiru.test123"
    }).promise()
        .then(data => {
            console.log("successful response");
            console.log(data);           // successful response
            /*
            data = {
                LocationConstraint: "us-west-2"
            }
            */
        })
        .catch(err => {
            console.log("an error occurred");
            console.log(err, err.stack); // an error occurred
        });



    callback(null, { "message": "Successfully getlocation executed" });
}