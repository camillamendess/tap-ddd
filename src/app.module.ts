import { Module } from "@nestjs/common";
import { OperationModule } from "./modules/operation/operation.module";
import { PrismaService } from "./infrastructure/prisma.service";
import { SellerModule } from "./modules/seller/seller.module";
import { SaleModule } from "./modules/sale/sale.module";
import { OrderModule } from "./modules/order/order.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  imports: [
    OperationModule,
    SellerModule,
    SaleModule,
    OrderModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // ou schema.gql se preferir gerar arquivo
    }),
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
