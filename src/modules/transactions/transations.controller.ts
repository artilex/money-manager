import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Transaction } from './transaction.entity';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(@Body() body): Promise<Transaction> {
    return this.transactionsService.createTransaction(body);
  }

  // TODO: Test this
  @Put(':transactionId')
  async update(
    @Body() body,
    @Param('transactionId') transactionId: string,
  ): Promise<Transaction> {
    return this.transactionsService.updateTransaction(transactionId, body);
  }

  // TODO: Test this
  @Delete(':transactionId')
  async delete(@Param('transactionId') transactionId: string): Promise<string> {
    await this.transactionsService.deleteTransaction(transactionId);

    return transactionId;
  }

  @Get()
  async getList(): Promise<Transaction[]> {
    // TODO: Make pagination
    // TODO: Add DTO for response and request, for both enpoints
    // TODO: Add validations
    return this.transactionsService.getList();
  }
}
