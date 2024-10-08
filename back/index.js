// Import the Express application from the './src/server' file and assign it to the 'app' variable.
const app = require("./src/server");
const connectDB = require("./src/config/conDb");
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, "0.0.0.0", () => {
        console.log("Server is running on port 3000");
    });
})
.catch((err) => {
    console.log(err);
})
