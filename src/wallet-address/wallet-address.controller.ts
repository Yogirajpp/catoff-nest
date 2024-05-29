import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
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

  @Get(':id')
  async findWalletAddressById(@Param('id') id: string): Promise<WalletAddress> {
    return this.walletAddressService.findWalletAddressById(id);
  }

  @Put(':id')
  async updateWalletAddress(
    @Param('id') id: string,
    @Body('address') address: string,
    @Body('balance') balance: number,
    @Body('currency') currency: string,
  ): Promise<WalletAddress> {
    return this.walletAddressService.updateWalletAddress(id, address, balance, currency);
  }

  @Delete(':id')
  async deleteWalletAddress(@Param('id') id: string): Promise<WalletAddress> {
    return this.walletAddressService.deleteWalletAddress(id);
  }
}
