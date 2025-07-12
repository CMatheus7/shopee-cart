🛒 Shopee Cart
Simulação simples de um carrinho de compras com funcionalidades de favoritos (wishlist), utilizando JavaScript modularizado.

🔧 Funcionalidades
📦 Carrinho (cart.js)
✅ Adicionar item ao carrinho

✅ Remover uma unidade de um item

✅ Excluir item completamente

✅ Exibir itens do carrinho com subtotal individual

✅ Calcular o valor total do carrinho

❤️ Favoritos (wishlist.js)
✅ Adicionar item à lista de favoritos
(impede duplicações e itens já adicionados ao carrinho)

✅ Remover item da lista de favoritos

✅ Exibir todos os itens salvos nos favoritos

🚀 Como Usar
Instancie o carrinho e a lista de favoritos:

js
Copiar
Editar
const myCart = [];
const myWishList = [];

await cartService.addItem(myCart, item);
await wishlistService.addToFavorites(myWishList, item, myCart);

await cartService.displayCart(myCart);
await wishlistService.displayFavorites(myWishList);
💡 Possíveis Melhorias Futuras
Persistência de dados (em banco de dados ou arquivo)

Implementação de cupons de desconto

Criação de interface gráfica (web ou mobile)

👨‍💻 Autor
Cristian Mateus — Bootcamp DIO / meutudo
