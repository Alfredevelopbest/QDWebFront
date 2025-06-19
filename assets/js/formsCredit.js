//const { snakeCase } = require("typeorm/util/StringUtils.js");

//const bootstrap = require("bootstrap");

document.getElementById("creditForm").addEventListener("submit", async function 
    (event) { 
        event.preventDefault(); // It doesn't let page rechage

document.getElementById("cityError").innerText = "";
document.getElementById("documentTypeError").innerText = "";

const customerName = document.getElementById("validationCustomName").value.trim();
const customerLastname = document.getElementById("validationCustomLastName").value.trim();
const email = document.getElementById("validationCustomEmail").value.trim();
let cityId = document.getElementById("validationCustomCity").value;
let documentTypeId = document.getElementById("validationCustomDocumentType").value;
const documentNumber = document.getElementById("validationCustomDocumentNumber").value.trim();
const telephoneNumber = document.getElementById("validationCustomTelephone").value.trim(); 

//Validation for select

let valid = true;

if (cityId === ""){
    document.getElementById("cityError").innerText = "*Selecciona tu ciudad !!";
    valid = false;
}

if(documentTypeId === ""){
    document.getElementById("documentTypeError").innerText = "*Selecciona tu tipo de documento !!";
    valid = false;
}

if(!valid){
    return;
}

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
        
        //Validation for modal activation if server response is Ok
        if(response.ok){
            document.getElementById("creditForm").reset();
            const modalValidForm = new bootstrap.Modal(document.getElementById('staticBackdrop'));
            modalValidForm.show(); //Modal is shown
            document.getElementById('staticBackdrop').addEventListener('hidden.bs.modal',function(){
                window.location.href = "seccionCamas.html";
            });
        }

        else{
            alert("Ha ocurrido un error en el envío del formulario. Intenta nuevamente");
        }


        /* const elementMessage = document.getElementById("mensaje");

        if (elementMessage){
            elementMessage.innerText = response.ok ? (result.message || "Cliente registrado exitosamente"):
            "Error al registrar cliente";
        }
        else{
            //console.warn("Elemento con ID 'mensaje' no encontrado");
        }*/
    }
        catch(error){
            console.error("Error al enviar el formulario.", error);
            const elementMessage = document.getElementById("mensaje");
            alert("Ha ocurrido un error de red. Intenta mas tarde.");
        }
    
}
);



