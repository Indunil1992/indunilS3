let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {

    s3.deleteObject({
        'Bucket': "indunil1",
        'Key': "1"
    }).promise()
        .then(data => {
            console.log(data);   
             console.log("successful response"); 
                     // successful response
            /*
                data = {}
            */
        })
        .catch(err => {
            console.log(err, err.stack); 
            console.log("an error occurred"); 
            // an error occurred
        });



    callback(null, { "message": "Successfully copyyy executed" });
}