const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const dogContainer = document.getElementById("dog-container");

async function addNewDog()
{
    const promise = await fetch(DOG_URL);
    const processdResponse = await promise.json();
    const img = document.createElement("img");
    img.src = processdResponse.message;
    img.alt = "Cute Dog";
    dogContainer.appendChild(img);
}

document.getElementById("dog-btn").addEventListener("click", addNewDog);