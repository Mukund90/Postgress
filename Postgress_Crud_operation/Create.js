const {getdata} = require('./index.js');


const  CreateData = async()=>
{
    try{
        const client = await getdata();

        const data = `CREATE TABLE Employee(
             emp_id SERIAL PRIMARY KEY,
             emp_name VARCHAR(255) NOT NULL,
             emp_dept VARCHAR(255) NOT NULL
        )`;
     
          await client.query(data);
           console.log('Tables Created Sucessfully!')
    }catch(err)
    {
        console.log('something went wrong !' + err)
    }

}

module.exports ={
    createdata : CreateData ,
}