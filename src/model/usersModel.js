import { db } from "../databases/DatabaseContext.js";

export async function Get ()  {
    try {
        const results =  await db.execute(
            'SELECT * FROM `users` ORDER BY `id` '
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
            'SELECT * FROM `users` WHERE id = ? ORDER BY `id` ',
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
        const {name, password, email} = data;
        const results =  await db.execute(
            'INSERT INTO `users` (name, password, email ) VALUES ( ? , ? , ?)',
            [name , password, email]
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
        return {"message": "error", "Error": error.message} 
    }

}

export async function Put( data, id ){
    try {
       const {name, password, email} = data;
        const results =  await db.execute(
            'UPDATE `users` SET name = ?, password = ? , email = ? WHERE id = ?',
            [name , password, email, id]
        );
        return {"message":"Success","data":results} ;
    } catch (error) {
        return {"message": "error", "Error": error.message} 
    }

}

export async function GetByEmail(email){
    try {
        const results =  await db.execute(
            'SELECT * FROM `users` WHERE email = ? ORDER BY `id` ',
            [email]
        );

        return {"message":"Success","data":results} ;
    } catch (error) {
       return {"message": "error", "Error": error.message} 
    }
}