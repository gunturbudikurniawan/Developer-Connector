const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// https://arcane-beach-24030.herokuapp.com/
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`));
