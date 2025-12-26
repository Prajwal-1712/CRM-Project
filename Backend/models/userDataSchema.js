import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    clientName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    reminderDate: {
        type: Date
    },
    activity: {
        status: {
            type: String,
            enum: ["Talk", "Not Talk", "Delete Profile"],
            default: ""
        },
        comment: {
            type: String,
            default: "",
        }
    },
    lastUpdated: [
        {
            comment: String,
            updatedAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, { timestamps: true });

const userData = mongoose.model("UserData", userDataSchema);

export default userData;