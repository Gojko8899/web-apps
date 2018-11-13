


var request = new XMLHttpRequest();
request.open('GET', "./file.xml");


request.onload = function () {
    const miniDom = request.responseXML;

    let city = miniDom.querySelector('city').textContent;
    let countryname = miniDom.querySelector('countryname').textContent;
    let body = document.querySelector('body');

    let paragraph = document.createElement('p');
    paragraph.textContent = city;
    body.appendChild(paragraph);
    let paragraph1 = document.createElement('p');
    paragraph1.textContent = countryname;
    body.appendChild(paragraph1);



};


request.send();

