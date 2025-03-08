const express = require("express");
const authRoutes = require("./authRoutes");
const aboutUsRoutes = require("./aboutusRoutes");
const programsRoutes = require("./programRoutes");

const router = express.Router();

// kumpulan routes
router.use("/", authRoutes);
router.use("/content/aboutus", aboutUsRoutes);
router.use("/content/programs", programsRoutes);

module.exports = router;
