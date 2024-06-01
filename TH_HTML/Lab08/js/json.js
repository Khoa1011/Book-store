document.addEventListener('DOMContentLoaded',function() {
    var userData={
        "name":"Nguyen Diem Huynh",
        "age":20,
        "email":"behuynhne1310@gmail.com",
        "address":{
            "city":"Tay Ninh",
            "state":"NY",
            "zipcode":"100010"
        }
};
function displayUserInfo(data){
    var userInfoElement=document.getElementById('userInfo');
    userInfoElement.innerHTML=`
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Age:</strong> ${data.age}</p>
    <p><strong>Emali:</strong> ${data.email}</p>
    <p><strong>Address:</strong> ${data.address.city} ${data.address.state} ${data.address.zipcode}</p>
    `;
}
displayUserInfo(userData);
}
);