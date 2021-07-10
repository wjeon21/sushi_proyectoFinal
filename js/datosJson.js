let tagArticle = document.querySelector("#info .contenido1 .texto1");

let pUrl = "https://my-json-server.typicode.com/wjeon21/myFakeApiSushi/descripcion";

//fetch('http://127.0.0.1:5500/datos/datosMenu.json',
fetch (pUrl,
      {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          } 
      }
) 
 .then(response => response.json()) 
 .then(data => { 

    
    let descripcion = data;
    /*console.log(data.descripcion)*/
    
    descripcion.forEach(element => {
        let tagTexto = document.createElement("p");

        tagTexto.innerHTML = element.texto;

        tagArticle.appendChild(tagTexto);
    });      
    }     
     ); 
