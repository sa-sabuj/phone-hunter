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
        div.classList.add('col', 'container', 'col-lg-4', 'col-sm-12', 'p-5', 'rounded')
        div.innerHTML = `
        
            <div class="card" style="width: 18rem;">
                <img src="${phone.image}" class="card-img-top mx-auto p-3" style="width: 200px; height: auto;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <button onclick="allPhoneDetail('${phone.slug}')" class="btn btn-outline-secondary" type="button"
            id="search-button">More Detail</button>
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
        .then(data => displayPhoneDetail(data.data))
        // console.log(url)
}


const displayPhoneDetail = phoneDetail => {
    console.log(phoneDetail)
    const singlePhoneDetail = document.getElementById('phone-details');
    console.log(singlePhoneDetail)
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `

    
                
    <div class="card-body w-50 bg-secondary text-white mx-auto rounded p-5 m-5">
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