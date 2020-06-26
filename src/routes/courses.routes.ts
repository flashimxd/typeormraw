import { Router } from 'express';
import { getRepository } from 'typeorm';
import Course from '../models/Courses';

const courseRoutes = Router();

courseRoutes.get('/', async (request, response) => {
  const courseRepository = getRepository(Course);
  const courses = await courseRepository.find();

  return response.json(courses);
});

export default courseRoutes;
