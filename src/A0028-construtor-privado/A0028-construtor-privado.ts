// Singleton - GoF | Factory Method - Gof

export class Database {
    private static database: Database;

    private constructor(
        private host: string,
        private user: string,
        private password: string,
    ) { }

    connect(): void {
        console.log(`Conectando: ${this.host}, ${this.user}, ${this.password}`);
    }

    // Factory method
    static getDatabase(host: string, user: string, password: string): Database {
        if (Database.database) {
            console.log('RETORNANDO INSTÂNCIA JÁ CRIADA');
            return Database.database;
        }

        console.log('CRIANDO NOVA INSTÂNCIA');
        Database.database = new Database(host, user, password);
        return Database.database;
    }
}

// The first call the database will be created
const db1 = Database.getDatabase('127.0.0.1', 'host', '123');

// After that will output the already created database
const db2 = Database.getDatabase('127.0.0.1', 'host', '123');
db1.connect();
db2.connect();

console.log(db1 === db2);
