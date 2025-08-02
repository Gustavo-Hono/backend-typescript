import db from "../db";
import { User } from "../model/user.models";

export default class UserRepository {


    async getAll(): Promise<User[]> {
        const {rows} = await db.query<User>("SELECT * FROM users")
        return rows
    }

    async findById(id:number): Promise< User| null > {
        const {rows} = await db.query<User>("SELECT * FROM users WHERE id=$1", [id])
        return rows[0]
    }

    async deleteById(id:number): Promise<User | null> {
        const {rows} = await db.query<User>("DELETE FROM users WHERE id=$1 RETURNING *", [id])
        console.log(rows)
        return rows[0] || null
    }

    async create(user: Omit<User, "id">): Promise<boolean>{
        const {name, email, idade} = user;
        const result = await db.query("INSERT INTO users(name, email, idade) VALUES ($1, $2, $3)", [name, email, idade])
        return (result.rowCount ?? 0) > 0;
    }

    async put(id:number, user: Omit<User, "id">): Promise<boolean>{
        const {name, email, idade} = user;
        const result = await db.query("UPDATE users SET name=$1, email=$2, idade=$3 WHERE id=$4", [name,email,idade,id])
        return (result.rowCount ?? 0) > 0
    }


}