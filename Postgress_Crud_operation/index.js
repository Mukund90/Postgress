const {Client} = require('pg')

const Getdata = async ()=>
{
    try{
        const client = new Client(process.env.postgress_url);
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
