
exports.handler = function (event, context, callback) {
   

    sqs.receiveAndDeleteMessages({
        QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/test-queue.fifo`,
        AttributeNames: ['All'],
        MaxNumberOfMessages: '1',
        VisibilityTimeout: '30',
        WaitTimeSeconds: '0',
        MessageAttributeNames: ['ko', 'koo']
    }, function (receivedMessages) {
         console.log("msg Success");
                    console.log();
        // implement received message filtering logic here and return filtered set of messages which 
        // are allowed to delete in the next step
        return receivedMessages;
    }, function (deleteSuccessData) {
         console.log("msg delete Success");
                    console.log(deleteSuccessData);
        // implement delete success state here
    }, function (error) {
         console.log("err Success");
                    console.log(error);
        // implement error handling logic here
    });




    callback(null, { "message": "Successfully jij executed" });
}