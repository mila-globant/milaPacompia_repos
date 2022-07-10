import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { Organization } from './organization';
import { Repository } from './repository';

@Entity()
export class Tribe extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: number;

  @ManyToOne(() => Organization, organization => organization.tribes)
  idOrganization: Organization;

  @OneToMany(() => Repository, repository => repository.idTribe)
  repositories: Repository[];
}
