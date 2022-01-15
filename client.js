let restaurant_A = {
    name: "Aragorn's Orc BBQ", //The name of the restaurant
    min_order: 20, //The minimum order amount required to place an order
    delivery_charge: 5, //The delivery charge for this restaurant
    //The menu
    menu: {
        //First category
        "Appetizers": {
            //First item of this category
            0: {
                name: "Orc feet",
                description: "Seasoned and grilled over an open flame.", //
                price: 5.50
            },
            1: {
                name: "Pickled Orc fingers",
                description: "Served with warm bread, 5 per order.",
                price: 4.00
            },
            2: { //Thank you Kiratchii
                name: "Sauron's Lava Soup",
                description: "It's just really spicy water.",
                price: 7.50
            },
            3: {
                name: "Eowyn's (In)Famous Stew",
                description: "Bet you can't eat it all.",
                price: 0.50
            },
            4: {
                name: "The 9 rings of men.",
                description: "The finest of onion rings served with 9 different dipping sauces.",
                price: 14.50
            }
        },
        "Combos": {
            5: {
                name: "Buying the Farm",
                description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
                price: 15.99
            },
            6: {
                name: "The Black Gate Box",
                description: "Lots of unidentified pieces. Serves 50.",
                price: 65.00
            },
            7: {//Thanks to M_Sabeyon
                name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
                description: "Smeagol's favorite.",
                price: 15.75
            },
            8: { //Thanks Shar[TA]
                name: "Morgoth's Scorched Burgers with Chips",
                description: "Blackened beyond recognition.",
                price: 13.33
                
            },
            10: {
                name: "Slab of Lurtz Meat with Greens.",
                description: "Get it while supplies last.",
                price: 17.50
            },
            11: {
                name: "Rangers Field Feast.",
                description: "Is it chicken? Is it rabbit? Or...",
                price: 5.99
            }
        },
        "Drinks": {
            12: {
                name: "Orc's Blood Mead",
                description: "It's actually raspberries - Orc's blood would be gross.",
                price: 5.99
            },
            13: {
                name: "Gondorian Grenache",
                description: "A fine rose wine.",
                price: 7.99
            },
            14: {
                name: "Mordor Mourvedre",
                description: "A less-fine rose wine.",
                price: 5.99
            }
        }   
    }
};

let restaurant_B = {
    name: "Lembas by Legolas",
    min_order: 15,
    delivery_charge: 3.99,
    menu: {
        "Lembas": {
            0: {
                name: "Single",
                description: "One piece of lembas.",
                price: 3
            },
            1: {
                name: "Double",
                description: "Two pieces of lembas.",
                price: 5.50
            },
            2: { 
                name: "Triple",
                description: "Three pieces, which should be more than enough.",
                price: 8.00
            }
        },
        "Combos": {
            3: {
                name: "Second Breakfast",
                description: "Two pieces of lembas with honey.",
                price: 7.50
            },
            4: {
                name: "There and Back Again",
                description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
                price: 25.99
            },
            5: {
                name: "Best Friends Forever",
                description: "Lembas and a heavy stout.",
                price: 6.60
            }
        }
    }
};

let restaurant_C = {
    name: "Frodo's Flapjacks",
    min_order: 35,
    delivery_charge: 6,
    menu: {
        "Breakfast": {
            0: {
                name: "Hobbit Hash",
                description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
                price: 9.00
            },
            1: {
                name: "The Full Flapjack Breakfast",
                description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
                price: 14.00
            },
            2: { 
                name: "Southfarthing Slammer",
                description: "15 flapjacks and 2 pints of syrup.",
                price: 12.00
            }
            
        },
        "Second Breakfast": {
            3: {
                name: "Beorning Breakfast",
                description: "6 flapjacks smothers in honey.",
                price: 7.50
            },
            4: {
                name: "Shire Strawberry Special",
                description: "6 flapjacks and a hearty serving of strawberry jam.",
                price: 8
            },
            5: {
                name: "Buckland Blackberry Breakfast",
                description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
                price: 14.99
            }
        },
        "Elevenses": {
            6: {
                name: "Lembas",
                description: "Three pieces of traditional Elvish Waybread",
                price: 7.70
            },
            7: {
                name: "Muffins of the Marish",
                description: "A variety of 8 different types of muffins, served with tea.",
                price: 9.00
            },
            8: {
                name: "Hasty Hobbit Hash",
                description: "Potatoes with onions and cheese. Served with coffee.",
                price: 5.00
            }
        },
        "Luncheon": {
            9: {
                name: "Shepherd's Pie",
                description: "A classic. Includes 3 pies.",
                price: 15.99
            },
            10: {
                name: "Roast Pork",
                description: "An entire pig slow-roasted over a fire.",
                price: 27.99
            },
            11: {
                name: "Fish and Chips",
                description: "Fish - fried. Chips - nice and crispy.",
                price: 5.99
            }
        },
        "Afternoon Tea": {
            12: {
                name: "Tea",
                description: "Served with sugar and cream.",
                price: 3
            },
            13: {
                name: "Coffee",
                description: "Served with sugar and cream.",
                price: 3.50
            },
            14: {
                name: "Cookies and Cream",
                description: "A dozen cookies served with a vat of cream.",
                price: 15.99
            },
            15: {
                name: "Mixed Berry Pie",
                description: "Fresh baked daily.",
                price: 7.00
            }
        },
        "Dinner": {
            16: {
                name: "Po-ta-to Platter",
                description: "Boiled. Mashed. Stuck in a stew.",
                price: 6
            },
            17: {
                name: "Bree and Apple",
                description: "One wheel of brie with slices of apple.",
                price: 7.99
            },
            18: {
                name: "Maggot's Mushroom Mashup",
                description: "It sounds disgusting, but its pretty good",
                price: 6.50
            },
            19: {
                name: "Fresh Baked Bread",
                description: "A whole loaf of the finest bread the Shire has to offer.",
                price: 6
            },
            20: {
                name: "Pint of Ale",
                description: "Yes, it comes in pints.",
                price: 5
            }
        },
        "Supper": {
            21: {
                name: "Sausage Sandwich",
                description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
                price: 15.99
            },
            22: {
                name: "Shire Supper",
                description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
                price: 37.99
            }
        }
    }
};

