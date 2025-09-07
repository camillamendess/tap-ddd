import express, { json } from "express";
import { OperationController } from "./controllers/operation.controller";
import { SaleController } from "./controllers/sale.controller";
import { InMemoryOperationRepository } from "../infrastructure/repository-in-memory/operation.db.in-memory";
import { InMemorySellerRepository } from "../infrastructure/repository-in-memory/seller.db.in-memory";
import { InMemorySaleRepository } from "../infrastructure/repository-in-memory/sale.db.in-memory";

const app = express();
app.use(json());

const operationRepository = new InMemoryOperationRepository();
const sellerRepository = new InMemorySellerRepository();
const saleRepository = new InMemorySaleRepository();

const operationController = new OperationController(operationRepository, sellerRepository);
const saleController = new SaleController(sellerRepository, saleRepository, operationRepository);


// Rotas de operação
app.post("/operation", (req, res) => operationController.createOperation(req, res));
app.post("/operation/seller", (req, res) => operationController.addSeller(req, res));

// Rotas de venda
app.post("/sale", (req, res) => saleController.registerSale(req, res));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
