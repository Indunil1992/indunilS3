let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {


    s3.copyObject({
        'Bucket': "hiru.test123",
        'CopySource': `/indunil1/11111`,
        'Key': "11111"
    }).promise()
        .then(data => {

            console.log("successful response");
            console.log(data);           // successful response
            /*
            data = {
                CopyObjectResult: {
                    ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
                    LastModified: "<Date Representation>"
                }
            }
            */
        })
        .catch(err => {
              console.log("not successful response");
            console.log(err, err.stack); // an error occurred
        });



    callback(null, { "message": "Successfully copy executed" });
}