let restaurants = [restaurant_A, restaurant_B, restaurant_C];
//let basket = {quantity:0, id:`${restaurant.menu[subCategory][menuDetail].name}`, price:};
// create basket object with attributes eg total, subtotal, tax, etc and use basket.total = ... or basket.total to call in other functions i.e orderBasket/displayBasket
let order = {tax:0, subtotal:0, total:0, quantity:0, requiredAmount:0, foodName:[""]};

// dynamically creating drop-down menu for each restaurant
for (const restaurant in restaurants){
    let option = document.createElement('option');
    option.textContent = restaurants[restaurant].name;
    option.value = restaurant;
    document.getElementById("selectRestaurant").appendChild(option);
}
// init function that runs on page load

function init(){
    restaurantDetail();
    orderBasket();
    //event listeners used 
    document.getElementById("selectRestaurant").addEventListener("change", restaurantDetail);
    document.getElementById("orderDetails").addEventListener("change", orderBasket);
    document.getElementById("orderDetails").addEventListener("onclick", buttonClick);
    document.getElementById("selectRestaurant").addEventListener("change", alertT);
    document.getElementById("orderDetails").addEventListener("onclick", alertsubmit);
}

function restaurantDetail(){
    // declaring and initializing div's 
    let divRestaurant = document.createElement('div');
    let divCategory = document.createElement('div');
    let divLeftInfo = document.createElement('div');

    // clears the content of the div's so this way when switching restaurants, previous page information does not stay
    document.getElementById('rName').innerHTML = '';
    document.getElementById('category').innerHTML = '';
	document.getElementById('restaurantMenu').innerHTML = '';
    document.getElementById('leftsideinfo').innerHTML = '';
    document.getElementById('orderDetails').innerHTML = '';
    for (const restaurant of restaurants){
        if (restaurant.name == document.getElementById('selectRestaurant').options[document.getElementById('selectRestaurant').selectedIndex].textContent){
            // gets restaurant name with id after restaurant name matches selected drop-down option, stores in div and sends back to document
            let p4 = document.createElement("p");
            p4.textContent = restaurant.name;
            divRestaurant.appendChild(p4);
            document.getElementById("rName").appendChild(divRestaurant);

            // Left hand info (rName, minorder, deliveryfee.)
            let p7 = document.createElement("p");
            let p8 = document.createElement("p");
            p7.textContent = "Minimum Order: $" + restaurant.min_order.toFixed(2);
            p8.textContent = "Delivery Fee: $" + restaurant.delivery_charge.toFixed(2);
            divLeftInfo.appendChild(p7);
            divLeftInfo.appendChild(p8);
            document.getElementById("leftsideinfo").appendChild(divLeftInfo);
           
            // nested for loop used to extract restaurant information such as menu options, details, description, and price
            for (let subCategory in restaurant.menu){
                // creating tags (a for href, br for line break, div tag to store data and p to store text content)
                let categoryLink = document.createElement("a");
                categoryLink.textContent = subCategory;
                divCategory.appendChild(categoryLink);
                divCategory.appendChild(document.createElement("br"));

				let categoryList = document.createElement("ul");
                let listItem = document.createElement("div");
                let anchor = document.createElement("p");

                anchor.id=subCategory;
                // declaring the anchor
                anchor.textContent= subCategory;
                anchor.classList.add("cat-cat");
                // adding achor to the caregory links
                categoryLink.href= "#"+ anchor.id;
                listItem.appendChild(anchor);
                document.getElementById("category").appendChild(divCategory);
                
                for (let menuDetail in restaurant.menu[subCategory]){
                    //creating tags to store necessary information
                    let dishName = document.createElement("div");
                    let descripton = document.createElement("div");
                    let button = document.createElement("button");
                    // add button
                    button.classList.add("add-button");

                    // id for button and each menu price 
                    button.id= `${menuDetail}`;
                    dishName.id = `${restaurant.menu[subCategory][menuDetail].price}`;
                    // setting unique id by name for each dish
                    dishName.id = `${restaurant.menu[subCategory][menuDetail].name}`;
                    // adding click event listener for button
                    button.addEventListener("click", buttonClick);
                    let br = document.createElement("br");
                    dishName.textContent = restaurant.menu[subCategory][menuDetail].name + ' ($' + restaurant.menu[subCategory][menuDetail].price + ')\n';
                    descripton.textContent = restaurant.menu[subCategory][menuDetail].description + '\n';
                    descripton.classList.add("description-description");
                    dishName.appendChild(button);
                    dishName.appendChild(br);
                    dishName.appendChild(descripton);
                    dishName.appendChild(br);
					listItem.appendChild(dishName);
					categoryList.appendChild(listItem);
                }
				document.getElementById("restaurantMenu").appendChild(categoryList);
            }
        }
    }
}

