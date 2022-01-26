// import { Int } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return this.userModel.create({
      ...createUserInput,
    });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find({});
  }

  async findOne(_id: string): Promise<User> {
    return this.userModel.findOne({ id: _id });
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    return this.userModel.findOneAndUpdate({ id: id }, updateUserInput);
  }

  async remove(id: string) {
    const response = await this.userModel.deleteOne({ id: id });
    return response ? response.deletedCount : 0;
  }
}
