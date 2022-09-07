import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
});

const bucket = new AWS.S3({
  params: { Bucket: process.env.REACT_APP_AWS_S3_BUCKET },
  region: process.env.REACT_APP_AWS_S3_REGION,
});

const uploadToS3 = async (file: File) => {
  return new Promise<AWS.S3.ManagedUpload.SendData>((resolve, reject) => {
    bucket.upload({
      Body: file,
      Key: file.name,
      Bucket: process.env.REACT_APP_AWS_S3_BUCKET as string
    }, function (err, data) {
      if (err) return reject(err);

      resolve(data);
    });
  });
}

export default uploadToS3;