// this function sends an alert when user tries to switch restaurants with two choices available to click
function alertT(){
    for (const restaurant of restaurants){
        if (restaurant.name == document.getElementById('selectRestaurant').options[document.getElementById('selectRestaurant').selectedIndex].textContent){
            if(document.getElementById('selectRestaurant').options[document.getElementById('selectRestaurant').selectedIndex].textContent){
                if(confirm("Clear basket and leave this restaurant?")){
                    order.subtotal=0;
                    order.total=0;
                    order.tax=0;
                    order.foodName = [""];
                    orderBasket();
                    console.log("left restaurant");
                }
                else{
                    order.subtotal=0;
                    order.total=0;
                    order.tax=0;
                    order.foodName = [""];
                    orderBasket();
                    console.log("pressed cancel");
                }
            }
        }
    }
 }

 // this function takes care of rendering order basket
function orderBasket(){
    document.getElementById('orderDetails').innerHTML = '';
    let divRightInfo = document.createElement('div');
    for (const restaurant of restaurants){
        if (restaurant.name == document.getElementById('selectRestaurant').options[document.getElementById('selectRestaurant').selectedIndex].textContent){
            let deliveryFee = document.createElement("p");
            deliveryFee.textContent= "Delivery Fee: $" + restaurant.delivery_charge.toFixed(2);
            let basket_subtotal = document.createElement("p");
            basket_subtotal.textContent = "Subtotal: $" + order.subtotal.toFixed(2);
            let taxCharge = document.createElement("p");
            taxCharge.textContent = "Tax: $" + order.tax.toFixed(2);
            divRightInfo.appendChild(basket_subtotal);
            divRightInfo.appendChild(taxCharge);
            divRightInfo.appendChild(deliveryFee);
            let totalCharge = document.createElement("p");
            totalCharge.textContent = "Total: $" + (order.total + restaurant.delivery_charge).toFixed(2);
            divRightInfo.appendChild(totalCharge);
            order.requiredAmount = restaurant.min_order;
            let submitButton = document.createElement("button");
            submitButton.textContent = "Place Order";
            submitButton.id = "placeOrder";
            submitButton.addEventListener("click", alertsubmit);
            let p3 = document.createElement("p");
            // if statement for required amount that dynamically changes upon adding items to the basket
            if (order.subtotal < order.requiredAmount){
                p3.textContent = "Add $" + (order.requiredAmount-order.subtotal).toFixed(2) + " more to your order";
                submitButton.style.display="none";
            }
            else{
                console.log("Ready to place order!")
            }
            let foods = document.createElement("div");
            foods.textContent = order.foodName;
            p3.appendChild(foods);
            // appending br tags to separate the place order button from the rest of the basket information then appending the submit button at the end of the div
            let br = document.createElement("br");
            p3.appendChild(br);
            let br2 = document.createElement("br");
            p3.appendChild(br2);
            p3.appendChild(submitButton);
            // appendchild (appending) p3 and all its contents to the div (divRightInfo) which is div for order summary/basket
            divRightInfo.appendChild(p3);
            // childappending div to document for displaying
            document.getElementById("orderDetails").appendChild(divRightInfo);
        }
    }
}
// function that sends an alert when user places their order, it then resets order details 
function alertsubmit(){
    alert("Order placed!");
    order.subtotal=0;
    order.total=0;
    order.tax=0;
    order.foodName="";
    orderBasket();
}

// function that takes in id's of all the buttons and calculates and adds items when clicked on its add button respectively
function buttonClick(id){
    for (const restaurant of restaurants){
        if (restaurant.name == document.getElementById('selectRestaurant').options[document.getElementById('selectRestaurant').selectedIndex].textContent){
            for (let subCategory in restaurant.menu){
                if (restaurant.menu[subCategory][this.id] == undefined){
                    continue;
                }
                
                let removeButton = document.createElement("button");
                removeButton.classList.add("remove-button");
                removeButton.id="remove-button";

                order.foodName += "\n"+ restaurant.menu[subCategory][this.id].name;
                order.subtotal += restaurant.menu[subCategory][this.id].price;
                order.tax = (order.subtotal*0.1)
                order.total = order.subtotal + order.tax;
                orderBasket();
                console.log(restaurant.menu[subCategory][this.id].price);
            }
        }
    }
}