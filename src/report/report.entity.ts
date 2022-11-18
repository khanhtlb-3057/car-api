import { User } from '../users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reports')
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('boolean', {
    nullable: false,
    default: false,
  })
  approved: boolean;

  @Column('float', {
    nullable: false,
    default: 0,
  })
  price: number;

  @Column('varchar', { nullable: true })
  make: string;

  @Column('varchar', { nullable: true })
  model: string;

  @Column('int', { nullable: true })
  year: number;

  @Column('int', { nullable: true })
  lng: number;

  @Column('int', { nullable: true })
  lat: number;

  @Column('int', { nullable: true })
  mileage: number;

  @ManyToOne(() => User, (user) => user.reports)
  user: User;
}
