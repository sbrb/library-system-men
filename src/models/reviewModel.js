import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

export default mongoose.model('Review', new mongoose.Schema(
    {
        bookId: { type: ObjectId, required: true, ref: 'Book' },
        reviewedBy: { type: String, required: true, default: 'Guest', trim: true },
        reviewedAt: { type: Date, required: true, trim: true },
        rating: Number,
        review: { type: String, trim: true },
        isDeleted: { type: Boolean, default: false }
    },
    { timestamps: true }
));
