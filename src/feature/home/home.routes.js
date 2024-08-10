import express from 'express';
import { addProject, renderProjects } from './home.controller.js';

const homeRouter = express.Router();

homeRouter.route('/').get(renderProjects).post(addProject);

export default homeRouter;