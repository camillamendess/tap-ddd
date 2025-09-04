import express, { json } from "express";
import { OperationController } from "./controllers/operation.controller";
import { SaleController } from "./controllers/sale.controller";

const app = express();
app.use(json());

const operationController = new OperationController();
const saleController = new SaleController();

// Rotas de operação
app.post("/operation", (req, res) => operationController.createOperation(req, res));
app.post("/operation/seller", (req, res) => operationController.addSeller(req, res));

// Rotas de venda
app.post("/sale", (req, res) => saleController.registerSale(req, res));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
