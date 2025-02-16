import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    childName: String,
    childAge: Number,
    message: String
});

const Admission = mongoose.model("Admission", AdmissionSchema);

export default Admission;
    