// Lista base de ingredientes (ajusta según tus productos)
const baseIngredients = [
    "Queso", "Jamón", "Pepperoni", "Aceitunas", "Salsa", "Masa", "Champiñones", "Maíz", "Cebolla", "Pimientos"
];

// Función reutilizable para renderizar tarjetas de ingredientes, mostrando stock
function renderIngredientCards(container, ingredients, inventory, options = {}) {
    container.innerHTML = '';
    ingredients.forEach(name => {
        const stock = inventory[name] !== undefined ? inventory[name] : initialDailyStock;
        const card = document.createElement('div');
        card.className = 'ingredient-card p-4 bg-gray-100 rounded-lg text-center shadow-sm mb-2';
        card.dataset.name = name;
        card.dataset.type = 'ingredient';

        card.innerHTML = `
            <h4 class="font-bold text-gray-800">${name}</h4>
            <span class="stock-counter text-xl font-extrabold mt-1 ${stock > 10 ? 'text-green-600' : 'text-red-600'}">${stock}</span>
            <p class="text-xs text-gray-500">unidades disponibles</p>
        `;

        // Si es modo "builder", haz seleccionable, si no, NO
        if (options.selectable) {
            card.classList.add('cursor-pointer', 'hover:bg-yellow-200');
            card.addEventListener('click', () => {
                // Lógica de selección de ingredientes para armar pizza
            });
        } else {
            card.classList.add('opacity-100', 'cursor-default');
            card.style.pointerEvents = 'none';
        }

        container.appendChild(card);
    });
}

// Ejemplo de uso para la página de inventario
// renderIngredientCards(document.getElementById('inventory-list'), baseIngredients, currentInventory, { selectable: false });

// Ejemplo de uso para la página de armado de pizza
// renderIngredientCards(document.getElementById('builder-ingredients-list'), baseIngredients, currentInventory, { selectable: true });