import { ICategoryRepository } from '../repository/ICategoryRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  categoryRepository: ICategoryRepository;

  constructor(categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    this.categoryRepository.create({
      name,
      description,
    });
  }
}

export default CreateCategoryService;
