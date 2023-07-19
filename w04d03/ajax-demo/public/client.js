console.log("inside client.js");

$(() => {
  const createFoodElement = (foodItem) => {
    // create the foodItem element
    const $foodItem = $(`
      <article class="food-item">
        <header class="food-item-header">
          <h2>Name: ${foodItem.name}</h2>
          <h3>Id: ${foodItem.id}</h3>
        </header>
        <hr/>
        <p>Description: ${foodItem.tagline}</p>
        <footer class="food-item-footer">
          <h3>Price: $${foodItem.price}</h3>
          <h3>Calories: ${foodItem.calories}</h3>
        </footer>
      </article>
    `);

    return $foodItem;
  };

  const renderFoodItems = (foodItems) => {
    // grab the food-item-container from the DOM
    const $container = $("#food-item-container");

    // iterate through the provided array
    for (const foodItem of foodItems) {
      // create a food element for each element in the array
      const $foodItem = createFoodElement(foodItem);

      // add our new food-item element to the container
      $container.append($foodItem);
    }
  };

  const fetchFoodItems = () => {
    $.ajax({
      method: 'GET',
      url: '/food-items',
      success: (foodItems) => {
        console.log(foodItems);
        renderFoodItems(foodItems);
      }
    });
  };

  fetchFoodItems();

  // setInterval(fetchFoodItems, 10000); // polling
});
