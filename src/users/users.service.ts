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
    console.log(`Creating the user:: ${JSON.stringify(createUserInput)}`);
    const createdUser = await this.userModel.create(createUserInput);
    console.log('User created successfully!');
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    console.log('Getting users...');
    const data = await this.userModel.find({});
    console.log(`Found users:: ${JSON.stringify(data)}`);
    return data
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
