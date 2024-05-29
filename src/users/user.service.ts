import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(name: string, email: string, age: number): Promise<User> {
    const createdUser = new this.userModel({ name, email, age });
    return createdUser.save();
  }

  async findAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findUserById(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async updateUser(id: string, name: string, email: string, age: number): Promise<User> {
    const updatedUser = await this.findUserById(id);
    if (name) {
      updatedUser.name = name;
    }
    if (email) {
      updatedUser.email = email;
    }
    if (age) {
      updatedUser.age = age;
    }
    return updatedUser.save();
  }

  async deleteUser(id: string): Promise<User> {
    const deletedUser = await this.findUserById(id);
    return deletedUser.remove();
  }
}
