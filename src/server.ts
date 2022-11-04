import express from 'express';

const app = express();

app.listen(3001, () => {
    console.log("server is running at port 3001");
});

export default app;
// git remote add origin git@github.com:DevEssien/node-with-TS.git
// git branch -M main
// git push -u origin main
