var arr = [];

function save() {
    var a = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        image: document.getElementById("image").value,
    };

    arr.push(a);
    console.log(a);
}

function them() {
   

    var men = document.getElementById("men");

    men.innerHTML = ''; 
    for (let i = 0; i < arr.length; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="' + arr[i].image + '" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + arr[i].name + '</h5>';
        demo += '<p class="card-text">' + arr[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';

        var cardDiv = document.createElement("div");
        cardDiv.className = "col-3";
        cardDiv.innerHTML = demo;

        men.appendChild(cardDiv);
    }
}
function reset() {
    arr = []; // Clear the array
    document.getElementById("name").value = ""; 
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
    document.getElementById("men").innerHTML = ""; 
}



function oder() {
}