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
            console.log('RETURNING INSTANCE ALREADY CREATED!');
            return Database.database;
        }

        console.log('CREATING NEW INSTANCE!');
        Database.database = new Database(host, user, password);
        return Database.database;
    }
}

// In The first call the database instance will be created...
const db1 = Database.getDatabase('127.0.0.1', 'host', '123');

// ... and after that will output the already created database instance!
const db2 = Database.getDatabase('127.0.0.1', 'host', '123');

db1.connect(); // 'CREATING NEW INSTANCE!'
db2.connect(); // 'RETURNING INSTANCE ALREADY CREATED!'

console.log(db1 === db2); // true
