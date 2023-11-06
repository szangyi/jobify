import { Router } from 'express'

const router = Router()

import {
    getAllJobs,
    getJob,
    createJob, 
    updateJob, 
    deleteJob
} from '../controllers/jobController.js'


// router.get('/', getAllJobs)
// When the route is the same we can chain them 
router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob)

export default router