import { Router } from 'express';

import CategoriesRepository from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: 'Category already exists' });
  }

  const category = categoriesRepository.create({
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