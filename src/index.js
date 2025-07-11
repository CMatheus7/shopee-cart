import * as cartService from "./services/cart.js";
import * as wishlistService from "./services/wishlist.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to your Shopee Cart!");

// Criando dois itens
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

// Adicionando aos favoritos
await wishlistService.addToFavorites(myWhishList, item1, myCart);
await wishlistService.addToFavorites(myWhishList, item2, myCart);
await wishlistService.displayFavorites(myWhishList);

// Adicionando ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Removendo do carrinho
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

// Exibir carrinho
await cartService.displaycart(myCart);
await cartService.calculateTotal(myCart);

// Remover dos favoritos
await wishlistService.removeFromFavorites(myWhishList, "hotwheels ferrari");
await wishlistService.displayFavorites(myWhishList);
