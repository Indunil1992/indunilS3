let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {

    s3.putObject({
        "Body": "content of object 1",
        "Bucket": "indunil1",
        "Key": "object indunil",
        "ServerSideEncryption": "AES256",
        "ACL": "authenticated-read",
        "Tagging": "tag1=tagv1",
        "Metadata": {
            "mt1": "mtv1",
            "mt2": "mtv2"
        }
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
            console.log("not successful response");
            console.log(err, err.stack); // an error occurred
        });



    callback(null, { "message": "Successfully put executed" });
}