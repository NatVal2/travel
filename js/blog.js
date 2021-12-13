window.onload =()=>{
    randomUserGenerator ()
}



const randomUserGenerator = () => {
    fetch (`https://randomuser.me/api`)
    .then ((response) => {
        return response.json ()
    }) .then ((data) => {
        showRandomUserData(data);
    })
}

showRandomUserData = (randomUser) => {
    let image = document.getElementsByClassName("image");
    image.src = `${randomUser.results[0].picture.large}`

    document.getElementById(`name`).innerText =
            `${randomUser.results[0].name.title}
            ${randomUser.results[0].name.first}
            ${randomUser.results[0].name.last}`

    document.getElementById(`gender`).innerText = 
    `${randomUser.results[0].gender}`

    document.getElementById(`email`).innerText = 
    `${randomUser.results[0].email}`

    document.getElementById(`country`).innerText = 
    `${randomUser.results[0].location.country}`

    document.getElementById(`phone`).innerText = 
    `${randomUser.results[0].phone}`

   
}
randomUserGenerator ();