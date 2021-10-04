import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  async createTransaction(data: Transaction): Promise<Transaction> {
    const transaction = this.transactionRepository.create(data);

    return this.transactionRepository.save(transaction);
  }

  async getList(): Promise<Transaction[]> {
    return this.transactionRepository.find({
      order: { transactionDate: 'DESC', createdAt: 'DESC' },
    });
  }
}
