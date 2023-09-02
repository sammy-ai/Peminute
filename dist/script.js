const scriptURL = 'https://script.google.com/macros/s/AKfycbyGEEv7ZEAfHVDuexx8itDjgkaVXJoPnPMQOzf-Mc9aI2z1hhf1mtYLbYRgoHX8FGHp/exec';
const form = document.forms['dataform'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(() => {
            alert('Thank you for your submission');
            form.reset();
        })
        .catch(() => {
            alert('We are experiencing a technical problem. Please try again later.');
        });
});

function validation()
{
    var form = document.getElementById("dataform");
    var email = document.getElementById("Email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern))
    {
        text.innerHTML = "Your Email is Valid.";
        text.style.color = "#00fe00";
    }
    else
    {
        text.innerHTML = "Please provide a valid email address.";
        text.style.color = "#ff0000";
    }

    if (email == "")
    {
        form.classList.remove("text-green-500");
        form.classList.remove("text-red-500");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}

//SHARE BUTTONS
// WHATSAPP
function shareOnWhatsApp() {
  // Replace 'YOUR_MESSAGE' with the message you want to accompany the link.
  // For example, "Check out this cool website!"
  const message = 'Join me and other content creators on Peminute. Monetize your digital content 😀';
  const url = encodeURIComponent(window.location.href);
  const whatsappUrl = `https://api.whatsapp.com/send?text=${message} ${url}`;

  // Open WhatsApp in a new tab with the share link
  window.open(whatsappUrl, '_blank');
}


// TWITTER
function shareOnTwitter() {
  // Replace 'YOUR_MESSAGE' with the message you want to accompany the link.
  // For example, "Check out this cool website!"
  const message = 'Join me and other content creators on Peminute. Monetize your digital content 😀';
  const url = encodeURIComponent(window.location.href);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${message} ${url}`;

  // Open Twitter in a new tab with the tweet pre-filled
  window.open(twitterUrl, '_blank');
}

// ADD EVENT LISTENERS
// Add event listener to the WhatsApp Share Button
document.getElementById("whatsapp").addEventListener("click", shareOnWhatsApp);
// Add event listener to the Twitter Share Button
document.getElementById("twitter").addEventListener("click", shareOnTwitter);




/*
//FACEBOOK
// Function to share the current page's link on Facebook
function shareOnFacebook() {
  // Replace 'YOUR_MESSAGE' with the message you want to accompany the link.
  // For example, "Check out this cool website!"
  const message = 'YOUR_MESSAGE';
  const url = encodeURIComponent(window.location.href);
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?quote=${message}&u=${url}`;

  // Open Facebook in a new tab with the post pre-filled
  window.open(facebookUrl, '_blank');
}

// Add event listener to the Facebook Share Button
document.getElementById("facebookShareBtn").addEventListener("click", shareOnFacebook);
*/

