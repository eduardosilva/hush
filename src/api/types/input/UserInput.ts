import { Field, InputType, Int } from 'type-graphql';

import { User } from '../User';

@InputType()
export class UserInput implements Partial<User> {


}
