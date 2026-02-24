---
id: 2
title: "SOLID e o compromisso com quem vem depois"
date: 2026-02-23
banner: solid.png
slug: "solid-principles"
abstract: Mais do que princípios técnicos, o SOLID representa uma responsabilidade com a evolução do software e com quem dará continuidade ao código. Uma reflexão prática, com exemplos curtos, sobre escrever pensando no futuro
---

Todo código que você escreve hoje vai ser lido por alguém amanhã. Pode ser um colega de equipe, um dev que entrou no projeto meses depois, ou até você mesmo que, convenhamos, daqui a seis meses já é praticamente outra pessoa. E quando esse alguém abre o seu código, ele não sabe o que você estava pensando, que prazo estava apertando, que bug você estava caçando às onze da noite. Ele só tem o que está escrito ali.

É por isso que escrever código limpo não é vaidade técnica. É responsabilidade. É um compromisso silencioso com quem vem depois.

Os princípios **SOLID** são, no fundo, sobre isso. Sim, eles tornam o código mais flexível, mais testável, mais fácil de manter. Mas antes de tudo, eles te forçam a pensar no outro, a pessoa que vai precisar entender, estender e confiar no que você deixou para trás. Vamos ver como cada um desses princípios se traduz na prática.

---

## S — Single Responsibility Principle (SRP)

> *"Uma classe deve ter um, e apenas um, motivo para mudar."*
> — Robert Martin

A ideia aqui é simples: cada classe deve ser responsável por **apenas uma coisa**, e deve fazer essa coisa muito bem.

Quando estamos começando em OO, é natural criar o que chamamos de **"classe Deus"**, aquela que resolve tudo em um único lugar. Parece conveniente no início, mas rapidamente vira um problema. Olha esse exemplo:

```java
public class FolhaDePagamento {

    public double calcularSalario(double horas, double valorHora) {
        return horas * valorHora;
    }

    public String gerarHolerite(String nome, double salario) {
        return "Funcionario: " + nome + "\nSalario: R$ " + salario;
    }

    public void enviarNotificacao(String nome) {
        System.out.println("Notificando " + nome + " sobre o pagamento...");
    }
}
```

Parece inofensivo, né? Mas repare: essa classe tem **três motivos diferentes para mudar** — o cálculo do salário, o formato do holerite e a regra de notificação. Qualquer alteração em qualquer um desses contextos vai te trazer de volta a essa classe.

A solução é separar as responsabilidades em classes dedicadas:

```java
public class CalculadoraSalario {
    public double calcular(double horas, double valorHora) {
        return horas * valorHora;
    }
}

public class GeradorHolerite {
    public String gerar(String nome, double salario) {
        return """
            ===== HOLERITE =====
            Funcionario: %s
            Salario: R$ %.2f
            ====================
            """.formatted(nome, salario);
    }
}

public class NotificacaoService {
    public void notificar(String nome) {
        System.out.println("Notificando " + nome + " sobre o pagamento...");
    }
}
```

E por fim, uma classe que **orquestra** tudo:

```java
public class FolhaService {

    private final CalculadoraSalario calculadora;
    private final GeradorHolerite gerador;
    private final NotificacaoService notificacao;

    public FolhaService(CalculadoraSalario calculadora, GeradorHolerite gerador, NotificacaoService notificacao) {
        this.calculadora = calculadora;
        this.gerador = gerador;
        this.notificacao = notificacao;
    }

    public void processar(String nome, double horas, double valorHora) {
        double salario = calculadora.calcular(horas, valorHora);
        String holerite = gerador.gerar(nome, salario);
        System.out.println(holerite);
        notificacao.notificar(nome);
    }
}
```

Agora a `FolhaService` só muda se o **fluxo de processar a folha de pagamento** mudar. Cada classe tem seu próprio mundo e isso é muito mais saudável.

Pensa no dev que vai pegar esse código depois de você: se ele precisar mudar a lógica de notificação, ele sabe exatamente onde ir. Não precisa ler 200 linhas de uma classe monolítica tentando adivinhar onde começa e termina cada responsabilidade. Isso é respeito com o tempo do outro.

---

## O — Open/Closed Principle (OCP)

> *"Entidades de software devem ser abertas para extensão, mas fechadas para modificação."*
> — Bertrand Meyer

Traduzindo para o dia a dia: você deve conseguir **adicionar novos comportamentos ao sistema sem precisar mexer no código que já funciona**.

Imagine um sistema de cálculo de frete para um e-commerce:

```java
public class CalculadoraFrete {
    public double calcular(String tipoEntrega, double peso) {
        if (tipoEntrega.equals("NORMAL")) {
            return peso * 5.0;
        } else if (tipoEntrega.equals("EXPRESSO")) {
            return peso * 10.0;
        }
        return 0.0;
    }
}
```

