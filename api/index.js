import express from "express";
import cors from "cors";

const api = express();
api.use(cors());

const port = 3000;

api.get("/api/flakey", (req, res) => {
  console.log("REQ", req.query);
  const delay = req.query.apiDelay || 0;
  const responseCode = req.query.responseCode || 200;

  setTimeout(() => {
    res.status(responseCode).json({
      message: "hello",
    });
  }, delay);
});

api.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
