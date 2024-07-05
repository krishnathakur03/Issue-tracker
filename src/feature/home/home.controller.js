import { dbCollection } from "../../config/mongodb.js";
import HomeModel from "./home.model.js";


export default class HomeController {
    // render landing page view
    async renderHome (req, res) {
        try {
            const collection = await dbCollection();
            const allProj = await collection.find().toArray();
            res.render('home', {title: 'Issue Tracker', cards: allProj, css: '<link rel="stylesheet" href="/css/home.css">', script: '<script src="/js/home.js"></script>'});
        } catch (error) {
            console.log("error in rendering landing page ", error);
        }
    }

    // getting project data from post request and adding that project
    async addProject(req, res) {
        const addedProject = HomeModel.addProject(req.body);
        addedProject.then(project=>{
            res.redirect('back');
        }) .catch ((err)=> {
            console.log("error in adding project ", err);
            res.send('Invalid credentials')
        });
    }
}