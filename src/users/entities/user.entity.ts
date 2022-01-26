import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
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
