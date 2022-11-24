import { Injectable } from "@nestjs/common";
import { _AllowStringsForIds } from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from "./dto/update-user.dto";

import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async getUserById(user_id: string): Promise<User> {
        return this.usersRepository.findOne({ user_id })
    }

    async getUsers(): Promise<User[]> {
        return this.usersRepository.find({});
    }

    async createUser(user:User): Promise<User> {
        return this.usersRepository.create(
            user
        )
    }

    async updateUser(user_id: string, userUpdates: UpdateUserDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ user_id }, userUpdates);
    }
}