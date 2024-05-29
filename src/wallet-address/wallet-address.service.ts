// wallet-address.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WalletAddress } from './wallet-address.model';

@Injectable()
export class WalletAddressService {
  constructor(
    @InjectModel('WalletAddress') private readonly walletAddressModel: Model<WalletAddress>,
  ) {}

  async createWalletAddress(userId: string, address: string, balance: number, currency: string): Promise<WalletAddress> {
    const createdWalletAddress = new this.walletAddressModel({ userId, address, balance, currency });
    return createdWalletAddress.save();
  }

  async findAllWalletAddresses(): Promise<WalletAddress[]> {
    return this.walletAddressModel.find().exec();
  }

  // Implement other CRUD operations as needed
}