import  express from 'express';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
const app = express();

const PORT = process.env.PORT || 8383;

app.use(express.json());

app.use('/v1/auth', authRoutes);
app.use('/v1/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})