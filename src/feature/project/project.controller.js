
import { addIssueRepo, filterIssueRepo, renderProjectRepo, searchIssueRepo } from "./project.repository.js";
import { ObjectId } from "mongodb";


export const renderProject = async (req, res)=> {
    const id = req.params.id;
    
    const renderObj = await renderProjectRepo(new ObjectId(id));

    res.render('project', renderObj);
}

export const addIssue = async (req, res)=>{
    const id = req.params.id;
    const data = req.body;

    const issue = addIssueRepo(id, data).then(()=>{
        res.redirect('back');
    }).catch((err)=>{
        console.log(err);
        res.status('500').send('Issue not added')        
    })
}

export const searchIssues = async (req, res)=> {
    const id = req.params.id;
    const searchData = req.query.search;

    const issues = await searchIssueRepo(id, searchData);
    const renderObj = await renderProjectRepo(id, issues);
    return res.render('project', renderObj);

}

export const filterIssues = async (req, res)=> {
    const id = req.params.id;

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
        
        const result = await filterIssueRepo(id, label, author);
        const renderObj = await renderProjectRepo(id, result);
        
        res.render('project', renderObj);
}

// export default class ProjectController {

//     async addIssue (req, res){
//         const id = req.params.id;
//         const data = req.body;
        
//         const result = await ProjectModel.addIssue(data, id);
//         if (result) {
//             res.redirect(`/project/${id}`);
//         }

//     }

//     async filterIssue (req, res){
//         const id = req.params.id;
//         if (req.query.search) {
//             const result = await ProjectModel.searchIssue(id, req.query.search);
//             const renderObj = await ProjectModel.renderProject(id, result);
//             return res.render('project', renderObj);
//         }
//         const para = req.query.filter;
//         let label; let author;
//         if (para == 'label'){
//             label = req.query.label;
//             if (!Array.isArray(label)) {
//                 label = [label];
//             }
//             author = null;
//         } else if(para == 'author'){
//             label = null;
//             author = req.query.author;
//         }
        
//         const result = await ProjectModel.filterIssue(id, label, author);
//         const renderObj = await ProjectModel.renderProject(id, result);
        
//         res.render('project', renderObj);
//     }

//     async renderProject (req, res){
//         const id = req.params.id;
//         const renderObj = await ProjectModel.renderProject(id);

//         res.render('project', renderObj);
//     }
// }