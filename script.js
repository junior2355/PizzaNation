$(".pepperoni-olives").click(function() {
    hideAllToppings();
    addPepperoni();
    addOlives();
});

$(".pepperoni-mushrooms").click(function() {
         hideAllToppings();
        addPepperoni();
        addMushroom();
});

$(".vegetarian").click(function() {
     hideAllToppings();
    addOlives();
    addMushroom();
});
function addPepperoni(){
    $(".pepperoni").show();
}
function hideAllToppings(){
    $(".topping").hide();
}
function addOlives(){
    $(".olives").show();
}
 function addMushroom(){
    $(".mushrooms").show();
}