import { MagicalGirl } from 'src/magical_girls/entities/magical_girl.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class StatusLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  observation: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  // Relations
  @ManyToOne(() => MagicalGirl, (magicalGirl) => magicalGirl.status_logs, {
    eager: true,
  })
  @JoinColumn({ name: 'magical_girl_id', referencedColumnName: 'id' })
  magical_girl: MagicalGirl;
}
