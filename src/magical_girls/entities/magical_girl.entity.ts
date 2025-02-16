import { BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MagicalGirl {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column('int')
  age: number;

  @Column({ type: 'varchar', length: 255 })
  origin_city: string;

  @Column({ type: 'enum', enum: ['Active', 'Disappeared', 'Rescued'] })
  status: string;

  @Column({ type: 'date' })
  contract_date: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  // Triggers
  @BeforeUpdate()
  generatedUpdatedAt() {
    this.updated_at = new Date();
  }
}
