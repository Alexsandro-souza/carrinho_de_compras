const schemas = [
  {
    message:
      'Deseja cadastrar um produto - Digite 1 \nDeseja ver carrinho - Digite 2 \nDeseja adicionar produto ao carrinho - Digite 3 \n\nOpção: ',
    validate: /^[123]$/,
    error: 'ERRO: Escolha 1, 2 ou 3\n______________________________\n\n',
  },
  {
    message: 'Nome do produto: ',
    validate: /^[\p{L}., ]+$/u,
    error: 'ERRO: Nome do produto não deve conter números',
  },
  {
    message: 'Descrição do produto: ',
    validate: /^[\p{L}0-9., ]+$/u,
    error: 'ERRO: A descrição não deve conter caracteres especiais',
  },
  {
    message: 'Valor do produto: ',
    validate: /^\d+(\.\d+)?$/,
    error: 'ERRO: O valor do produto deve separar os centavos ponto.',
  },
  {
    message: 'Escolha o número do item que deseja adicionar o carrinho.',
    validate: /^[0-9]$/,
    error: 'ERRO: Digite apenas números.',
  },
  {
    message:
      'Deseja adicionar mais algum item ao carrinho?\nDigite 1 para sim\nDigite 2 para não',
    validate: /^[1-2]$/,
    error: 'ERRO: Digite apenas números.',
  },
];

export default schemas;
