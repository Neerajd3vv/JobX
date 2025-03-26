import  express from 'express';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
const app = express();

const PORT = process.env.PORT || 8383;

app.use(express.json());
app.use(cors({
    origin : "http://localhost:3000",
    methods : ["GET", "POST", "PUT", "DELETE"],
    credentials : true,
    allowedHeaders : ["Content-Type", "Authorization"],
}))

app.use('/v1/auth', authRoutes);
app.use('/v1/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})