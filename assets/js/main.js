let popup = document.getElementById("popup")

function openPopup() {
    popup.classList.add("open-popup")
    console.log("open popup")
    console.log(document.getElementById("email").value)
}

function closePopup() {
    popup.classList.remove("open-popup")
    console.log("close popup")
}

