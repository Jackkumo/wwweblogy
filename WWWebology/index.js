function hi() {
    console.log("Hello");
}

function welcome_button() {
    let breakfast_response = confirm("Is it Breakfast time?");
    if (breakfast_response) {
        alert("Have a good Breakfast!");
    } else {
        let lunch_response = confirm("Is it Lunch time?");
        if (lunch_response) {
            alert("Have a good Lunch!");
        } else {
            let dinner_response = confirm("Is it Dinner time?");
            if (dinner_response) {
                alert("Have a good Dinner!");
            } else {
                alert("Eat something!");
            }
        }
    }
}

function email_listerve() {
    prompt("Enter Email Below");
    alert("Thank you for joining our community! Time to Get Eating");
}