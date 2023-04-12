/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

window.onload = function () {
    onceLoaded();

};

function onceLoaded() {
    
    var data_enviar = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
};

  var data_enviar_mal = {
        "email": "algo@algo.in",
        "password": "cityslicka"
    };
    fetch('https://reqres.in/api/login', {
        method: 'POST',
        body: JSON.stringify(data_enviar),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
            .then((response) => response.json())
            .then((json) => console.log(json));

}
