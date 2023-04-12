$(window).on("load", function () {
    onceLoaded();
});

function onceLoaded() {

  var data_enviar = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    };
        
    $.ajax({
        // la URL para la petición
        url: 'https://reqres.in/api/register',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)


        // especifica si será una petición POST o GET
        type: 'POST',

        // el tipo de información que se espera de respuesta
        dataType: 'json',
        data: data_enviar
        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
    }).done(function (data) {
        console.log("Ha llegado la respuesta del servidor: " + JSON.stringify(data));



    })
            // Code to run if the request fails; the raw request and
            // status codes are passed to the function
            .fail(function (xhr, status, errorThrown) {
                alert("Sorry, there was a problem!");
                console.log("Error: " + errorThrown);
                console.log("Status: " + status);
                console.dir(xhr);
            })
            // Code to run regardless of success or failure;
            .always(function (xhr, status) {
                console.log("The request is complete!");
            });
            
           
}

