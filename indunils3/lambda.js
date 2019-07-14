let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {

    s3.putObject({
        "Body": "1234567890",
        "Bucket": "indunil1",
        "Key": "142",
        "ACL": "private"
    })
        .promise()
        .then(data => {
            console.log("successful response");
            console.log(data);           // successful response
            /*
            data = {
                ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
                VersionId: "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
            }
            */
        })
        .catch(err => {
            console.log("an error occurred");
            console.log(err, err.stack); // an error occurred
        });


    callback(null, { "message": "Successfully getlocation executed" });
}