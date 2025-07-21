let input = document.querySelector(".inp")
let btn = document.querySelector(".btn")
let table = document.querySelector("table")

btn.addEventListener("click", () => {
table.innerHTML = ""
  if (input.value) {
    fetch(`https://api.nationalize.io/?name=${input.value}`)
        .then(javob => javob.json())
        .then(malumot => {

            malumot.country.map((davlat, id) => {
                let tr = document.createElement("tr")
                tr.innerHTML = ` <td>${id + 1}</td>
        <td><img src="https://flagcdn.com/16x12/${davlat.country_id.toLowerCase()}.png" alt="SY flag"> ${davlat.country_id}</td>
        <td>${davlat.probability.toFixed(3)}%</td>`
                table.append(tr)
            }
            )




        })
  } 
})

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    btn.click();
  }
});