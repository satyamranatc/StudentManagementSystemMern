import mongoose from "mongoose";

let StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    age: {
        type: Number,
        required: true
    },
    Roll:{
        type: Number,
        required: true,
    },
    Class:{
        type: Number,
        required: true,
    },
    Section:{
        type: String,
        required: true,
    }
});

let StudentModel = mongoose.model('Student', StudentSchema);
export default   StudentModel;


