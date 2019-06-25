import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class User {
    public static fromJson({ firstName, lastName, email, id }: any) {
      const user = new User();
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.id = id;
      return user;
    }

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public email: string;
}
