import express from 'express';
import HomeController from './home.controller.js';

const homeRouter = express.Router();

const homeController = new HomeController();

homeRouter.get('/', homeController.renderHome);
homeRouter.post('/', homeController.addProject);

export default homeRouter;