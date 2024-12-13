let email = document.getElementById("email");
let password = document.getElementById("password");
let name = document.getElementById("name");
let surname = document.getElementById("surname");
let gün = document.getElementById("gün");
let ay = document.getElementById("ay");
let il = document.getElementById("il");
let cinsiyet = document.getElementById("cinsiyet");
let form = document.getElementById("signup-form");
let error = document.getElementById("error");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        let personData = {
            email: email.value,
            password: password.value,
            name: name.value,
            surname: surname.value,
            gün: gün.value,
            ay: ay.value,
            il: il.value,
            cinsiyet: cinsiyet.value
        }

        let { data } = await axios.get("https://655f2b37879575426b44b8f7.mockapi.io/person");
        let result = data.find((item) => item.email.toLowerCase() == email.value.toLowerCase());
        if (result) {
            error.innerHTML = `Bu Email artiq qeydiyyatdan kecib`
        } else {
            await axios.post("https://655f2b37879575426b44b8f7.mockapi.io/person", personData)
            error.innerHTML = `Qeydiyyat ugurla tamamlandi`
            error.style.color = "green"
            setTimeout(() => {
                error.innerHTML = " "
                document.location.href = `/login.html`
            }, 2000)

        }




    } catch (error) {
        console.log(error);
    }

    form.reset()
})