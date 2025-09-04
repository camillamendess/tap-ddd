### Entendimento da primeira parte da fase 2

- Operation não tem mais um único Seller, mas uma coleção de Sellers.
- Operator agora precisa estar vinculado explicitamente a um Seller.
- Catalog também está vinculado a um Seller.
- Sale se liga a um Catalog → que se liga a um Seller.

### Alterações de Agregados

#### Agregado Seller

- Continua sendo dono de Operadores, Catálogos (com seus produtos), mas não está mais no topo da Operation; ele está dentro de uma Operation como um elemento da lista de Sellers.

- Agora Catalog e Operator são entidades do agregado Seller, não do Operation.

- Agora cada Seller precisa saber em qual Operation ele atua (um OperationId).

- O Seller não pode ter operadores ou catálogos que pertençam a outro seller.

#### Agregador Operation

Ele não é mais responsável por criar vendas nem por validar venda.
Mantém apenas responsabilidades relacionadas a gerenciar Sellers, datas, status do evento, etc.

```class Operation {
private sellers: SellerId[]; // lista de Sellers vinculados à operação

addSeller(seller: Seller) { ... }
removeSeller(sellerId: SellerId) { ... }
 }
```

### Entendimento da segunda parte da fase 2

#### Mudanças no Domínio

Sale passa a ser Aggregate Root de verdade (não é mais uma entidade interna de Operation).

Sale precisa guardar todos os dados relevantes para ser independente. Isso significa que o agregado Sale vai poder ser salvo, consultado e manipulado sem precisar carregar Operation inteiro.

Ele gerencia seus Tickets, mas nada de fora do agregado manipula os tickets diretamente.

Tickets são entidades dentro do agregado Sale → só podem ser criados ou alterados através da Sale.

SaleItem continua sendo Value Object interna do Ticket.

#### Introdução da Camada de Application Services

Essa camada fica acima do domínio e fora dos Aggregates.

Função dela:

- Coordenar interações entre múltiplos agregados.
- Executar regras de orquestração (permissões, checagem de vínculos, etc).
- Delegar regras de negócio puras para os agregados.

##### Novos services:

- OperationService

Responsável por:
Criar operação
Adicionar/remover Sellers
Delegar para Seller a criação de catálogos e operadores

- SaleService

Responsável por:
Receber uma requisição de venda (ex.: operatorId, catalogId, lista de itens)
Validar:
operator pertence ao seller dono do catalog
seller pertence à operation
Criar um Sale usando o aggregate Sale.create(...)
Salvar via SaleRepository

### Entendimento geral da Arquitetura

##### Aggregates (Domínio):

- Operation (gerencia sellers, status, datas — nenhuma lógica de venda).
- Seller (dono de Operators, Catalogs, assignments).
- Sale (aggregate root independente; guarda refs: operationId, sellerId, catalogId, operatorId, items, total, createdAt; opcional: tickets).

##### Application Services:

- OperationService (cria operação, adiciona/remove sellers; delega ao Seller criação de operador e catálogo).
- SaleService (orquestra a venda: valida vínculos e permissões entre agregados; cria Sale; persiste via SaleRepository; opcional: gera tickets).
- Repositórios (in-memory): OperationRepository, SellerRepository, SaleRepository.

- Refatoração dos testes criados anteriormente e criação dos novos.
