// Import the Express application from the './src/server' file and assign it to the 'app' variable.
const app = require("./src/server");
// The 'app.listen()' method starts the server on the specified port (in this case, port 3000).
// When the server is ready to accept connections, it executes a callback function that prints a message to the console.
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
