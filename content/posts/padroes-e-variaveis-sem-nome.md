---
id: 1
title: "Java 22: Padrões e variáveis sem nome"
date: 2024-09-23
banner: java22.jpg
slug: "padroes-e-variaveis-sem-nome"
abstract: Unnamed Variables and Patterns, simplificando o código ao eliminar variáveis não utilizadas
---

No desenvolvimento de software é bem capaz que você já tenha passado por situações onde foi forçado a declarar uma variável, mesmo não utilizando elas, isso porque, no caso do Java, se você não declarar, o compilador irá acusar de erro. Por exemplo em: parâmetros locais, parâmetros de funções lambda, variáveis de exceções e etc;

Para resolver esse problema, o Java 22 trouxe uma novidade bem interessante: [Unnamed Variables & Patterns](https://openjdk.org/jeps/456), que em tradução literal seria “Variáveis e Padrões Sem Nome”.

## Tratamento de Exceções

O exemplo abaixo mostra um código de tratamento de exceção, onde a variável da exceção não está sendo utilizada:

```java[Main.java] meta-info=val
        String valor1 = "vinicius";
        try{
            Integer.parseInt(valor1);
        }catch (Exception ex){
            System.out.println("Não foi possível realizar a conversão para Int");
        }
```

Neste exemplo, tentamos converter uma `String` para `int`. Quando isso não é possível, uma exceção é lançada. Embora o código funcione, a variável `ex` não está sendo utilizada. Para melhorar a clareza do código, podemos utilizar “Unnamed Variables & Patterns”, que nos permite empregar o operador `_` para substituir a variável não utilizada, como demonstrado a seguir:

 ```java
        String valor1 = "vinicius";
        try{
            Integer.parseInt(valor1);
        }catch (Exception _){
            System.out.println("Não foi possível realizar a conversão para Int");
        }
```

Dessa forma, reduzimos a “complexidade” e deixamos o código mais claro, evitando variáveis sem uso.


## Funções Lambdas

Outro caso de uso é ao trabalhar com funções lambda. Veja o exemplo abaixo, onde a variável `name` não é utilizada no processamento:

```java
        List<String>  names = List.of("Vinícius", "Maria Luíza", "Jill");
        Map<String, String> students = names.stream()
                .collect(Collectors.toMap(
                    String::toLowerCase, 
                    name -> "MATRICULADO"
                ));
```

Nesse caso, o código pode ser simplificado também utilizando o operador `_`:

```java
        Map<String, String> students = names.stream()
                    .collect(Collectors.toMap(
                        String::toLowerCase, 
                        _ -> "MATRICULADO"
                    ));
```

Assim, a funcionalidade permanece intacta: pegamos a lista, transformamos em um mapa, onde os nomes são as chaves em letras minúsculas, e todos os valores são “MATRICULADO”.

## Loops

Um último exemplo é quando utilizamos um laço de repetição e não precisamos do “elemento”. Veja o código abaixo:

```java
        String s = "Hello, World!";
        int len = 0;

        for (char character : s.toCharArray()) {
            len++;
        }
```

Esse código pode ser simplificado da seguinte maneira:

```java
        String s = "Hello, World!";
        int len = 0;

        for (char _ : s.toCharArray()) {
            len++;
        }
```

Pronto, o comportamento continua o mesmo, apenas sinalizamos que não vamos precisar do `character`.

## Conclusão

Esses são alguns casos de uso dessa nova funcionalidade. Para mais detalhes, acesse a [JEP 456: Unnamed Variables & Patterns](https://openjdk.org/jeps/456). 

Como vimos, essa nova funcionalidade oferece diversas vantagens, como a redução da complexidade do código e a eliminação de variáveis não utilizadas. No entanto, acredito que seu uso deve ser moderado, pois, em algumas situações, pode dificultar a legibilidade do código.
