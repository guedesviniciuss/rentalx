import { Router } from 'express';

import CategoriesRepository from '../repositories/CategoriesRepository';
import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  const category = createCategoryService.execute({
    name,
    description,
  });

  return response.json({ category });
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.list();

  return response.json({ categories });
});

export default categoriesRoutes;
