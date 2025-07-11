async function removeFromFavorites(wishlist, name) {
  const index = wishlist.findIndex((item) => item.name === name);

  if (index !== -1) {
    const removedItem = wishlist.splice(index, 1)[0];
    console.log(`"${removedItem.name}" removido dos favoritos.`);
  } else {
    console.log(`"${name}" não está nos favoritos.`);
  }
}

async function addToFavorites(wishlist, item, userCart = []) {
  const inCart = userCart.some((cartItem) => cartItem.name === item.name);
  if (inCart) {
    console.log(`❌ "${item.name}" já está no carrinho. Não pode ser favoritado.`);
    return;
  }

  const alreadyExists = wishlist.some((fav) => fav.name === item.name);
  if (alreadyExists) {
    console.log(`"${item.name}" já está nos favoritos.`);
    return;
  }

  wishlist.push(item);
  console.log(`"${item.name}" adicionado aos favoritos.`);
}
