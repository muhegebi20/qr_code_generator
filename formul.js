let genBtn = document.querySelector('.genBtn');
let toappend = document.querySelector('.qrcodePlace');

genBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const input = document.getElementById("myInput"); 
    const inputValue = input.value;
    let qrdata = inputValue.trim();
    console.log(qrdata)
    fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${qrdata}&size=100x150`,{
    method: 'GET'
})
    

.then((data)=>{
    let url = data.url
    let img = document.createElement('img');
    img.src = url;
    img.className = "qrcode"
    toappend.appendChild(img);

})

})
