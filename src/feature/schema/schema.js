import mongoose from "mongoose";

export const IssueSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        labels: [{
            type: String,
            enum: ["hot", "bug", "help", "ui/ux"]
        }],
        author: {
            type: String,
            require: true
        }
    }
)

export const ProjectSchema = new mongoose.Schema(
    {
        project: {
            type: String, 
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        issues: {
            type: [IssueSchema],
            default: []
        }
    }
)
