import express from "express";
import {Response, Request} from 'express';
import usersRouter from './routes/users';

const   app = express();
app.use("/api/users", usersRouter);

const PORT=3000;

app.get('/', (req: Request, res: Response)=>{
    res.send("Programa de emissao de ticket para transporte publico");
});

app.listen(PORT, ()=>{
    console.log('server is running on http://localhost:${PORT}');
})

