import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("Signup route working");
});

router.post("/signup", (req, res) => {
  res.json({ message: "POST signup route working", body: req.body });
});

router.post("/login", (req, res) => {
  res.json({ message: "POST login route working", body: req.body });
});

export default router;