const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId:'AKIAUNV7X2DCU5BU5VWQ',
    secretAccessKey:'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',
    region :'ap-south-1'
})

const uploadAudio = (filename, bucketname, file) => {

    return new Promise((resolve, reject) => {
        const params = {
            Key: filename,
            Bucket: bucketname,
            Body: file,
            ContentType: 'multipart/form-data',
            ACL: 'public-read'
        }

        s3.upload(params, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data.Location)
            }
        })
    })
}

module.exports = uploadAudio
