const olHtml = document.getElementById("olHtml"),
      apiUrl = "https://jsonplaceholder.typicode.com/users",
    fragment = document.createDocumentFragment();



fetch(apiUrl)
.then(respuesta => respuesta.ok ? respuesta.json() : Promise.reject(respuesta))
.then(json => {
    json.forEach(element => {
        const $li = document.createElement("li")
        $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
        fragment.appendChild($li);
        
    });
    olHtml.appendChild(fragment)
   
})
.catch((error) => {
    let message = error.statusText || "Ocurrió un error";
    olHtml.innerHTML = `Error ${error.status}: ${message}`
})
.finally(() => console.log('Holap')) ;