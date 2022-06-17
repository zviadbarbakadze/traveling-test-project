fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((completedata)=>{
    data1="";
    completedata.map((values)=>{
        data1+=`<div class="card">
        <h2>${values.title}</h2>
        <img src=${values.image} alt="img">
        <p class="descripton">${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    })
    document.getElementById("cards").innerHTML=data1;
})