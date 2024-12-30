const {Client} = require('pg')

const Getdata = async ()=>
{
    try{
        const client = new Client("postgresql://todos_owner:ZJRB2ef9CvkN@ep-fancy-shadow-a4z0aqru.us-east-1.aws.neon.tech/users?sslmode=require");
        await client.connect();
        console.log('Database connected sucressfully!');
        return client;
    }catch(err)
    {
        console.log('something went wrong'+ err)
    }
}

  module.exports={
    getdata: Getdata
  }
