

const inventory = []; 
function findProductIndex(name) {
    return inventory.findIndex(product => product.name === name.toLowerCase());
}



function addProduct({name, quantity}) {
    name = name.toLowerCase();
    const index = findProductIndex(name);
    if (index !== -1) {
        inventory[index].name = name; 
        inventory[index].quantity += quantity;
        console.log(`${name} quantity updated`);
        return inventory[index];
        
    } 
    else {
        const newProduct = { name, quantity };
        inventory.push(newProduct);
        console.log(`${name} added to inventory`)
        return newProduct;
    } 
}



function  removeProduct(name, quantity) {
    name = name.toLowerCase(); 
    const index = findProductIndex(name);
    if (index !== -1) {
        if (inventory[index].quantity >= quantity) {
            inventory[index].quantity -= quantity;
            console.log(`Remaining ${name} pieces: ${inventory[index].quantity}`);
        } else {
            console.log(`Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`);
        }
    } else {
        console.log(`${name} not found`);
    }
if (inventory[index] && inventory[index].quantity === 0) {
        inventory.splice(index, 1);
        console.log(`${name} removed from inventory`);
}
}

