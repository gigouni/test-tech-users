import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ nullable: false, description: 'The identifier of the user' })
  id: string;

  @Field({ nullable: false, description: 'The first name of the user' })
  firstName: string;

  @Field({ nullable: false, description: 'The last name of the user' })
  lastName: string;

  @Field({
    nullable: false,
    description: 'The email of the user / Used for authentication',
  })
  email: string;

  @Field({
    nullable: false,
    description: 'The password of the user / Used for authentication',
  })
  password: string;
}
