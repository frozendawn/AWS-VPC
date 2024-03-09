import mongoose from 'mongoose';
const { Schema } = mongoose;

const CatSchema = new Schema({
  name: String,
});

const Cat = mongoose.model('Cat', CatSchema);

export default Cat;
