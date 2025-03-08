import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email:{ type: String, required: true },
    phone: { type: String, required: true },
    childName: { type: String, required: true },
    childAge: { type: Number, required: true },
    message: { type: String, required: true },
    bookslot: { type: Date, required: true },
});

const Admission = mongoose.model("Admission_Enquiry", AdmissionSchema);

export default Admission;
    