# Projeto de Chamada à API
Este projeto realiza uma chamada à API pública para obter informações sobre produtos e exibe os dados no console.

## Como Funciona
O código utiliza a Fetch API para realizar uma solicitação GET ao seguinte endpoint:
- **URL**: `http://dummyjson.com/products`

### Funcionamento
1. **Chamada da API**: A função `chmarApi` faz uma chamada à API usando `fetch()`.
2. **Verificação do Status**: Se a resposta da API for bem-sucedida (status 200), os dados são convertidos para JSON.
3. **Exibição de Dados**: Os dados dos produtos são exibidos no console.


Co-authored-by: LucasViana7 <lucasdealcantara.11@gmail.com>
