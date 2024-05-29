import * as mongoose from 'mongoose';

export const WalletAddressSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  address: String,
  balance: Number,
  currency: String,
  // Add more fields as needed
});