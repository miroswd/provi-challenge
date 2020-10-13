# Validador CPF

CPF => 11 números
Verificação utiliza os 9 primeiros números

## Primeiro Dígito
 - [x] Multiplicar os 9 números, por meio de uma sequência decrescente de 10 a 2
   e ir somando o resultado 

```js
let cpfExample = "529.982.247-25"
let resultado = 5 * 10 + 2 * 9 + 9 * 8...
```

- [x]  Multiplica o resultado por 10, divide por 11 e captura o resto

```js
let final = resultado * 10 % 11 
```

- [x] Se o final for igual ao primeiro dígito depois do verificador, o número após "-",
  significa que o processo está correto

- [x] Se o final for igual a 10, o resultado passa a ser 0

### Primeiro Dígito validado com sucesso

## Segundo dígito
 
- [x] Utiliza-se os 9 dígitos, junto ao primeiro dígito do código verificador
  Multiplica os 10 números pela sequência decrescente de 11 a 2

```js
resultado = 5 * 11 + 2 * 10 + 9 * 9...
```

- [x] Multiplica o resultado por 10 e e pega o resto da divisão por 1

- [x] Se o segundo dígito for igual ao resto, então o CPF é válido

### CPF válido
