import { Router } from 'express';

import CategoryRepository from '../repository/CategoryRepository';
import CreateCategoryService from '../services/CreateCategoryService';
import ListCategoryService from '../services/ListCategoryService';

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const listCategoryService = new ListCategoryService(categoryRepository);

  const categories = listCategoryService.execute();

  return response.status(200).json({ categories });
});

export default categoriesRoutes;
