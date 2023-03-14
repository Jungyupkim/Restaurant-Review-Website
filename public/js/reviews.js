function fetchReviews() {
    var request = new XMLHttpRequest();

    request.open('GET', review_url, true);

    //This command starts the calling of the comments api
    request.onload = function () {
        //get all the comments records into our comments array
        review_array = JSON.parse(request.responseText);
 
    };

    request.send();
}
//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showRestaurantReviews(element) {
    document.getElementById("emptyReview").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + restaurant_array[item].restaurant_name;
    document.getElementById("reviewBody").textContent = "";

    for (var i = 0; i < review_array.length; i++) {
        if (review_array[i].restaurant_name === restaurant_array[item].restaurant_name) {
            document.getElementById("emptyReview").innerHTML = "";
            selectedRestaurantId = restaurant_array[item]._id;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + review_array[i].review + "</p>               \
                                    <small>by " + review_array[i].username + " @ " + review_array[i].datePosted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("reviewBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < review_array[i].rating; j++) {
                
                star += "<img src='images/popcorn.png' style='width:50px' />";
            }
            star += "<i class='far fa-trash-alt fa-2x edit'  item='" + i + "' onClick='deleteReview(this)' ></i>";
            star += "<i class='far fa-edit fa-2x edit'  item='" + i + "'data-dismiss=('modal') onClick='editReview(this)' ></i>";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}

function newReview() {
    //Initialise each HTML input elements in the modal window with default value.
    if (sessionStorage.length !== 0){
        rating = 0;
        document.getElementById("userReviews").value = "";
        $('#newReviewModal').modal('show');
    }
    else{
        alert("please login before adding new reivew :)")
    }
    
}

// Submit or send the new comment to the server to be added.
function addReview() {
    if (sessionStorage.length != 0) {
      


        var review = new Object();
        review.userId = sessionStorage.getItem("userId");
        review.restaurantId = restaurant_array[currentIndex]._id; // Movie ID is required by server to create new comment 
        review.restaurantId = restaurant_array[currentIndex]._id; // Movie ID is required by server to create new comment 
        review.username = sessionStorage.getItem("token"); // Value from HTML input text
        review.restaurant_name = restaurant_array[currentIndex].restaurant_name; // Movie title is required by server to create new comment
        review.rating = rating;
        review.review = document.getElementById("userReviews").value; // Value from HTML input text
        review.datePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;


        var postReview = new XMLHttpRequest(); // new HttpRequest instance to send comment

        postReview.open("POST", review_url, true); //Use the HTTP POST method to send data to server

        postReview.setRequestHeader("Content-Type", "application/json");
        postReview.onload = function () {
            alert("new comment added");
            fetchReviews(); // fetch all comments again so that the web page can have updated comments.     
        };
        // Convert the data in Comment object to JSON format before sending to the server.
        postReview.send(JSON.stringify(review));
    }
    else {
        alert("Please login before writing reviews :D")
    }
}

//This function allows the user to mouse hover the black and white popcorn
//so that it will turn to a colored version when hovered
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var popcorns = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let popcorn of popcorns) {
        popcorn.setAttribute("src", popcornBWImage);
    }
    changePopcornImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the popcorn image.
function changePopcornImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", popcornImage);
            rating = 5;
            break;
    }
}
//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change the username, rating or movie review
function editReview(element) {
    if (sessionStorage.length != 0) {
        
        var item = element.getAttribute("item");

        currentIndex = item;
        if (sessionStorage.getItem("token") == review_array[item].username) {
            $('#editReviewModal').modal('show');


            document.getElementById("edituserReviews").value = review_array[item].review;
            console.log(review_array[item].rating);
            displayColorPopcorn('editpop', review_array[item].rating);
        }
        else {
            alert("You can only edit your own review!")
            $('#editReviewModal').modal('hide');
        }
    }
    else {
        alert("PLease login first before editing the review")
    }
}
//This function displayS the correct number of colored popcorn
//based on the movie rating that is given in the user comment
function displayColorPopcorn(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", popcornBWImage);
    }
    changePopcornImage(num, classTarget);
}
//This function sends the Comment data to the server for updating
function updateReview() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
        var edit_review_url = review_url + "/" + review_array[currentIndex]._id;
        var updateReview = new XMLHttpRequest(); // new HttpRequest instance to send request to server
        updateReview.open("PUT", edit_review_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateReview.setRequestHeader("Content-Type", "application/json");
        //review_array[currentIndex].restaurantId = restaurant_array[currentIndex]._id;
        review_array[currentIndex].username = sessionStorage.getItem("token")
        review_array[currentIndex].review = document.getElementById("edituserReviews").value;
        review_array[currentIndex].rating = rating;
        
        updateReview.onload = function () {
            fetchReviews();
        };
        
        updateReview.send(JSON.stringify(review_array[currentIndex]));
    }
}
//This function deletes the selected comment in a specific movie
function deleteReview(element) {
    if (sessionStorage.length != 0) {
        var item = element.getAttribute("item"); //get the current item
        if (sessionStorage.getItem("token") == review_array[item].username) {


            var response = confirm("Are you sure you want to delete this comment?");

            if (response == true) {

                var delete_review_url = review_url + "/" + review_array[item]._id;
                var eraseReview = new XMLHttpRequest();
                eraseReview.open("DELETE", delete_review_url, true);
                eraseReview.onload = function () {
                    fetchReviews();
                };
                eraseReview.send();
            }
        }
        else{
            alert("You can only delete your own review")
        }
    }
    else{
        alert("Please login first before deleting the reviews")
    }
}
