const olHtml = document.getElementById("olHtml"),
      apiUrl = "https://jsonplaceholder.typicode.com/userss",
    fragment = document.createDocumentFragment();



    async function getData() {
        try {
            let respuesta = await fetch(apiUrl),
            json = await respuesta.json();
            
            console.log(respuesta)
            //Capturar el error.
            if(!respuesta.ok) throw {status: respuesta.status, statusText :respuesta.statusText};

            //Recorrer el objeto entregado en JSON
            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                fragment.appendChild($li)
            });
            olHtml.appendChild(fragment)
        } catch (error) {
            console.log(error)
            let message = error.statusText  || "Ocurrió un error";
            olHtml.innerHTML = `Error ${error.status}: ${message}`
            
        }
    }

    getData()