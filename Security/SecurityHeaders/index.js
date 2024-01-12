const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.removeHeader("X-Powered-By");
  next();
});

app.get("/list", (req, res) => {
  res.send([
    {
      id: "1",
      title: "Namaste Frontend System Design",
    },
  ]);
});

const port = process.env.PORT || 5010;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
