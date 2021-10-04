import { Body, Controller, Get, Post } from '@nestjs/common';
import { Transaction } from './transaction.entity';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(@Body() body): Promise<Transaction> {
    return this.transactionsService.createTransaction(body);
  }

  @Get()
  async getList(): Promise<Transaction[]> {
    // TODO: Make pagination
    // TODO: Add DTO for response and request, for both enpoints
    // TODO: Add validations
    return this.transactionsService.getList();
  }
}
