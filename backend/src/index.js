import express from "express"

import authRoute from "./routes/auth.route.js"

const app = express()
const port = 5001

app.use("/api/auth",authRoute);

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
})