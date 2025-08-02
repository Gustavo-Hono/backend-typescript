import UserRepository from "../repositories/user.repository";
import { Request, Response } from "express";


const userRepository = new UserRepository();


export async function getUsers(req: Request, res: Response) {
    const response = await userRepository.getAll()
    res.json(response)
}

export async function createUsers(req:Request, res: Response) {
    const {name, email, idade} = req.body
    const response = await userRepository.create({name, email, idade})
    
    if (response) {
        res.status(201).json({message: "Usuario criado", response})
    } else {
        res.status(400).json({message: "Error ao criar"})
    }
}


export async function deleta(req: Request, res:Response ) {
    const id = parseInt(req.params.id)
    const response = await userRepository.deleteById(id)
    
    if (response) {
        res.status(201).json({message: "Deletado com sucesso", response })
    } else {
        res.status(404).json({ message: "Usuário não encontrado" });
    }
}

export async function getById(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const response = await userRepository.findById(id)
    res.status(201).json(response)
}

export async function putById(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const {name, email, idade} = req.body
    const response = await userRepository.put(id, {name, email, idade})

    if (response) {
        res.status(201).json({message: `Atualizado o usuario ${id}`, response})
    } else{
        res.status(401).json({message: "Nenhum encontrado"})
    }
}