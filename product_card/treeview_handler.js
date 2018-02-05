/**
 * Created by Bulle on 05-Feb-18.
 */

document.addEventListener("DOMContentLoaded", function (event) {
    let budgetTree = document.querySelector("#budget-tree");
    console.log(budgetTree);

    function createCategory() {
        // creating the container to hold everything withing a category
        let categoryContainer = document.createElement("div");
        categoryContainer.className = "category-container";

        let category = document.createElement("div");
        category.className = "category";

        let itemTypeContainer = document.createElement("div");
        itemTypeContainer.className = "item-type-container";

        let itemType= document.createElement("div");
        itemType.className = "item-type";

        let priceRangeContainer= document.createElement("div");
        priceRangeContainer.className = "price-range-container";

        let priceRange = document.createElement("div");
        priceRange.className = "price-range";

        let itemContainer= document.createElement("div");
        itemContainer.className = "item-container";

        let item = document.createElement("div");
        item.className = "item";
    }
});