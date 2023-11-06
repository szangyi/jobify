import 'express-async-errors'
import express from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import jobRouter from './routes/jobRouter.js';
import mongoose from 'mongoose';

dotenv.config();
const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// --- Middleware
app.use(express.json())


// --- Routes
app.get("/", (req, res) => {
    res.send('helloka')
})

app.post('/', (req, res) => {
    console.log(req);

    res.json({ message: 'Data received', data: req.body });
});

app.use('/api/v1/jobs', jobRouter) // Set default URL for what our router should use

// Not found middleware
app.use('*', (req, res) => {
    res.status(404).json({ msg: 'Not found' })
})

// Error middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' });
});



// --- Port connection
const port = process.env.PORT || 5100



// --- DB connection
try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server running on PORT ${port}....`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}