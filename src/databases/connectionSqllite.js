import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Esta função abre a conexão com o arquivo local 'database.db'
export const getDbConnection = async () => {
    return open({
        filename: './database.db', // O arquivo será criado na raiz do projeto
        driver: sqlite3.Database
    });
};