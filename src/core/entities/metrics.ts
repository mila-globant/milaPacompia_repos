import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Metrics extends BaseEntity {
  @PrimaryColumn()
  idRepository: number;

  @Column({ type: 'float' })
  coverage: number;

  @Column({ type: 'int' })
  bugs: number;

  @Column({ type: 'int' })
  vulnerabilities: number;

  @Column({ type: 'int' })
  hotspot: number;

  @Column({ type: 'int' })
  codeSmells: number;
}
