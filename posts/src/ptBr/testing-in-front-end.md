---
title: Testing in Front End
description: Aprenda a fazer melhores testes em seu front end.
createdAt: '2021-11-03T02:11:11.781Z'
updatedAt: '2021-11-03T02:11:11.781Z'
tags:
  - front-end
  - testing
---

Ao longo da minha jornada como desenvolvedor, percebo que alguns colegas têm dificuldade em realizar testes no front end. Às vezes o problema é sobre não estar familiarizado, Ou sobre os detalhes de uma framework. Mas às vezes é **saber sobre o que você deve ser coberto**. Alguns livros (bons livros) até descrevem isso como difícil de fazer, dizendo que não é uma boa ideia. Mas estamos em 2021, e as ferramentas de teste evoluíram para fazer um bom teste de uma UI no front end.

Neste artigo, abordo os tipos comuns de teste, uma visão geral desses tipos e exemplos de ferramentas que você pode usar para fazer com que funcionem.

## Aviso

Ao ler este artigo, espero que você conhecesse os fundamentos dos testes e tenha alguma experiência nisso. **Se você não sabe nada sobre testes, este artigo não é para você**.

Dito isso, vamos lá!

## Pirâmide de teste

Você provavelmente conhece esta pirâmide específica de teste. Foi originalmente criada no [artigo de Martin Fowler sobre testes em Engenharia de Software](https://martinfowler.com/articles/practical-test-pyramid.html).

! [A pirâmide de teste - Martin Fowler](https://martinfowler.com/articles/practical-test-pyramid/testPyramid.png)

Outro é [The Testing Trophy](https://twitter.com/kentcdodds/status/960723172591992832?lang=es), de Kent C Dodds, e dá outra perspectiva sobre o mesmo assunto.

! [Troféu de teste - Kent C Dodds](https://pbs.twimg.com/media/DVUoM94VQAAzuws?format=jpg&name=900x900)

O que vou apresentar aqui é baseado na Pirâmide de Teste de Martin Fowler com algumas pequenas mudanças para representar **uma perspectiva mais geral de teste no front end**, e ela se parece com isso:

! [Pirâmide de front-end de teste adaptada](/ images / pyramid-of-testing-front-end.png "Pirâmide de front-end de teste adaptada")

Esses limites na pirâmide são o que chamo de **níveis** neste artigo. Cada nível representa um propósito diferente de teste. Esses níveis podem ter diferentes **tipos** de testes. Definir os tipos de teste pode ser confuso e difícil porque às vezes não temos uma boa separação no código.

Lembre-se de que o que estou apresentando aqui é baseado em **problemas comuns** que queremos resolver no desenvolvimento de UI (especialmente aplicativos da web). Mas **você não precisa ter tudo** em sua base de código, você sempre precisa identificar quais são eles de que você precisa antes de colocar em seu projeto.

Vamos começar com os **níveis e tipos mais comuns**.

### Nível de componente

Hoje em dia, é comum usar uma abordagem de componente. Começamos a criar componentes que têm pequenas partes de nosso layout e, em seguida, costuramos para criar uma página inteira. Usando isso como princípio, podemos ter alguns níveis de teste.
Neste nível, testamos o que vamos usar no código dos componentes. Idealmente, nossos componentes são desacoplados do resto do código. Portanto, podemos testá-lo independentemente, para trabalhar com qualquer entrada.

#### Snapshots test

Normalmente não usamos HTML bruto para criar nosso código. React, Vue e Angular vêm para resgatar. Portanto, o primeiro teste que você deseja ter em nossa base de código é o snapshot test. Com esse teste, podemos garantir que o componente feito no React, por exemplo, está renderizando a mesma saída em HTML que deveria estar no navegador.

A estrutura de teste dessas bibliotecas de componentes tem uma maneira de renderizar o HTML real e, então, você pode salvá-lo usando uma ferramenta de snapshot. [Jest tem uma documentação](https://jestjs.io/docs/snapshot-testing) para fazer isso.

#### Teste de interação

Os aplicativos da Web são feitos por interações e nossos componentes têm métodos que podem ser chamados pela interação de um usuário. Se um usuário clicar em um botão e abrir uma lista suspensa, você deseja testar se essas interações estão funcionando conforme o esperado e abrir a lista suspensa corretamente. Normalmente, os frameworks de teste têm uma maneira de testar isso também, um exemplo de ferramenta incrível é a [testing-library](https://testing-library.com/docs/).

#### Regressão visual

A UI é feita por pixels. Você quer ter certeza de que o visual dos componentes que você escreve não muda quando você faz uma refatoração. Com o teste de regressão visual você pode cuidar disso fazendo uma captura de tela do componente dentro de uma tela e compará-lo com a versão anterior. Às vezes pode ser complicado, como com animações, com sistemas operacionais diferentes, navegadores diferentes, resoluções de tela diferentes, etc. Mas geralmente é uma boa ideia tê-lo em sua base de código em algum nível.

Para fazer esse teste, você precisa colocar seu componente em um navegador real e fazer uma captura de tela dele. Portanto, você precisa de algo emulando o componente no navegador. Você pode fazer isso com [Cypress](https://www.cypress.io/), [Playwright](https://playwright.dev/), [Storybook](https://storybook.js.org/) com [Loki](https://loki.js.org/) ou [Chromatic](https://www.chromatic.com/).

### Nível de aplicação

#### Teste funcional

Teste funcional clássico, você pode usar para testar funções, auxiliares, camada de dados e etc.

#### Teste de integração

Você pode usar o termo teste de integração para descrever esses testes construindo o aplicativo inteiro, servir e tentar executar alguns dos principais cenários felizes

### End-to-End test

Você pode ver isso como um teste de recurso testando O aplicativo pela perspectiva do usuário. Esse teste é frágil e pode ser difícil de fazer, mas é uma boa maneira de testar o aplicativo. Você pode fazer isso com as mesmas ferramentas do nível do aplicativo.

## Conclusion

Espero que o conhecimento de alguns tipos e níveis diferentes de teste possa ajudá-lo a tomar boas decisões sobre quais testes você precisa em sua base de código. Embora, **o que e como é com você e sua equipe. Só não se esqueça de testar, seu futuro eu agradecerá**.

## References

Algumas referências e estudos adicionais sobre teste e arquitetura de front end. Faça um bom uso:

- [ARTICLE: Practical Test Pyramid by *Martin Fowler*](https://martinfowler.com/articles/practical-test-pyramid.html)
- [ARTICLE: Unit test by *Martin Fowler*](https://martinfowler.com/bliki/UnitTest.html)
- [ARTICLE: Gherkin Language by *Cucumber*](https://cucumber.io/docs/gherkin/)
- [ARTICLE: Atomic Design by *Brad Frost*](https://bradfrost.com/blog/post/atomic-web-design/)
- [BOOK: Clean Code by *Martin Robert C.*](https://www.amazon.com.br/dp/B001GSTOAM/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)
