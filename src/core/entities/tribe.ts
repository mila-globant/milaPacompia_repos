import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { Organization } from './organization';
import { Repository } from './repository';

@Entity()
export class Tribe extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: number;

  @ManyToOne(() => Organization, organization => organization.tribes, { eager: true })
  idOrganization: Organization;

  @OneToMany(() => Repository, repository => repository.idTribe)
  repositories: Repository[];
}
