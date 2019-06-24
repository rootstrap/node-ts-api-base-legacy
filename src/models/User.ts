import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class User {
    public static fromJson({ firstName, lastName, email }: any) {
      const user = new User();
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
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

    public serialize() {
      return {
        email: this.email,
        firstName: this.lastName,
        id: this.id,
        lastName: this.lastName,
      };
    }

}
