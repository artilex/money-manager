import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TransactionType } from 'src/common/enums';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Post()
  async create(
    // TODO: CREATE DTO, FOR RESPONSE USE THE SAME DTO AS FOR rest endpoints
    @Body() body,
  ): Promise<Category> {
    return this.categoryService.createCategory(body.name, body.transactionType);
  }

  @Put(':categoryId')
  async update(
    // TODO: CREATE DTO
    @Body() body,
    @Param('categoryId') categoryId: string,
  ): Promise<Category> {
    return this.categoryService.updateCategory(categoryId, body);
  }

  @Delete(':categoryId')
  async delete(
    // TODO: CREATE DTO
    @Param('categoryId') categoryId: string,
  ): Promise<string> {
    await this.categoryService.deleteCategory(categoryId);

    return categoryId;
  }

  @Get()
  async getSimpleList(
    // TODO: CREATE DTO
    @Query('type') type: TransactionType,
  ): Promise<Category[]> {
    return this.categoryService.getSimpleList(type);
  }
}
