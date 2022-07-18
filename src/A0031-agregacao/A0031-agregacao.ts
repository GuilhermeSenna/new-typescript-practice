export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = [];

    inserirProduto(...produtos: Produto[]) {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }

    quantidadeProdutos(): number {
        return this.produtos.length;
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}

export class Produto {
    constructor(public nome: string, public preco: number) { }
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Short', 29.9);
const produto3 = new Produto('Jaqueta', 129.9);
// console.log(produto1.nome);
const carrinho = new CarrinhoDeCompras();
carrinho.inserirProduto(produto1, produto2, produto3);
// carrinho.inserirProduto(produto2);
// carrinho.inserirProduto(produto3);
console.log(carrinho.valorTotal());
console.log(carrinho.quantidadeProdutos());
