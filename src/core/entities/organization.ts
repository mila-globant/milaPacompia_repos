import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import { Tribe } from './tribe';

@Entity()
export class Organization extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: number;

  @OneToMany(() => Tribe, tribe => tribe.idOrganization)
  tribes: Tribe[];
}
