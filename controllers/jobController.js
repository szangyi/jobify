import { nanoid } from 'nanoid';
import Job from '../models/jobModel.js';

// Temporary local data
let jobs = [
    { id: nanoid(), company: 'apple', position: 'front-end' },
    { id: nanoid(), company: 'google', position: 'back-end' },
];

// --- Routes
// Get all job
export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({})
    res.status(200).json({ jobs });
}

// Create a job
export const createJob = async (req, res) => {
    // I do not need a try and error catching anymore, 
    // because of the express-async-error package & my error 
    // middleware in the server.js
    const { company, position } = req.body;
    const job = await Job.create({ company, position })
    res.status(201).json({ job });
}

// Get a job
export const getJob = async (req, res) => {
    const { id } = req.params
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res.status(404).json({ msg: `No job with id ${id}` })
    }
    res.status(200).json({ job })
}

// Update job
export const updateJob = async (req, res) => {
    const { company, position } = req.body;
    if (!company || !position) {
        return res.status(400).json({ msg: 'please provide company and position' });
    }
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }

    job.company = company;
    job.position = position;
    res.status(200).json({ msg: 'job modified', job });
}

// Delete job
export const deleteJob = async (req, res) => {
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }
    const newJobs = jobs.filter((job) => job.id !== id);
    jobs = newJobs;

    res.status(200).json({ msg: 'job deleted' });
}