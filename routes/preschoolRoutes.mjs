import express from "express";
import Admission from "../models/Admission.mjs";

const router = express.Router();

// Homepage
router.get("/", (req, res) => {
    res.render("home");
});

// About Page
router.get("/about", (req, res) => {
    res.render("about");
});

// Admission Form
router.get("/admission", (req, res) => {
    res.render("admission");
});

// Handle Admission Form Submission
router.post("/admission", async (req, res) => {

    try {
        const { name, email, phone, childName, childAge, message,bookslot } = req.body;
        const formattedDate = new Date(bookslot)
        await Admission.create({ name, email, phone, childName, childAge, message, bookslot: formattedDate  });
        res.redirect("/success");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error submitting application");
    }
});

// Success Page
router.get("/success", (req, res) => {
    res.render("success");
});

export default router;
