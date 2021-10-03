import { TransactionType } from 'src/common/enums';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({
    nullable: true,
    length: 50,
  })
  color: string;

  @Column({
    nullable: true,
    length: 150,
  })
  icon: string;

  @Column({ type: 'enum', enum: TransactionType })
  transactionType: TransactionType;
}
