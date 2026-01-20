import { Database } from "bun:sqlite"
export function getAllMovies(db: Database) {
    const query = db.query("SELECT * FROM peliculas")
    return query.all()
}

export function getMovieById(db: Database, id: number) {
    const query = db.query("SELECT * FROM peliculas WHERE id = ?")
    return query.get(id)
}

export function getMoviesByName(db: Database, name: string) {
    const query = db.query("SELECT * FROM peliculas WHERE nombre LIKE ?")
    return query.all(`%${name}%`)
}