import { TransactionType } from 'src/common/enums';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'transactions' })
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  categoryId: string;

  @Column({ type: 'uuid' })
  userId: string;

  @Column({ length: 250, nullable: true })
  comment: string;

  @Column({ type: 'real' })
  amount: number;

  @Column({ type: 'enum', enum: TransactionType })
  transactionType: TransactionType;

  @Column()
  transactionDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
