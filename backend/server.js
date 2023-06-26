const express = require("express");
const globalErrHandler = require("./middlewares/globalErrHandler");
const categoryRouter = require("./routes/categories/categoryRoutes");
const commentRouter = require("./routes/comments/commentRoutes");
const postRouter = require("./routes/posts/postRoutes");
const userRouter = require("./routes/users/userRoutes");
const universityRouter = require("./routes/universities/universitiesRoutes");
const dashboardRouter = require("./routes/dashboard/dashboardRoutes")
const myCollegesRouter = require("./routes/myColleges/myCollegesRoutes");
const applicationRouter = require("./routes/applications/applicationRoutes");
const LogOutRouter = require("./middlewares/logout");
const adminRouter = require("./routes/admin/adminRoutes")

require("dotenv").config();
require("./config/dbConnect");  

const cors = require("cors");
const app = express();

//middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//pass incoming payload
app.use(cors());
app.use(LogOutRouter);
//routes
//users route
app.use("/api/v1/users/", userRouter);
//posts route
app.use("/api/v1/posts", postRouter)
//comments route
app.use("/api/v1/comments", commentRouter);
//categories route
app.use("/api/v1/categories", categoryRouter);
//university route
app.use("/api/v1/universities", universityRouter);
//dashboard route
app.use("/api/v1/dashboard",dashboardRouter);
//application route
app.use("/api/v1/application", applicationRouter);
// mycolleges route
app.use("/api/v1/myColleges",myCollegesRouter);
//admin
app.use("/api/v1/admin", adminRouter);
//Error handlers middleware
app.use(globalErrHandler);
  
//404 error
app.use("*", (req, res) => {
  console.log(req.originalUrl);
  res.status(404).json({
    message: `${req.originalUrl} - Route Not Found`,
  });
});
//Listen to server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running on ${PORT}`));
