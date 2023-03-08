const express = require("express");
const { getDomainInfo, welcome } = require("../controllers/apiController");
const router = express.Router();

router.get("/api/v1/domain/:domain", getDomainInfo);
router.get("/", welcome);
module.exports = router;
