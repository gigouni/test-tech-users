import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

const mockUser = {
  firstName: 'First',
  lastName: 'Last',
  email: 'example-A@gmail.com',
  password: 'k$Fj6Kk#P#',
};

describe('UsersService', () => {
  let service: UsersService;
  let model: Model<User>;

  const usersArray = [
    {
      firstName: 'First',
      lastName: 'Last',
      email: 'example-A@gmail.com',
      password: 'k$Fj6Kk#P#',
    },
    {
      firstName: 'Second',
      lastName: 'Last',
      email: 'example-B@gmail.com',
      password: '76&nmhJGiA',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken('User'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockUser),
            constructor: jest.fn().mockResolvedValue(mockUser),
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    model = module.get<Model<User>>(getModelToken('User'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all users', async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(usersArray),
    } as any);
    const users = await service.findAll();
    expect(users).toEqual(usersArray);
  });

  it('should insert a new user', async () => {
    jest.spyOn(model, 'create').mockImplementationOnce(() =>
      Promise.resolve({
        firstName: 'First',
        lastName: 'Last',
        email: 'example-A@gmail.com',
        password: 'k$Fj6Kk#P#',
      }),
    );
    const newUser = await service.create({
      firstName: 'First',
      lastName: 'Last',
      email: 'example-A@gmail.com',
      password: 'k$Fj6Kk#P#',
    });
    expect(newUser).toEqual(mockUser);
  });
});
