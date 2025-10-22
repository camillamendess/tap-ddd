### Projeto – Tap DDD

Projeto que visa o estudo de DDD (Domain-Driven Design), usando o Nest.js como framework principal, Prisma ORM e PostgreSQL como base de dados.

O objetivo é estruturar o sistema de forma modular, isolando o domínio da aplicação e permitindo escalar e manter o código com clareza.

### Agregados

#### Operation Aggregate

- Agora mantém uma coleção de Sellers (sellers: SellerId[]).
- Gerencia Sellers, datas, status e ciclo de vida da operação.

#### Seller Aggregate

- Dono de Operators e Catalogs.
- Cada Seller sabe em qual Operation atua (operationId).
- O Seller não pode conter entidades que pertençam a outro seller (garantia de integridade no domínio).

#### Outros Vínculos

- Operator → vinculado a um Seller.
- Catalog → vinculado a um Seller.

#### Sale Aggregate

- Registra vendas.
- Gerencia internamente seus Tickets.
- Nenhum componente externo pode manipular os tickets diretamente.
- SaleItem é um Value Object interno ao Ticket.

#### Introdução da Camada de Application Services

Os Application Services coordenam a comunicação entre agregados, aplicam validações cruzadas e persistem as entidades via repositórios.

#### OperationService

Responsável por:

- Criar uma nova Operation.
- Adicionar ou remover Sellers.
- Delegar ao Seller a criação de Catálogos e Operadores.

#### SaleService

Responsável por:

- Receber uma requisição de venda (operatorId, catalogId, itens, etc).
- Validar os vínculos:
  - O operator pertence ao seller dono do catalog.
  - O seller pertence à operation.
- Criar e salvar a Sale usando o SaleRepository.
- (Opcional) Gerar tickets.

### Camada de Infraestrutura

#### Prisma ORM e PostgreSQL

Responsável por persistir e consultar os agregados no PostgreSQL. Cada repositório implementa uma interface de domínio (exemplo: OperationRepository) e é registrado como provider:

```
@Module({
  providers: [
    PrismaService,
    {
      provide: OperationRepository,
      useClass: PrismaOperationRepository,
    },
  ],
})
export class AppModule {}
```

### Camada de Interface (HTTP)

Os Controllers recebem requisições HTTP, validam os dados e convertem para DTOs de aplicação. Exemplo usando Nest.js:

```
@Controller("operations")
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  @Post()
  async createOperation(@Body() body: CreateOperationInputBody) {
    return await this.operationService.createOperation({
      name: body.name,
      date: new Date(body.date),
      status: body.status,
    });
  }
}
```
