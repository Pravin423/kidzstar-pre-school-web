
import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    currentLocation: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    course: { type: String, required: true },
    qualification: { type: String, required: true },
    
});

const Enquiry = mongoose.model("Teacher_Enquiry", enquirySchema);
export default Enquiry;