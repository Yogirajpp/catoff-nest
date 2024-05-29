import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findWalletAddressById(id: string): Promise<WalletAddress> {
    const walletAddress = await this.walletAddressModel.findById(id).exec();
    if (!walletAddress) {
      throw new NotFoundException('Wallet Address not found');
    }
    return walletAddress;
  }

  async updateWalletAddress(id: string, address: string, balance: number, currency: string): Promise<WalletAddress> {
    const updatedWalletAddress = await this.findWalletAddressById(id);
    if (address) {
      updatedWalletAddress.address = address;
    }
    if (balance) {
      updatedWalletAddress.balance = balance;
    }
    if (currency) {
      updatedWalletAddress.currency = currency;
    }
    return updatedWalletAddress.save();
  }

  async deleteWalletAddress(id: string): Promise<WalletAddress> {
    const deletedWalletAddress = await this.findWalletAddressById(id);
    return deletedWalletAddress.remove();
  }
}
