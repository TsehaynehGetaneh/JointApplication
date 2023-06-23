const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;

// Set up Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Define the schema for the college application form
const ApplicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: {
    street: { type: String },
    city: { type: String },
    region: { type: String },
    zip: { type: String },
    country: { type: String }
  },
  highSchool: {
    name: { type: String, required: true },
    city: { type: String, required: true },
    region: { type: String, required: true },
    graduationYear: { type: Number, required: true }
  },
  transcript:  { type: String, required: true },
  national_exam: {
    Grade_8: { type: String, required: true },
    Grade_12: { type: String, required: true }
  },
  essay: {
    essayUrl: { type: String },
    text: String,
  },
  recommendations: {
    letter1Url: { type: String },
    letter2Url: { type: String }
  },
  payment: {
    amount: { type: Number },
    status: { type: String }
  },
  status: { type: String }
});

// Add a pre-save hook to upload files to Cloudinary
ApplicationSchema.pre('save', async function(next) {
  const application = this;

  // Upload transcript to Cloudinary
  const transcriptUrl = await uploadToCloudinary(application.transcript);
  application.transcript = transcriptUrl;

  // Upload national exam results to Cloudinary
  const grade8Url = await uploadToCloudinary(application.national_exam.Grade_8);
  application.national_exam.Grade_8 = grade8Url;

  const grade12Url = await uploadToCloudinary(application.national_exam.Grade_12);
  application.national_exam.Grade_12 = grade12Url;

  // Upload essay to Cloudinary
  if (application.essay && application.essay.essayUrl) {
    const essayUrl = await uploadToCloudinary(application.essay.essayUrl);
    application.essay.essayUrl = essayUrl;
  }

  // Upload recommendation letters to Cloudinary
  if (application.recommendations) {
    if (application.recommendations.letter1Url) {
      const letter1Url = await uploadToCloudinary(application.recommendations.letter1Url);
      application.recommendations.letter1Url = letter1Url;
    }
    if (application.recommendations.letter2Url) {
      const letter2Url = await uploadToCloudinary(application.recommendations.letter2Url);
      application.recommendations.letter2Url = letter2Url;
    }
  }

  next();
});

// Function to upload file to Cloudinary
async function uploadToCloudinary(fileUrl) {
  if (!fileUrl) {
    return null;
  }

  const result = await cloudinary.uploader.upload(fileUrl);
  return result.secure_url;
}

// Define the model for the college application form
const Application = mongoose.model('Application', ApplicationSchema);

module.exports = Application;