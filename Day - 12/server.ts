import express, { Request, Response, NextFunction } from 'express';
const app = express();
const port = 5000;

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
app.get(`/triangle`, loggerMiddleware, (req , res) => {
    res.send('<h1>Triangle Area Calculator</h1><p>Enter the base and height to calculate the area.</p>');
});

app.listen(port, (err?: Error) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});