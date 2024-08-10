import express from 'express';
import { addIssue, filterIssues, renderProject, searchIssues } from './project.controller.js';

const projectRouter = express.Router();

projectRouter.route('/:id').get(renderProject).post(addIssue);
projectRouter.get('/:id/filter', filterIssues);
projectRouter.get('/:id/search', searchIssues);

export default projectRouter;