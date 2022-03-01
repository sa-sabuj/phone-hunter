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
        div.innerHTML = `
        
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <h5 class="card-title">${phone.phone_name}</h5>
                </div>
                <button onclick="allPhoneDetail('${phone.slug}')" class="btn btn-outline-secondary" type="button"
            id="search-button">More Detail</button>
            </div>
            
        
    `
        searchResult.appendChild(div)
    });

}

const allPhoneDetail = allPhoneId => {
    console.log(allPhoneId)
    const url = `https://openapi.programming-hero.com/api/phone/${allPhoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data))
        console.log(url)
}


const displayPhoneDetail = phoneDetail => {
    console.log(phoneDetail)
    const singlePhoneDetail = document.getElementById('phone-details');
    console.log(singlePhoneDetail)
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `

    
                
    <div class="card-body w-50  justify-content-center">
    <img src="${phoneDetail.image}" class="mx-auto d-block" alt="...">
        <h5 class="card-title">${phoneDetail.brand}</h5>
        <h5 class="card-title">${phoneDetail.name}</h5>
        <h5 class="card-title">${phoneDetail.mainFeatures.displaySize}</h5>
        <h5 class="card-title">${phoneDetail.mainFeatures.memory}</h5>
        <h5 class="card-title">${phoneDetail.slug}</h5>
        <h5 class="card-title">${phoneDetail.releaseDate}</h5>
    </div>
    
    `;
    console.log(div)
    singlePhoneDetail.appendChild(div)

}