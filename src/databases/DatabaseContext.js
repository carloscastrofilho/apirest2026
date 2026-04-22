import { pool } from "./connectionMysql.js";
import { getDbConnection } from "./connectionSqllite.js"; // Função que criamos antes
import { MySQLStrategy, SQLiteStrategy } from "./DatabaseStrategy.js";
import { DatabaseSchema } from "./databaseSchema.js"


class DatabaseContext {
    constructor() {
        this.strategy = null;
    }

    async init() {
        if (process.env.DB_TYPE === 'sqlite') {
            const db = await getDbConnection();
            this.strategy = new SQLiteStrategy(db);
            
            // Chama a classe de schema passando a estratégia atual
            await DatabaseSchema.initialize(this.strategy);
            
            console.log("Ambiente SQLite configurado com sucesso.");
        } else {
            this.strategy = new MySQLStrategy(pool);
            console.log("Conectado ao MySQL.");
        }
    }
  
    async execute(query, params) {
     
        return await this.strategy.execute(query, params);
     
    }
}

export const db = new DatabaseContext();
await db.init(); // Inicializa a conexão correta