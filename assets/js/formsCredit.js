//const { snakeCase } = require("typeorm/util/StringUtils.js");

document.getElementById("creditForm").addEventListener("submit", async function 
    (event) { 
        event.preventDefault(); // It doesn't let page be rechaged

const customerName = document.getElementById("validationCustomName").value;
const customerLastname = document.getElementById("validationCustomLastName").value;
const email = document.getElementById("validationCustomEmail").value;
let cityId = document.getElementById("validationCustomCity").value;
let documentTypeId = document.getElementById("validationCustomDocumentType").value;
const documentNumber = document.getElementById("validationCustomDocumentNumber").value;
const telephoneNumber = document.getElementById("validationCustomTelephone").value; 

const cityArray = ["", "Arauca", "Armenia", "Barrancabermeja", "Barranquilla", "Bello", "Bogotá", "Bucaramanga",
    "Buenaventura", "Cali", "Cartagena", "Cartago", "Caucasia", "Ciénaga", "Cúcuta", "Dosquebradas","",
    "Duitama", "Envigado", "Facatativá", "Florencia", "Floridablanca","", "", "", "", "Fusagasuga", "Girardot",
    "Girón", "Ibagué", "Ipiales", "Itagüí", "Manizales", "Maicao", "Medellín", "Mitú", "Mocoa",
    "Montería", "Neiva", "Ocaña", "Palmira", "Pamplona", "Pasto", "Pereira", "Pitalito", "Popayán",
    "Puerto Asís", "Quibdó", "Riohacha", "Sabanalarga", "Sabaneta", "San Andrés",
    "San José del Guaviare", "Santa Marta", "Sincelejo", "Soacha", "Sogamoso", "Soledad", "Tuluá",
    "Tumaco", "Tunja", "Turbo", "Valledupar", "Villavicencio", "Yopal", "Zipaquirá" 
 ]

 const documentTypeArray = ["", "Cédula de ciudadanía", "Pasaporte", "Cédula de extranjería"];

 const documentTypeIndex = documentTypeArray.indexOf(documentTypeId);

 const cityIndex = cityArray.indexOf(cityId);

const customer = {
    customerName,
    customerLastname,
    email,
    cityId: cityIndex,
    documentTypeId: documentTypeIndex,
    documentNumber,
    telephoneNumber
};
try{
    const isLocalhost = window.location.hostname === "localhost";
    const backendUrl = isLocalhost
        ? "https://localhost:7201" //Local enviroment
        : "https://webserviceqdback.onrender.com" //Production enviroment
    const response = await fetch(`${backendUrl}/api/customer/post`, 
        {method: "POST",
         headers: {"Content-Type": "application/json"}, 
         body: JSON.stringify(customer)
        });
        const text = await response.text(); // Get response text
        console.log ("Server Response:", text); 
        const result = text ? JSON.parse(text) : {}; //To parse only if response get something
        const elementMessage = document.getElementById("mensaje");

        if (elementMessage){
            elementMessage.innerText = response.ok ? (result.message || "Cliente registrado exitosamente"):
            "Error al registrar cliente";
        }
        else{
            console.warn("Elemento con ID 'mensaje' no encontrado");
        }
    }
        catch(error){
            console.error("Error:", error);
            const elementMessage = document.getElementById("mensaje");
            if(elementMessage){
                elementMessage.innerText = "Error de conexión";
            }
        }
    
}
);



