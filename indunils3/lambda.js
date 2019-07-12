let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {

    s3.listObjects({
        'Bucket': 'indunil1',
        'MaxKeys': 1,
        'Prefix': '1'
    }).promise()
        .then(data => {
            console.log("successful response");
            console.log(data);
            // successful response
            /*
            data = {
                Contents: [
                    {
                       ETag: "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
                       Key: "example1.jpg",
                       LastModified: "<Date Representation>",
                       Owner: {
                          DisplayName: "myname",
                          ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
                       },
                       Size: 11,
                       StorageClass: "STANDARD"
                    },
                    // {...}
                ]
            }
            */
        })
        .catch(err => {
            console.log("an error occurred");
            //console.log(data);
            console.log(err, err.stack); // an error occurred
        });



    callback(null, { "message": "Successfully jij executed" });
}