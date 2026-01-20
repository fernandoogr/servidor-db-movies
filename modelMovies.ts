import { Database } from "bun:sqlite"

async function initDB(){
    const db = new Database("movies.db")
    const schema: string = await Bun.file("./schema.sql").text()
    db.run(schema)
    const peliculas = getAllMovies(db)
    if (peliculas.length === 0) {
        const dump: string = await Bun.file("./dump.sql").text()
        db.run(dump)
    }
    return db
}


function getAllMovies(db: Database) {
    const query = db.query("SELECT * FROM peliculas")
    return query.all()
}


const db = await initDB()
const peliculas  = getAllMovies(db)
console.log(peliculas) 