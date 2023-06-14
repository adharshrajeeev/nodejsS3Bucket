import express from 'express'
import dotenv from 'dotenv'
import { getSignedUrl } from '@aws-sdk/cloudfront-signer'
dotenv.config()

const app =  express()

const s3ImageName = "22W15-blog-SecurityZines-Compromising_CICD_pipelinesnal.jpg"
const cloudFrontDomain = "https://dsqo0tpjgjpw0.cloudfront.net"
 
app.get('/imageFile',async(req,res)=>{
    try{
        let imageUrl =  getSignedUrl({
               url:`${cloudFrontDomain}/${s3ImageName}`,
               dateLessThan:new Date(Date.now() + 5 * 60000),
               keyPairId:process.env.CLOUDFRONT_KEY_PAIR_ID,
               privateKey:process.env.CLOUDFRONT_PRIVATE_KEY,
           }) 
           console.log(imageUrl)
           res.send(imageUrl) 
    }catch(Err){
        console.log(Err)
    }
}) 
 


app.listen(process.env.PORT,()=>console.log(`SERVER RUNNING IN PORT ${process.env.PORT}`))