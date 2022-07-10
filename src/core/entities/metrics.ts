import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Metrics extends BaseEntity {
  @PrimaryGeneratedColumn()
  idRepository: number;

  @Column({ type: 'float' })
  coverage: string;

  @Column({ type: 'int' })
  bugs: string;

  @Column({ type: 'int' })
  vulnerabilities: string;

  @Column({ type: 'int' })
  hotspot: string;

  @Column({ type: 'int' })
  codeSmells: string;
}