À primeira vista parece simples. Mas pensa comigo: cada novo tipo de frete exige que você **abra essa classe e modifique o código existente**. Cada `if` novo aumenta a chance de bugs. As regras vão se acumulando e o código fica cada vez mais frágil.

Essa classe está "fechada" para extensão e "aberta" para modificação — o exato oposto do que o OCP prega.

A solução começa com um contrato claro via interface:

```java
public interface Frete {
    double calcular(double peso);
}
```

Cada tipo de frete vira uma classe independente:

```java
public class FreteNormal implements Frete {
    @Override
    public double calcular(double peso) {
        return peso * 5.0;
    }
}

public class FreteExpresso implements Frete {
    @Override
    public double calcular(double peso) {
        return peso * 10.0;
    }
}
```

E a calculadora passa a não precisar saber quais tipos existem:

```java
public class CalculadoraFrete {
    public double calcular(Frete frete, double peso) {
        return frete.calcular(peso);
    }
}
```

Surgiu um novo tipo de frete? Basta criar uma nova implementação. A estrutura existente não precisa ser tocada. É assim que o código deve crescer — por adição, não por modificação.

Quando você desenha um sistema assim, está dizendo: "pode adicionar coisas novas sem medo, o que já existe não vai quebrar." Isso é deixar o caminho aberto para o próximo, em vez de deixar uma armadilha.

---

## L — Liskov Substitution Principle (LSP)

> *"Classes filhas nunca deveriam infringir as definições de tipo da classe pai."*
>
> — Barbara Liskov

O LSP garante que, se `B` herda de `A`, então `B` deve poder ser usada em qualquer lugar onde `A` é esperada, sem surpresas, sem quebrar nada.

Em outras palavras: **uma subclasse nunca pode quebrar o contrato da superclasse**.

Imagine um sistema de pagamentos com uma classe base:

```java
public class Pagamento {
    public void processar(double valor) {
        System.out.println("Pagamento de R$ " + valor + " processado.");
    }
}
```

Agora alguém cria um `PagamentoParcelado` assim:

```java
public class PagamentoParcelado extends Pagamento {
    @Override
    public void processar(double valor) {
        throw new UnsupportedOperationException("Pagamento parcelado não usa este método.");
    }

    public void processarParcelado(double valor, int parcelas) {
        System.out.println("Pagamento parcelado em " + parcelas + "x de R$ " + valor);
    }
}
```

E em algum lugar do sistema:

```java
public void finalizarCompra(Pagamento pagamento, double valor) {
    pagamento.processar(valor); // 💥 Quebra se for PagamentoParcelado
}
```

O código compila, mas explode em tempo de execução. Isso é uma violação clara do LSP.

A correção passa por usar uma abstração bem definida:

```java
public interface MetodoPagamento {
    void processar(double valor);
}

public class PagamentoAVista implements MetodoPagamento {
    @Override
    public void processar(double valor) {
        System.out.println("Pagamento à vista de R$ " + valor);
    }
}

public class PagamentoParcelado implements MetodoPagamento {
    @Override
    public void processar(double valor) {
        System.out.println("Pagamento parcelado (valor total): R$ " + valor);
    }
}
```

E o fluxo final funciona para qualquer tipo:

```java
public void finalizarCompra(MetodoPagamento pagamento, double valor) {
    pagamento.processar(valor); // ✅ Funciona para qualquer implementação
}
```

Simples assim. Quando o contrato é respeitado, o código é previsível — e previsibilidade é sinônimo de confiança.

---

## I — Interface Segregation Principle (ISP)

> *"Uma classe não deve ser forçada a depender de métodos que não utilizará."*
>
> — Robert C. Martin

Interfaces grandes e genéricas demais são um problema. Elas obrigam implementações a criar métodos que não fazem sentido naquele contexto e isso é um cheiro ruim no código.

Pense num sistema de atendimento técnico com impressoras:

```java
// ❌ Interface "gorda" que tenta fazer tudo
public interface Impressora {
    void imprimir(String documento);
    void escanear(String documento);
    void enviarFax(String documento);
}
```

O problema: uma impressora simples só imprime. Um scanner só escaneia. Quase nenhum equipamento moderno envia fax. Se uma classe implementar essa interface, será obrigada a criar métodos que não fazem sentido para ela — violando o ISP.

A solução é segregar as responsabilidades:

```java
public interface Imprimivel {
    void imprimir(String documento);
}

public interface Escaneavel {
    void escanear(String documento);
}

public interface EnviaFax {
    void enviarFax(String documento);
}
```

Uma impressora simples implementa apenas o que é dela:

```java
public class ImpressoraSimples implements Imprimivel {
    @Override
    public void imprimir(String documento) {
        System.out.println("Imprimindo: " + documento);
    }
}
```

