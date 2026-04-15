function startBanner() {
    let now = new Date();
    let dateTime = now.toLocaleString('en-OM'); 
    let wepName = "Sakan Store";
    let message = "Welcome to " + wepName + " website! Today is " + dateTime;

    let bannerElement = document.getElementById("welcomeBanner");
    if (bannerElement) {
        bannerElement.innerText = message;
    }
}

function Service(category, item, price) {
    this.category = category; 
    this.item = item;        
    this.price = price;      
}

let storeServices = [
    new Service("Food", "Student Meal Plan", 2.500),
    new Service("Medicine", "First Aid Kit", 5.000),
    new Service("Books", "Engineering Textbook", 15.000),
    new Service("Food", "Coffee & Snacks", 1.200),
    new Service("Books", "Notebook Set", 0.800)
];

function displayServices() {
    let tableBody = document.getElementById("servicesRows");
    if (tableBody) {
        tableBody.innerHTML = ""; 
        storeServices.forEach(function(s) {
            let row = `<tr>
                <td>${s.category}</td>
                <td>${s.item}</td>
                <td>${s.price.toLocaleString('en-OM', {minimumFractionDigits: 3, maximumFractionDigits: 3})} OMR</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }
}

function filterTable() {
    let input = document.getElementById("searchInput");
    if (!input) return;
    
    let filter = input.value.toLowerCase();
    let tableBody = document.getElementById("servicesRows");
    if (!tableBody) return;
    
    let rows = tableBody.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let tdName = rows[i].getElementsByTagName("td")[1];
        if (tdName) {
            let txtValue = tdName.textContent || tdName.innerText;
            rows[i].style.display = (txtValue.toLowerCase().indexOf(filter) > -1) ? "" : "none";
        }
    }
}

function calc() {

    let price = document.getElementById("price").value;
    let months = document.getElementById("months").value;
    let code = document.getElementById("code").value;

    if (price == "" || months == "") {
        alert("fill all fields");
        return;
    }

    let total = price * months;

    // if/else 
    if (code == "student") {
        total = total - (total * 0.1);
    } else {
        total = total;
    }

    document.getElementById("result").innerHTML = total + " OMR";
}

//  Questionnaire 

function check() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let room = document.getElementById("room").value;
    let rating = document.getElementById("rating").value;
    let notes = document.getElementById("notes").value;

    if (name == "" || email == "" || room == "" || rating == "" || notes == "") {
        alert("fill all");
        return;
    }

    if (!email.includes("@")) {
        alert("email wrong");
        return;
    }

    document.getElementById("msg").innerHTML = "done";
}

// Fun Page 
let number = Math.floor(Math.random() * 10) + 1;

function guess() {

    let g = document.getElementById("guess").value;

    if (parseInt(g) === number) {
        document.getElementById("result").innerHTML = "Correct ";
    } else {
        document.getElementById("result").innerHTML = "Wrong  Try again";
    }
}


window.onload = function() {
    startBanner();      
    displayServices();
    
    let searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("keyup", filterTable);
    }
};