const {getdata} = require('./index');

const Update_data = async()=>
{
    try{
        const client = await getdata();
        const response = `DELETE FROM employee WHERE emp_id = $1 RETURNING *`;
        const id_no = [4]
        
            const value = await client.query(response,id_no);
            const result = JSON.stringify(value.rows);
            console.log('data deleted sucessfull!'+result) 
            return 
        
    
    }catch(err)
    {
        console.log('something went wrong'+ err)
    }
}

Update_data();