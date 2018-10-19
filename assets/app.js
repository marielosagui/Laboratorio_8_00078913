
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont=1;
var bitacoras=[];
var formulario=document.getElementById("bitacora");
console.log(formulario);
/**Almacena el elemento que tiene el id especificado con el valor especifico */

formulario.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    let bitacora={
        cant:cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});
/**Prevent Default cancela el evento de ser posible es decir que action por defecto que pertence al
 * evento no se ejecutara */
/**formulario[x] contiene los input segun el orden indicado en el formulario */
const crearElemento=(bitacora, tbody)=>{
    let tr= document.createElement("tr");
    console.log('tr');
    console.log(tr);
    Object.values(bitacora).forEach(item=>{
        let td=document.createElement("td");
        console.log('td');
        console.log(td);
        let content= document.createTextNode(item);
        console.log('content');
        console.log(content)
        td.appendChild(content);
        tr.appendChild(td);
        tr.setAttribute("class","click");
    });
    tbody.appendChild(tr);
    console.log('tbody');
    console.log(tbody);
}
/**tr y td contiene la coleccion de las etiquetas creadas; una tabla */
/**content contiene un nodo de texto */
/**tbody tendra una tabla con todos los elementos  ya agregados */
/* esta funcion primero crea la fila  y luego va creando cada celda 
a lo cual tambien va creando un nodo de texto al cual se lo 
agrega a la celday a la fila esto dentro de un for each; al terminar la iteracion se agrega la fila como un hijo a tbdoy*/
const eliminar= (tbody)=>{
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
    console.log(tbody);
}
/*.firstChild devuelve el primero hijo de un nodo especificando como un objeto node*/
/**despues del while el elemento tbody quedara vacio */
const agregar=()=>{
    var eventtr= document.querySelectorAll(".click");
    eventtr.forEach((item,index) => {
        item.addEventListener("click",()=>{
            document.querySelector("#fecha").value=item.childNodes[0].textContent;
            document.querySelector("#descp").values=item.childNodes[1].textContent;
            document.querySelector("#cant").value=item.childNodes[2].textContent;
        });
    })
}
/**al ejecutar item.childNodes obtenemos una coleccion de todos los nodos hijos
 * y tambien obtenemosel texto sin formato
 */

const mostrar=()=>{
    if(document.querySelector(".tabla-btc tbody").childElementCount> 0){
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item=>{
        crearElemento(item,document.querySelector(".tabla-btc tbody"));
    });
    agregar();
}

/**cuando se relaliza un querySelector obtenemos el primer elemento que matchea elselector especificado */
/**ChildElementCOunt devuelve la cantidad de hijos que tiene el elemento seleccionado */
/* al ejecutar la funcion agregar(); al darle click a un elemento de la tabla , copia todo al otro en otras palabra ; a los campos del formulario*/
/*se mostrara la tabla con la fila una vez dado submit*/ 

/*VALIDACIONES*/
var first-field = document.getElementById("first-field");

first-field.oninput = () => {
   var valor = first-field.value;
   if(valor == "" || valor == null){
     first-field.style.borderColor = "red";

   }else{
     first-field.style.borderColor = "green";

   }
} 