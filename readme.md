# Shopee Cart

Simulação simples de um carrinho de compras com funcionalidades de favoritos (wishlist), usando JavaScript modularizado.

---

## Funcionalidades

### Carrinho (`cart.js`)
- Adicionar item ao carrinho
- Remover uma unidade de um item
- Deletar item completamente
- Exibir itens do carrinho com subtotal
- Calcular total do carrinho

### Favoritos (`wishlist.js`)
- Adicionar item aos favoritos (evita duplicação e itens já no carrinho)
- Remover item dos favoritos
- Exibir lista de favoritos

---

## Como usar

1. Instancie o carrinho e a lista de favoritos:


#const myCart = [];
#const myWhishList = [];

await cartService.addItem(myCart, item);
---
await wishlistService.addToFavorites(myWhishList, item, myCart);
---
await cartService.displaycart(myCart);
---
await wishlistService.displayFavorites(myWhishList);

---


Possíveis melhorias futuras
Persistência em banco ou arquivo

Sistema de cupons e descontos

Interface gráfica (web ou mobile)

Autenticação de usuários

Separar carrinho e favoritos em classes para melhor OOP

Autor
Seu Nome
