function randomName() {
    fetch('https://randomuser.me/api/?nat=us&randomapi')
    .then(response => response.json())
    .then(data => {
        const person = data.results[0];
        return firstName= person.name.first;
    }).then(function(){
        displayValue();
    });
}

function displayValue() {
    // var node = document.createElement("LI");
    // var textnode = document.createTextNode(`${firstName}`);
    // node.appendChild(textnode);
    // document.getElementById("firstname").appendChild(node);

    var name = document.getElementById("name");

    name.innerHTML = ${person.firstName};
}

// document.getElementsByClassName("myBtn").addEventListener("click",getRandom);

// function getRandom (){
// fetch('https://randomuser.me/api/?results=100')
// .then(resolve => resolve.json())
// .then(data => {
//         let user = data.results;


//         user.forEach(function (user) {

        
//     const name = document.getElementById("name");
//     const gender = document.getElementById('gender');
//     const email = document.getElementById('email');
//     const phone = document.getElementById('phone');
//     const location = document.getElementById('country');
//     const image =document.getElementById('image');

//     name.innerText = ${user.name.title} ${user.name.first} ${user.name.last};
//     gender.innerText = ${user.gender};
//     email.innerText =  ${user.email};
//     phone.innerText = ${user.phone}; 
//     location.innerText = ${user.location.country};
//     image.setAttribute(scr, ${user.picture.large});

//         });

//     });

}


getRandom();
