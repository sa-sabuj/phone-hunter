const loadPhone = () => {
    fetch('https://openapi.programming-hero.com/api/phones')
        .then(res => res.json())
        .then(data => displayPhone(data))
}

const displayPhone = allPhones => {
    // console.log(allPhones)
    const phone = allPhones.data
    const phoneDetail = document.getElementById('phones');
    for (const phones of phone) {
        const p = document.createElement('p');
        p.innerText = `Brand: ${phones.brand}  Name: ${phones.phone_name}   Title: ${phones.slug}`
        console.log(phones)
        phoneDetail.appendChild(p)
    }
}