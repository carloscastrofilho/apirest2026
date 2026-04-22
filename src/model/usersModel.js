import { db } from "../databases/DatabaseContext.js";

export async function Get ()  {
    try {
        const results =  await db.execute(
            'SELECT * FROM `users` ORDER BY `userName` '
        );
        return {"message":"Success","data":results} ;
 
    } catch (error) {
        console.log(error);
        return {"message": "error", "Error": error.message}
    }
}

export async function GetById(id){
    try {
        const results =  await db.execute(
            'SELECT * FROM `users` WHERE id = ? ORDER BY `userName` ',
            [id]
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
       return {"message": "error", "Error": error.message} 
    }
}


export async function Delete(id){
    try {
        const results =  await db.execute(
            'DELETE FROM `users` WHERE id = ?',
            [id]
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
       return {"message": "error", "Error": error.message} 
    }
}

export async function Post( data ){
    try {
        const {userName, userPassword} = data;
        const results =  await db.execute(
            'INSERT INTO `users` (userName, userPassword) VALUES ( ? , ?)',
            [userName , userPassword]
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
        return {"message": "error", "Error": error.message} 
    }

}

export async function Put( data, id ){
    try {
        const {userName, userPassword} = data;
        const results =  await db.execute(
            'UPDATE `users` SET userName = ?, userPassword = ? WHERE id = ?',
            [userName , userPassword, id]
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
        return {"message": "error", "Error": error.message} 
    }

}