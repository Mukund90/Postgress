const {getdata} = require('./index');

const Query_data = async ()=>
{
    try{
        const client = await getdata();
        const query =`SELECT * FROM employee where emp_dept ='IT DEPARTMENT'`;
        const result1 = await client.query(query);
        const response = JSON.stringify(result1.rows)
        console.log('Filtered data is '+ response)
    }catch(err)
    {
        console.log('something went wrong!'+err)
    }
}

module.exports ={
    Query_data : Query_data

}