Fetch and Axios

are used for HTTP requests -> Rest API + SOAP APIs;


GET POST PUT DELETE PATCH


Fetch //

this js built in function for making HTTP requests
it returns promise untill we get the Response
response will return and we have manually convert using.json();

fetch(URL, {
    method: "POST",
    body: JSON.stringify(payload),
    mode: cors || no - cors,
    headers: {
       "Content-Type" : "application/json" 
    }
})


Axios //

Thirdparty library

This will Json Parse the response automatically

interceptors =>
    request payload and response 


ex: req pay -> encryption  & res -> decrypt 