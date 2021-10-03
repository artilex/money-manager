import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionType } from 'src/common/enums';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async createCategory(
    name: string,
    transactionType: TransactionType,
    color?: string,
    icon?: string,
  ): Promise<Category> {
    const category = this.categoryRepository.create({
      name,
      transactionType,
      color,
      icon,
    });

    return this.categoryRepository.save(category);
  }

  async updateCategory(
    categoryId: string,
    category: Category,
  ): Promise<Category> {
    await this.categoryRepository.update(categoryId, category);

    return this.categoryRepository.findOne(categoryId);
  }

  async deleteCategory(categoryId: string): Promise<void> {
    await this.categoryRepository.delete({ id: categoryId });
  }

  async getSimpleList(transactionType?: TransactionType): Promise<Category[]> {
    const whereTransactionType = transactionType ? { transactionType } : {};

    return this.categoryRepository.find({
      where: { ...whereTransactionType },
      order: { transactionType: 'DESC', name: 'ASC' },
    });
  }
}
