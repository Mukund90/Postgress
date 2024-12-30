const {getdata} = require('./index');

const Inserte_data = async ()=>
{
  try{
      const client = await getdata();

      const response = `INSERT INTO employee(emp_name,emp_dept)
      VALUES ($1,$2),($3,$4),($5,$6) RETURNING * `;

      const values = [
        'Abhishek mishra' ,'Hr',
        'Hamanpreet', 'Anyalatics',
        'Mohan','Etc'];
       
      const result = await client.query(response,values);
      console.log('data inserted sucessfully!'+ JSON.stringify(result.rows[0]));
  }catch(err)
  {
    console.log('something might be wrong!'+err)
  }

}
  module.exports={
    inserted : Inserte_data,
  }