Já uma multifuncional pode implementar tudo:

```java
public class Multifuncional implements Imprimivel, Escaneavel, EnviaFax {
    @Override
    public void imprimir(String documento) {
        System.out.println("Imprimindo: " + documento);
    }

    @Override
    public void escanear(String documento) {
        System.out.println("Escaneando: " + documento);
    }

    @Override
    public void enviarFax(String documento) {
        System.out.println("Enviando fax: " + documento);
    }
}
```

Interfaces pequenas e coesas permitem que cada classe implemente apenas o que realmente faz. Sem peso desnecessário, sem métodos vazios, sem gambiarras.

Quando o próximo dev precisar criar uma nova implementação, ele olha a interface e entende exatamente o que se espera dele. Nada mais, nada menos. É um acordo claro entre quem escreveu e quem vai continuar.

---

## D — Dependency Inversion Principle (DIP)

> *"Abstrações não devem depender de implementações. Implementações devem depender de abstrações."*
>
> — Robert C. Martin

Quando estamos começando, é comum criar classes que dependem diretamente de outras classes concretas. Isso gera acoplamento, torna o sistema rígido e dificulta muito os testes.

Um erro muito frequente no mercado é quando um serviço de negócio chama diretamente um serviço técnico:

```java
public class CadastroUsuarioService {

    private final EmailSmtp emailSmtp = new EmailSmtp(); // ❌ dependência concreta

    public void cadastrar(String email) {
        System.out.println("Salvando usuário...");
        emailSmtp.enviar(email, "Bem-vindo!");
    }
}

public class EmailSmtp {
    public void enviar(String destino, String mensagem) {
        System.out.println("Enviando e-mail via SMTP para " + destino);
    }
}
```

Parece simples, mas pensa nas consequências: e se a empresa migrar para SendGrid ou SES? E se quiser colocar uma fila no meio? E se quiser testar essa classe sem mandar e-mail de verdade? Você vai precisar **abrir e modificar** o `CadastroUsuarioService` que é uma regra de negócio por causa de um detalhe técnico. Isso é exatamente o que o DIP proíbe.

A solução começa com uma abstração:

```java
public interface EmailService {
    void enviar(String destino, String mensagem);
}
```

Cada provedor vira uma implementação:

```java
public class EmailSmtp implements EmailService {
    public void enviar(String destino, String mensagem) {
        System.out.println("Enviando via SMTP: " + destino);
    }
}

public class EmailSendGrid implements EmailService {
    public void enviar(String destino, String mensagem) {
        System.out.println("Enviando via SendGrid: " + destino);
    }
}
```

E o serviço de negócio passa a depender apenas da abstração:

```java
public class CadastroUsuarioService {

    private final EmailService email;

    public CadastroUsuarioService(EmailService email) {
        this.email = email;
    }

    public void cadastrar(String emailDoUsuario) {
        System.out.println("Salvando usuário...");
        email.enviar(emailDoUsuario, "Bem-vindo!");
    }
}
```

Com isso você ganha sistema flexível, baixo acoplamento, testes fáceis (basta passar um `FakeEmailService`) e a liberdade de trocar de tecnologia sem tocar no código de negócio.

Esse é talvez o princípio que mais carrega o espírito do "pensar em quem vem depois". Você não sabe qual tecnologia a equipe vai usar daqui a um ano. Mas se a regra de negócio não depende de nenhuma implementação concreta, quem vier depois pode trocar as peças sem derrubar a casa.

> Os sistemas mais flexíveis são aqueles em que as dependências do código-fonte se referem apenas a abstrações, nunca a implementações concretas.

---

## Conclusão

SOLID não é uma receita para seguir cegamente e nem é sobre escrever o código "perfeito". É sobre uma postura. Uma forma de pensar que vai além de "funciona" e se pergunta: **"e quando outra pessoa precisar trabalhar nisso?"**

Cada princípio que vimos aqui, no fundo, responde a uma mesma preocupação: deixar o código num estado em que o próximo desenvolvedor consiga trabalhar com confiança. Que ele entenda onde cada coisa está (SRP). Que consiga adicionar funcionalidade sem medo de quebrar o que existe (OCP). Que possa confiar nos contratos (LSP). Que encontre interfaces claras e enxutas (ISP). Que consiga trocar implementações sem abrir o coração do sistema (DIP).

Software é um trabalho coletivo, mesmo quando você está codando sozinho. O "você do futuro" é tão "outra pessoa" quanto um colega novo no time. E o código que você deixa para trás diz muito sobre como você trabalha.

Escrever pensando em quem vem depois não é perder tempo é o que separa código que sobrevive de código que precisa ser reescrito. É o compromisso mais silencioso e mais valioso que um desenvolvedor pode assumir.
