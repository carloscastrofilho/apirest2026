// Implementação para MySQL
export class MySQLStrategy {
    constructor(pool) { this.pool = pool; }
    async execute(query, params = []) {
        if (query.trim().toUpperCase().startsWith('SELECT')) {
            const [results, fields ] = await this.pool.execute(query, params);
            return results
        } else {
            const result = await this.pool.execute(query, params);
            // Retornamos um objeto dentro de um array para simular o comportamento do MySQL
            return {
                insertId: result.lastID,
                affectedRows: result.changes
            };
        }
    }
}

// Implementação para SQLite
export class SQLiteStrategy {
    constructor(db) { this.db = db; }
    async execute(query, params = []) {
        // O SQLite usa .all para SELECT e .run para INSERT/UPDATE/DELETE
        // Para simular o 'execute', podemos usar uma lógica simples:
        if (query.trim().toUpperCase().startsWith('SELECT')) {
            const results =  await this.db.all(query, params);            
            return results;
        } else {
            const results = await this.db.run(query, params);
            console.log(results);
            return results; 
        }
    }
}