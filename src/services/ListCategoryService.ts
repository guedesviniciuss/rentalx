import Category from '../model/Category';
import CategoryRepository from '../repository/CategoryRepository';

class ListCategoryService {
  categoryRepository: CategoryRepository;

  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  execute(): Category[] {
    const categories = this.categoryRepository.list();

    return categories;
  }
}

export default ListCategoryService;
