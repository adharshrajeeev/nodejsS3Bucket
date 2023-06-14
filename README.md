
# Private S3 Bucket with CloudFront Distribution Example

This repository provides an example implementation of creating a private S3 bucket and accessing it via a CloudFront distribution using an Express server. The server makes an API call to obtain a signed URL with a 5-minute expiry time to an image file uploaded on the S3 bucket.


Setup
Follow these steps to set up the project and run the Express server:

Clone this repository: git clone <repository-url>
Change into the project directory: cd <repository-folder>
Install the dependencies: npm install
Configure AWS CLI with your AWS credentials if you haven't done so already: aws configure
Create a private S3 bucket: aws s3 mb s3://<bucket-name>
Upload an image file to the S3 bucket: aws s3 cp <local-file-path> s3://<bucket-name>/<image-file-name>
Create a CloudFront distribution using the AWS Management Console or the AWS CLI, configuring the S3 bucket created above as the origin.
Obtain the CloudFront distribution domain name.
Edit the .env file in the project root and set the following variables:
S3_BUCKET_NAME: The name of the S3 bucket created above.
CLOUDFRONT_DOMAIN: The CloudFront distribution domain name obtained in the previous step.
IMAGE_FILE_NAME: The name of the image file uploaded to the S3 bucket.
Save the changes to the .env file.
Start the Express server: npm start
Access the server at http://localhost:3000.
The server will make an API call to the CloudFront distribution to obtain a signed URL with a 5-minute expiry time for the image file.
The signed URL will be logged in the server console.
Copy the signed URL and paste it into a browser to view the image file. After 5 minutes, accessing the same URL will lead to an access-denied page.

