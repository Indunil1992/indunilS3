let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {

    s3.putObject({
        "Body": "1",
        "Bucket": "indunil3",
        "Key": "1",
        "ACL": "bucket-owner-read"
    })
        .promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
                VersionId: "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

    s3.putObject({
        "Body": "3",
        "Bucket": "indunil4",
        "Key": "3",
        "ACL": "bucket-owner-full-control"
    })
        .promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
                VersionId: "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });



    callback(null, { "message": "Successfully executed" });
}