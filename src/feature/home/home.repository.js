import mongoose from "mongoose";
import { ProjectSchema } from "../schema/schema.js";

const ProjectModel = mongoose.model('IssueDb', ProjectSchema);

export const addProjectRepo = async (project)=> {
    try {
        const newProject = new ProjectModel(project);
        await newProject.save();
        return {
            success: true,
            res: newProject
        }
    } catch (error) {
        return {
            success: false,
            error: { statusCode: 400, msg: error }
        }
    }
}

export const allProjectsRepo = async ()=> {
    try {
        const projects = await ProjectModel.find();
        return projects;
    } catch (error) {
        return {
            success: false,
            error: { statusCode: 400, msg: error }
        }
    }
}