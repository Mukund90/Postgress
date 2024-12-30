const {getdata}=require('./index')

const Update_table = async ()=>
{
    try{
        const client = await getdata();
        const response = `UPDATE employee SET emp_dept = $1 where emp_name  = 'Mohan' RETURNING *`
        const value = ['IT DEPARTMENT'];
        const data = await client.query(response,value);
        const ans = JSON.stringify(data.rows)
        console.log('data udated sucessfully!'+ans)

    }catch(err)
    {
        console.log('something might wrong'+ err)
    }
}
Update_table();