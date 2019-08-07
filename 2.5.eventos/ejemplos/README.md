Ejemplo1

Escuchar un evento es decirle al navegador: vigila un determinado elemento de HTML, y cuando alguien haga click sobre él, ejecuta esta función que he preparado. Técnicamente, registramos en el navegador una función escuchadora o listener sobre un elemento para que ejecute una función manejadora de eventos o handler cuando el evento suceda.

- la función addEventListener la registramos sobre button que es un elemento de HTML (en este caso un botón)

- el primer argumento que le pasamos a addEventListener es una cadena con el nombre del evento, en este caso click

- el segundo argumento que le pasamos a addEventListener es una función, es decir, ponemos el nombre de la función pero no la ejecutamos (no ponemos paréntesis al final)

Aparte del evento click, podéis ver el listado completo de eventos que podemos escuchar en MDN. Aquí vamos a listar algunos de los más usados:

Eventos de ratón
- click: botón izquierdo del ratón
- mouseover: pasar el ratón sobre un elemento
- mouseout: sacar el ratón de un elemento

Eventos de teclado
- keydown: pulsar una tecla
- keyup: soltar una tecla

Sobre elementos
- focus: poner el foco (seleccionar) sobre un elemento, por ejemplo un input
- blur: quitar el foco de un elemento
- change: al cambiar el contenido de un input (hay que quitar el foco para que se considere un cambio) o de un select

Formularios
- submit: pulsar el botón submit del formulario
- reset: pulsar el botón reset del formulario

De la ventana
- resize: se ha cambiado el tamaño de la ventana
- scroll: se ha hecho scroll en la ventana o un 

Nota: La etiqueta input no tiene apertura y cierre, por lo tanto técnicamente no tiene contenido. Si para leer y modificar el contenido de una etiqueta con apertura y cierre utilizábamos innerHTML, en el caso de los inputs utilizaremos value.