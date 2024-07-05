import { dbCollection, projIssues } from "../../config/mongodb.js";


export default class IssueModel {

    constructor (title, desc, labels, author) {
        this.title = title,
        this.desc = desc
        if(!Array.isArray(labels)){
        this.labels = [labels]
        } else {
            this.labels = labels
        }
        this.author = author
    }

    static async addIssue (data, id){
        const issue = new IssueModel (data.title, data.desc, data.labels, data.author);
        const collection = await dbCollection();
        const project = await collection.findOneAndUpdate({_id: id}, {$push : {issues: issue}});
        return project;
        
    }

    static async searchIssue (id, search) {
        const issues = await projIssues(id);
        if (issues.length > 0) {
            let result = issues.filter((issue)=>{
                // let tit = typeof(issue.title);
                // console.log();
                return (issue.title).toLowerCase() == search.toLowerCase()
            })

            if (result.length < 1) {
                result = issues.filter((issue)=>{
                    const desc = (issue.desc).toLowerCase();
                    return desc.includes(search.toLowerCase());
                })
            }
            console.log(result);
            return result;
        }
        return;
    }

    static async filterIssue (id, label, author){
        const collection = await dbCollection();
        const project = await collection.findOne({_id: id});
        
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
        // return project;
    }
    
    static async renderProject (id, issues){
        const collection = await dbCollection();
        const project = await collection.findOne({_id: id});

        if (!issues) {
            issues = project.issues;
        }
        const css = '<link rel="stylesheet" href="/css/project.css">';
        const script = '<script src="/js/project.js"></script>';

        return {title: 'Project', id: id, projectBody: project, issues: issues, css: css, script: script};
    }

}