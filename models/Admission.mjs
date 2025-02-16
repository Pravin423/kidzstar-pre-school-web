import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    childName: String,
    childAge: Number,
    message: String,
    bookslot: Date,
});

const Admission = mongoose.model("Admission_Enquiry", AdmissionSchema);

export default Admission;
    