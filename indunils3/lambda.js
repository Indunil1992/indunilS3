let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {

    s3.getBucketLocation({
        'Bucket': "hotspacesvendor-20181012153309-deployment"
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


    callback(null, { "message": "Successfully copyyy executed" });
}