import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    childName: { type: String, required: true },
    childAge: { type: Number, required: true },
    course: { type: String, required: true },  // <-- added course field
    bookslot: { type: Date, required: true }
});

const Admission = mongoose.model("Admission_Enquiry", AdmissionSchema);

export default Admission;
