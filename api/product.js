const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    try {
        return res.json({
            status: 200,
            message: "Success",
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error })
    }

});

module.exports = router;