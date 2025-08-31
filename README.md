### Entendimento da primeira parte da fase 2

- Operation não tem mais um único Seller, mas uma coleção de Sellers.
- Operator agora precisa estar vinculado explicitamente a um Seller.
- Catalog também está vinculado a um Seller.
- Sale se liga a um Catalog → que se liga a um Seller.

### Alterações de Agregados

#### Agregado Seller

- Continua sendo dono de Operadores, Catálogos (com seus produtos), mas não está mais no topo da Operation; ele está dentro de uma Operation como um elemento da lista de Sellers.

- Agora cada Seller precisa saber em qual Operation ele atua (um OperationId).

- O Seller não pode ter operadores ou catálogos que pertençam a outro seller.

#### Agregador Operation

```class Operation {
private sellers: SellerId[]; // lista de Sellers vinculados à operação

addSeller(seller: Seller) { ... }
removeSeller(sellerId: SellerId) { ... }
 }
```

#### Mudanças em arquivos

- operator.entity.ts precisa ter sellerId obrigatório. OK
- catalog.entity.ts também precisa ter sellerId obrigatório. OK
- sale.entity.ts deve ter:
  catalogId
  sellerId (derivado do catálogo)
  operatorId (validado contra o sellerId)

Hoje catalog.entity.ts e sale.entity.ts estão dentro de operation, mas na nova modelagem: Catalog e Operator são entidades do agregado Seller, não do Operation.

### Entendimento da segunda parte da fase 2

#### Mudanças no Domínio

Sale passa a ser Aggregate Root de verdade (não é mais uma entidade interna de Operation).

Sale precisa guardar todos os dados relevantes para ser independente:

saleId
operationId
sellerId
catalogId
operatorId
Lista de SaleItem (produto, preço, quantidade)
Valores totais
(Opcional) fichas geradas

💡 Isso significa que o agregado Sale vai poder ser salvo, consultado e manipulado sem precisar carregar Operation inteiro.

#### Mudanças no Aggregate Operation

Ele não é mais responsável por criar vendas nem por validar venda.
Remove qualquer método de "registrar venda" ou "criar Sale".
Mantém apenas responsabilidades relacionadas a gerenciar Sellers, datas, status do evento, etc.

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

- SaleService ou SaleApplicationService

Responsável por:
Receber uma requisição de venda (ex.: operatorId, catalogId, lista de itens)
Validar:
operator pertence ao seller dono do catalog
seller pertence à operation
Criar um Sale usando o aggregate Sale.create(...)
Salvar via SaleRepository
