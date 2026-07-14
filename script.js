let images = [
    "images/hero1.jpg",
    "images/hero2.jpg",
];

let index = 0;
let slider = document.getElementById("slider");

if(slider){
    setInterval(function(){
        index++;

        if(index >= images.length){
            index = 0;
        }

        slider.src = images[index];
    },3000);
}
let dreamButton = document.getElementById("dreamButton");
let dreamText = document.getElementById("dreamText");

let dreams = [
    "Flying dreams may represent freedom, confidence and new opportunities.",
    "Water dreams are often connected with emotions and personal growth.",
    "Animal dreams may represent instincts, feelings or hidden thoughts.",
    "Falling dreams can represent uncertainty or a major change in life.",
    "Fantasy dreams show creativity, imagination and new ideas."
];

if(dreamButton){
    dreamButton.addEventListener("click", function(){

        let randomDream = Math.floor(Math.random() * dreams.length);
        dreamText.innerHTML = dreams[randomDream];
    });
}

let contactForm = document.getElementById("contactForm");

if(contactForm){
    contactForm.addEventListener("submit", function(event){

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if(name == "" || email == "" || message == ""){
            alert("Please fill all the fields.");
            event.preventDefault();
        }
        else{
            alert("Your message has been sent successfully.");
        }
    });
}