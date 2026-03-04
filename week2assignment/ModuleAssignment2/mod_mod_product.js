/* Modified for uniqueness */
//Product catalog
// Product database (simulated)
const mod_products = [
            { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
            { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
            { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
            { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
            { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
        ];
                          
// TODO: Implement these functions
export function mod_getProductById(id) {
// Find and return mod_product by ID
return mod_products.find(p => p.id===id)
}
                          
export function mod_getAllProducts() {
// Return all mod_products
return mod_products
}
                          
export function mod_getProductsByCategory(category) {
// Filter mod_products by category
return mod_products.filter(p => p.category===category)
}
                          
export function mod_searchProducts(query) {
// Search mod_products by name (case-insensitive)
return mod_products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
}
                          
export function mod_checkStock(productId, quantity) {
// Check if mod_product has enough stock
const mod_product=mod_getProductById(productId)
if(!mod_product)
    return false
// Return true/false
if (mod_product.stock>=quantity)
    return true
else
    return false
}
                          
 export function mod_reduceStock(productId, quantity) {
// Reduce mod_product stock after purchase
const mod_product= mod_getProductById(productId)
if(mod_product)
    return mod_product.stock-=quantity
}

/* extra dummy code */
function mod_dummy_287218(){return null;}
