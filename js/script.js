// Interactive Elements - Accordion
$(document).ready(function(){
$(".accordion-btn").click(function(){
$(this).next(".accordion-panel").slideToggle();
});
// Lightbox
$(".gallery-img").click(function(){
$("#lightbox-img").attr("src", $(this).attr("src"));
$("#lightbox").fadeIn();
});
$(".close, #lightbox").click(function(){ $("#lightbox").fadeOut(); });
});

// Dynamic Search
function filterProducts(){
let input = document.getElementById('searchInput').value.toLowerCase();
let boxes = document.querySelectorAll('.gallery-img, .product-card');
boxes.forEach(box => {
let text = box.alt ? box.alt.toLowerCase() : box.textContent.toLowerCase();
box.style.display = text.includes(input) ? '' : 'none';
});
}

// Enquiry Validation + AJAX
function validateEnquiry(){
let name = document.getElementById('qname').value.trim();
let email = document.getElementById('qemail').value.trim();
let error = document.getElementById('qerror');
if(name.length < 3){ error.textContent = "Name must be at least 3 characters"; return false; }
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ error.textContent = "Enter valid email"; return false; }
error.textContent = "";
document.getElementById('qsuccess').style.display = 'block';
return false;
}
// Contact Validation + Email
function validateContact(){
let phone = document.getElementById('cphone').value.trim();
let error = document.getElementById('cerror');
if(!/^0[6-8][0-9]{8}$/.test(phone)){ error.textContent = "Enter valid SA phone 082..."; return false; }
error.textContent = "";
alert("Message sent to Vintage Thread!");
return true;
}