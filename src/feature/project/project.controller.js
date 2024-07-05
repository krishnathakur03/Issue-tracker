import { dbCollection } from "../../config/mongodb.js";
import ProjectModel from "./project.model.js";


export default class ProjectController {

    async addIssue (req, res){
        const id = req.params.id;
        const data = req.body;
        
        const result = await ProjectModel.addIssue(data, id);
        if (result) {
            res.redirect(`/project/${id}`);
        }

    }

    async filterIssue (req, res){
        const id = req.params.id;
        if (req.query.search) {
            const result = await ProjectModel.searchIssue(id, req.query.search);
            const renderObj = await ProjectModel.renderProject(id, result);
            return res.render('project', renderObj);
        }
        const para = req.query.filter;
        let label; let author;
        if (para == 'label'){
            label = req.query.label;
            if (!Array.isArray(label)) {
                label = [label];
            }
            author = null;
        } else if(para == 'author'){
            label = null;
            author = req.query.author;
        }
        
        const result = await ProjectModel.filterIssue(id, label, author);
        const renderObj = await ProjectModel.renderProject(id, result);
        
        res.render('project', renderObj);
    }

    async renderProject (req, res){
        const id = req.params.id;
        const renderObj = await ProjectModel.renderProject(id);

        res.render('project', renderObj);
    }
}