const searchPhone = () => {
    const searchFild = document.getElementById('search-fild');
    const searchText = searchFild.value;
    // console.log(searchText)
    searchFild.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))

}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(phone => {
        // console.log(phone)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `<div onclick="allPhoneDetail('${phone.slug}')"  class="col">
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <h5 class="card-title">${phone.phone_name}</h5>
                </div>
            </div>
        </div>
    `
        searchResult.appendChild(div)
    });

}

const allPhoneDetail = allPhoneId => {
    // console.log(allPhoneId)
    const url = `https://openapi.programming-hero.com/api/phone/${allPhoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data.mainFeatures))
}

const displayPhoneDetail = phoneDetail => {
    // console.log(phoneDetail)
    const singlePhoneDetail = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `

    <img src="${phoneDetail.image}" class="card-img-top" alt="...">
                <div class="card-body">
    <div class="card-body">
    <h5 class="card-title">${phoneDetail.brand}</h5>
    <h5 class="card-title">${phoneDetail.phone_name}</h5>
    </div>
    
    `;
    singlePhoneDetail.appendChild(div)

}