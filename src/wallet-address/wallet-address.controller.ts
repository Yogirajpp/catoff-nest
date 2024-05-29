
// wallet-address.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './wallet-address.model';

@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Post()
  async createWalletAddress(
    @Body('userId') userId: string,
    @Body('address') address: string,
    @Body('balance') balance: number,
    @Body('currency') currency: string,
  ): Promise<WalletAddress> {
    return this.walletAddressService.createWalletAddress(userId, address, balance, currency);
  }

  @Get()
  async findAllWalletAddresses(): Promise<WalletAddress[]> {
    return this.walletAddressService.findAllWalletAddresses();
  }

  // Implement other CRUD operations as needed
}