import { Report } from '../report/report.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index("users_email")
  @Column('varchar', {
    nullable: false,
    unique: true,
  })
  email: string;

  @Column('varchar', {
    nullable: false,
  })
  password: string;

  @Column('boolean', {
    nullable: false,
    default: false,
  })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];
}
