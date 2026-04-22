
export class DatabaseSchema {
    static async initialize(dbStrategy) {
        console.log("Verificando estrutura do banco de dados...");
        
        const queries = [
            `CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                userName TEXT NOT NULL,
                userPassword TEXT NOT NULL
            )`,

            `CREATE TABLE IF NOT EXISTS estados (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                estado TEXT NOT NULL,
                uf TEXT NOT NULL
            )`,
            
            `CREATE TABLE IF NOT EXISTS municipios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                municipio TEXT NOT NULL,
                uf TEXT NOT NULL
            )`,

            `CREATE TABLE IF NOT EXISTS bairros (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                bairro TEXT NOT NULL,
                regiao TEXT NOT NULL
            )`,

             `CREATE TABLE IF NOT EXISTS dependencias (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                dependencia TEXT NOT NULL,
                capacidade TEXT NOT NULL
            )`,

            // Você pode adicionar mais tabelas aqui facilmente
            // `CREATE TABLE IF NOT EXISTS cidades (...)`
        ];

        for (const query of queries) {
            await dbStrategy.execute(query);
        }
    }
}