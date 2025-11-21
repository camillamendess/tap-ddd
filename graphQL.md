### GraphQL é uma alternativa ao REST, onde:

Você não define endpoints, mas um único endpoint `/graphql`.

O cliente escolhe exatamente quais campos quer — não existe overfetch nem underfetch.

Você define um schema tipado, composto por:

- Query → para buscas
- Mutation → para ações que alteram estado
- Types → modelos que representam seu domínio

InputTypes → dados de entrada

Exemplo de query GraphQL:

```
query {
  sale(id: "123") {
    id
    total
    seller {
      name
    }
  }
}
```
