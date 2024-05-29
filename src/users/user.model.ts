import { Document } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
  age: number;
  // Add more fields as needed
}