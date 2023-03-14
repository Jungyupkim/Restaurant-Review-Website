//This function is to call the restaurants api and get all the restaurants


function getRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    //This function will be called when data returns from the web api    
    request.onload = function () {
        //get all the movies records into our movie array        
        restaurant_array = JSON.parse(request.responseText);
        //Fetch the reviews as well        
        fetchReviews();
        console.log(restaurant_array) // output to console        
        for (i=0;i<(restaurant_array.length); i++)     	
        displayAllRestaurants();
    };
    //This command starts the calling of the movies web api    
    request.send();
}

function displayAllRestaurants() {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;
    var message = "";


    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;

    for (var count = 0; count < totalRestaurants; count++) {

        var thumbnail = restaurant_array[count].thumb;
        var name = restaurant_array[count].restaurant_name;
        var cell = '<div class="card col-md-3" style="background-color: rgba(0,0,0,.4); color:white;"><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap" width="400" height="250" style ="opacity: 1;">\
                    <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer background-colour:white;" data-toggle="modal" data-target="#reviewModal" item="' + count + '" onClick="showRestaurantReviews(this)"></i>\
                    <h6 style="padding-left:30px;cursor:pointer " data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' + count + '" onClick="showRestaurantDetails(this)">' + name + '</h6></div>\
                    </div> '
        table.insertAdjacentHTML('beforeend', cell);
        restaurantCount++;


    }

    message = restaurantCount + " Restaurants in the website";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";

}

function listAllRestaurants() {
    displayAllRestaurants();
    document.getElementById("allMenu").classList.add("active");
    document.getElementById("filterMenu").classList.remove("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function is to display the "Coming Soon" movies
function filterRestaurants() {
    displayAllRestaurants();

    document.getElementById("allMenu").classList.remove("active");
    document.getElementById("filterMenu").classList.add("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

function getCuisines(_id) {

    var cuisines = new XMLHttpRequest();
    cuisines.open('post', 'http://127.0.0.1:8080/restaurants/cuisine', true);
    cuisines.setRequestHeader("Content-Type", "application/json");
    //This function will be called when data returns from the web api    
    cuisines.onload = function () {
        //get all the movies records into our movie array        
        cuisine_array = JSON.parse(cuisines.responseText);
        document.getElementById("cuisineId").textContent = cuisine_array[0].cuisines;


    };

    var payload = { cuisineId: _id }
    //This command starts the calling of the movies web api    
    cuisines.send(JSON.stringify(payload));

}



//This function is to display the individual movies details
//whenever the user clicks on "See More"
function showRestaurantDetails(element) {
    var calcAvg = new XMLHttpRequest();
    calcAvg.open('POST', "http://127.0.0.1:8080/calcavg", true);
    calcAvg.setRequestHeader("Content-Type", "application/json");
  
    var item = element.getAttribute("item");
    currentIndex = item;
  
    document.getElementById("restaurant_name").textContent = restaurant_array[item].restaurant_name;
    document.getElementById("thumb").src = restaurant_array[item].thumb;
    getCuisines(restaurant_array[currentIndex].cuisineId);
    document.getElementById("average_rating").textContent = restaurant_array[item].average_rating;
    document.getElementById("address").textContent = restaurant_array[item].address;
    document.getElementById("menu").src = restaurant_array[item].menu;
    document.getElementById("food").src = restaurant_array[item].food;
    document.getElementById("r_about").textContent = restaurant_array[item].r_about;

    var restaurantID  = restaurant_array[item]._id 
    payload={"restaurantId": restaurantID, "id":restaurantID}  
    console.log(payload)
    calcAvg.onload = function () {
     empty_array=[]
     empty_array=JSON.parse(calcAvg.responseText);
     console.log(empty_array)
    }; 
    calcAvg.send(JSON.stringify(payload));

    
    
}





