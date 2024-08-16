

import { addProjectRepo, allProjectsRepo } from "./home.repository.js";

export const renderProjects = async (req, res)=> {
    try {
        const allProjects = await allProjectsRepo();
        res.status(200).render('home', {title: 'Issue Tracker', cards: allProjects, css: '<link rel="stylesheet" href="/css/home.css">', script: '<script src="/js/home.js"></script>'})
    } catch (error) {
        res.status(400).send(error);
    }
}

export const addProject = async (req, res)=> {
    const resp = await addProjectRepo(req.body);
    if(resp.success) {
        res.status(200).redirect('back');
    } else {
        res.status(400).send('somthing went wrong! please try again')
    }
}
