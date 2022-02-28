const loadPhone = () => {
    fetch('https://openapi.programming-hero.com/api/phones')
        .then(res => res.json())
        .then(data => displayPhone(data))
}

const displayPhone = allPhones => {
    console.log(allPhones)
    const phone = allPhones.data
    const phoneDetail = document.getElementById('phones');
    for (const phones of phone) {
        const div = document.createElement('div')
        div.classList.add('add-border')
        div.innerHTML = `
        <h2>Brand: ${phones.brand}</h2>
        <h3>Brand:Name: ${phones.phone_name}</h3>
        <p>Title: ${phones.slug}</p>
        <img width = "100px" src="${phones.image}">
        <br>
        <button>Details</button>
        `
        // const h3 = document.createElement('h3');
        // h3.innerText = `Brand: ${phones.brand}  Name: ${phones.phone_name}   Title: ${phones.slug}`
        // console.log(phones)
        // div.appendChild(h3)
        phoneDetail.appendChild(div)
    }
}