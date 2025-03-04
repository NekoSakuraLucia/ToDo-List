import mongoose, { Schema } from 'mongoose';

const ToDoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const ToDo = mongoose.model('ToDo', ToDoSchema);
