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

  async updateTransaction(
    transactionId: string,
    rawTransaction: Transaction,
  ): Promise<Transaction> {
    await this.transactionRepository.update(transactionId, rawTransaction);

    return this.transactionRepository.findOne(transactionId);
  }

  async deleteTransaction(transactionId: string): Promise<void> {
    await this.transactionRepository.delete({ id: transactionId });
  }

  async getList(): Promise<Transaction[]> {
    return this.transactionRepository.find({
      order: { transactionDate: 'DESC', createdAt: 'DESC' },
    });
  }
}
