import { pool } from "../databases/connectionMysql.js"
const tableName = "estados";

export async function Get ( req, res)  {
    try {
        const [results, fields] = await pool.execute(
            `SELECT * FROM ${tableName} ORDER BY id `
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
        console.log(error);
        return {"message": "error", "Error": error.message};
    }
}

export async function GetById(id){
    try {
        const [results, fields] = await pool.execute(
            `SELECT * FROM ${tableName} WHERE id = ? ORDER BY id `,
            [id]
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
       return {"message": "error", "Error": error.message} 
    }
}

export async function Delete(id){
    try {
        const [results, fields] = await pool.execute(
            `DELETE FROM ${tableName} WHERE id = ?`,
            [id]
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
       return {"message": "error", "Error": error.message} 
    }
}

export async function Post( data ){
    try {
        const {estado, uf } = data;
        const [results, fields] = await pool.execute(
            `INSERT INTO ${tableName} (estado, uf) VALUES ( ? , ?)`,
            [estado , uf ]
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
        return {"message": "error", "Error": error.message} 
    }

}

export async function Put( data, id ){
    try {
        const { estado, uf } = data;
        const [results, fields] = await pool.execute(
            `UPDATE ${tableName} SET estado = ?, uf = ? WHERE id = ?`,
            [ estado , uf , id]
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
        return {"message": "error", "Error": error.message} 
    }
}