let form = document.getElementById("login-form");
let email = document.getElementById("login-email");
let password = document.getElementById("password");
let icon = document.getElementById("visibleIcon");
let error = document.getElementById("error")

form.addEventListener("submit", async (e) => {
    e.preventDefault();



    if (!email.value.trim() || !password.value.trim()) {
        alert("Zehmet olmasa melumatlari tam doldurun");
        return;
    }
    try {
        let { data } = await axios.get("https://655f2b37879575426b44b8f7.mockapi.io/person");
        let result = data.find((item) => item.email.toLowerCase() == email.value.toLowerCase());
        if (result) {
            if (result.password == password.value) {
                document.location.href = `/assets/pages/welcome.html?userId=${result.id}`
            } else {
                error.innerHTML = `Daxil etdiyiniz Password duzgun deyil`
                error.style.color = "red"
            }

        } else {
            error.innerHTML = `Daxil etdiyiniz Email movcut deyil`
            error.style.color = "red"
        }


    } catch (error) {
        console.log(error);
    }

})

icon.addEventListener("click", visiblePass)

let state = false;
function visiblePass() {
    if (state) {
        password.setAttribute("type", "password")
    } else {
        password.setAttribute("type", "text")
    }
    state = !state
}