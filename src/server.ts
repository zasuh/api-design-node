import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';

import { protect } from './modules/auth';
import { createNewUser, signIn } from './handlers/user';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (err, req, res, next) => {
    if (err.type === 'auth') {
        res.status(401).json({ message: 'Not authorized' });
    } else if (err.type === 'input') {
        res.status(400).json({ message: 'Invalid input' });
    } else {
        res.status(500).json({ message: 'Server error' })
    }
});

app.use('/api', protect, router);
app.post('/user', createNewUser);
app.post('/sign-in', signIn);

export default app;