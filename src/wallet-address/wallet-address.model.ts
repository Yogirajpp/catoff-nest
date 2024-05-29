import { Document } from 'mongoose';

export interface WalletAddress extends Document {
  userId: string;
  address: string;
  balance: number; // Add balance field
  currency: string; // Add currency field
  // Add more fields as needed
}
