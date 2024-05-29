import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { UserSchema } from './users/user.schema';
import { WalletAddressController } from './wallet-address/wallet-address.controller';
import { WalletAddressService } from './wallet-address/wallet-address.service';
import { WalletAddressSchema } from './wallet-address/wallet-address.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://yogiraj:yogiraj@cluster0.40dcpks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'WalletAddress', schema: WalletAddressSchema }]),
  ],
  controllers: [UserController, WalletAddressController],
  providers: [UserService, WalletAddressService],
})
export class AppModule {}
