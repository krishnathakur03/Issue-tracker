import mongoose from "mongoose"
import { ProjectSchema } from "../schema/schema.js"


const ProjectModel = mongoose.model('IssueDb', ProjectSchema)

export const renderProjectRepo = async (id, issues)=> {
    
        const project = await ProjectModel.findById(id);
        let isFiltered = true;

        if (!issues) {
            issues = project.issues;
            isFiltered = false;
        }
        const css = '<link rel="stylesheet" href="/css/project.css">';
        const script = '<script src="/js/project.js"></script>';

        return {title: 'Project', id: id, projectBody: project, issues: issues, filtered: isFiltered, css: css, script: script};
}

export const addIssueRepo = async (id, data)=>{
    try {
        const project = await ProjectModel.findById(id);
        project.issues.push(data);
        project.save();
        return project;
    } catch (error) {
        throw new Error("Error in adding issue");
    }
}

export const searchIssueRepo = async (id, data)=> {
    const project = await ProjectModel.findById(id);
    
    if(project.issues.length > 0){
        let result = project.issues.filter((issue)=>{
            return (issue.title).toLowerCase() == data.toLowerCase()
        })

        if (result.length < 1) {
            result = project.issues.filter((issue)=> {
                const desc = (issue.desc).toLowerCase()
                return desc.includes(data.toLowerCase());
            })
        }
        return result;
    }
    return;
}

export const filterIssueRepo = async (id, label, author)=>{
    const project = await ProjectModel.findById(id);

    if (label) {
        return project.issues.filter(issue => {
            return label.every(l=>{
                return issue.labels.includes(l);
            })
        });

    } else {
        return project.issues.filter(issue => {
            return issue.author == author;
        })
    }
}