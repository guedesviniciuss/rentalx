import Category from '../model/Category';
import { ICreateCategoryDTO, ICategoryRepository } from './ICategoryRepository';

class PostgresCreateCategory implements ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    throw new Error('Method not implemented.');
  }
  list(): Category[] {
    throw new Error('Method not implemented.');
  }
  findByName(name: string): Category {
    throw new Error('Method not implemented.');
  }
}

export default PostgresCreateCategory;
