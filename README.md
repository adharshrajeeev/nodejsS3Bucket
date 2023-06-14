
# Private S3 Bucket with CloudFront Distribution Example

This repository provides an example implementation of creating a private S3 bucket and accessing it via a CloudFront distribution using an Express server. The server makes an API call to obtain a signed URL with a 5-minute expiry time to an image file uploaded on the S3 bucket.


Setup
Follow these steps to set up the project and run the Express server:

1. Clone this repository: git clone <repository-url>
2. Change into the project directory: cd <repository-folder>
3. Install the dependencies: npm install
4. Configure AWS CLI with your AWS credentials if you haven't done so already: aws configure
5. Create a private S3 bucket: aws s3 mb s3://<bucket-name>
6. Upload an image file to the S3 bucket: aws s3 cp <local-file-path> s3://<bucket-name>/<image-file-name>
7. Create a CloudFront distribution using the AWS Management Console or the AWS CLI, configuring the S3 bucket created above as the origin.
8. Obtain the CloudFront distribution domain name.
9. Edit the .env file in the project root and set the following variables:
10. CLOUDFRONT_DOMAIN: The CloudFront distribution domain name obtained in the previous step.
11. IMAGE_FILE_NAME: The name of the image file uploaded to the S3 bucket.
12. Save the changes to the .env file.
13. Start the Express server: npm start
14. Access the server at http://localhost:7000.
15. The server will make an API call to the CloudFront distribution to obtain a signed URL with a 5-minute expiry time for the image file.
16. The signed URL will be logged in the server console.
17. Copy the signed URL and paste it into a browser to view the image file. After 5 minutes, accessing the same URL will lead to an access-denied page.
