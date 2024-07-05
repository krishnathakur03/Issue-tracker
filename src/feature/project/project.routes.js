import express from 'express';
import ProjectController from './project.controller.js';

const projectRouter = express.Router();
const projectController = new ProjectController();

projectRouter.get('/:id', projectController.renderProject);
projectRouter.post('/:id', projectController.addIssue);
projectRouter.get('/:id/filter', projectController.filterIssue);

export default projectRouter;