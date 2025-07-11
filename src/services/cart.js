//quais açoes meu carrinho pode fazer

//CASOS DE USO
// ✅ -> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁Total: ${result}`);
}

// -> add item favorito
async function addToFavorites(wishlist, item) {
  const alreadyExists = wishlist.some((fav) => fav.name === item.name);
  if (alreadyExists) {
    console.log(`"${item.name}" já está nos favoritos.`);
    return;
  }

  wishlist.push(item);
  console.log(`"${item.name}" adicionado aos favoritos.`);
}

// -> Exibir os favoritos

async function displayFavorites(wishlist) {
  console.log("\n❤️ Lista de Favoritos:");
  if (wishlist.length === 0) {
    console.log("Nenhum item nos favoritos.");
    return;
  }

  wishlist.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price}`);
  });
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// -> ✅ remover um item - diminui um item
async function removeItem(userCart, item) {
  //1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //3. item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //4. caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

// ✅ mostra todos os items do carrinho
async function displaycart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal()}`
    );
  });
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displaycart,
  addToFavorites,
  displayFavorites
};
