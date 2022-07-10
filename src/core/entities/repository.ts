import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Metrics } from './metrics';
import { Tribe } from './tribe';

@Entity()
export class Repository extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ length: 1 })
  state: string;

  @Column({ type: 'timestamptz' })
  create_time: string;

  @Column({ length: 1 })
  status: string;

  @ManyToOne(() => Tribe, tribe => tribe.repositories)
  idTribe: Tribe;

  @OneToOne(() => Metrics)
  @JoinColumn({ name: 'idRepository' })
  metrics: Metrics;
}
