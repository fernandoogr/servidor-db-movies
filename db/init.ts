import { Database } from "bun:sqlite"
import { getAllMovies } from "../models/movies"

export async function initDB(){
    const db = new Database("movies.db")
    const schema: string = await Bun.file("./db/schema.sql").text()
    db.run(schema)
    const peliculas = getAllMovies(db)
    if (peliculas.length === 0) {
        const dump: string = await Bun.file("./dump.sql").text()
        db.run(dump)
    }
    return db
}
