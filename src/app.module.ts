import { Module } from "@nestjs/common";
import { OperationModule } from "./modules/operation/operation.module";
import { PrismaService } from "./infrastructure/prisma.service";

@Module({
  imports: [OperationModule],
  providers: [PrismaService],
})
export class AppModule {}
