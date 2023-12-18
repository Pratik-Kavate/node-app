const pool = require('../database');

exports.getEmployeeDetailsById = async (req, res) => {
    try {
        const employeeId = req.query.employeeId;

        const result = await new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM employee.pk_employees WHERE employee_id = ${employeeId}`, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
  
        res.status(200).json({
            data: result
        });
    }catch (error) {
        res.status(500).json(
            { error: 'Internal Server Error' }
        );
    }
  };
  

exports.getEmpDetailsByDepartment = async(req, res) => {


    try{
        const department = req.query.department;

        const result = await new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM employee.pk_employees WHERE department = "${department}"`, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            })
        })

        res.status(200).json({
            data: result
        });   
        
    }catch(err){
        res.status(500).json(
            { error: 'Internal Server Error' }
        );
    }
   
};


exports.getEmployeeDetailsBySalary = async(req, res) => {

    try{
        const result = await new Promise((resolve, reject)=> {
            pool.query(`SELECT * FROM employee.pk_employees ORDER BY salary DESC`, (err, res)=> {
                if(err) reject(err);
                else resolve(res)
            })
        })
        res.status(200).json({
            data : result
        })
    }catch(err){
        res.status(500).json(
            { error: 'Internal Server Error' }
        );
    }
}
