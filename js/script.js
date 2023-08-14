document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formulario__oferta");
    const botonGuardar = document.getElementById("guardar__oferta");
    const ofertaCreadaDiv = document.getElementById("oferta__creada");

    botonGuardar.addEventListener("click", function () {

        const nombreOferta = formulario.nombre__oferta.value;
        const nombreEmpleador = formulario.nombre__empleador.value;
        const salarioOferta = formulario.salario__oferta.value;
        const fechaInicio = formulario.fecha__inicio.value;
        const descripcionOferta = formulario.descripcion__oferta.value;
        const experiecniaOferta = formulario.experiencia__oferta.value;
        const beneficiosOferta = formulario.beneficios__oferta.value;

        // Guardar los datos en el almacenamiento local

        const datos = { nombreOferta, nombreEmpleador, salarioOferta, fechaInicio, descripcionOferta, experiecniaOferta, beneficiosOferta };
        localStorage.setItem("misDatos", JSON.stringify(datos))

        // Mostrar los datos guardados en el DIV correspondiente

        ofertaCreadaDiv.innerHTML = `
            <p>Nombre de la oferta: ${nombreOferta}</p>
            <p>Nombre del empleador: ${nombreEmpleador}</p>
            <p>Salario de la oferta: ${salarioOferta}</p>
            <p>Fecha de inicio: ${fechaInicio}</p>
            <p>Descripción de la oferta: ${descripcionOferta}</p>
            <p>Experiencia requerida: ${experiecniaOferta}</p>
            <p>Beneficios de la oferta: ${beneficiosOferta}</p>
        `
    });

    // Cargar los datos guardados al cargar la página

    const ofertaCreada = localStorage.getItem("misDatos");

    if (ofertaCreada) {

        const { nombreOferta, nombreEmpleador, salarioOferta, fechaInicio, descripcionOferta, experiecniaOferta, beneficiosOferta } = JSON.parse(ofertaCreada);

        ofertaCreadaDiv.innerHTML = `

        <div class="container-fluid">
            <div>
                <h1 class="text-center">Ofertas</h1>
                <hr>
                <div id="oferta__creada" class="table-responsive" style="margin:1rem 0.5rem; border-radius:5px;">
                    <table class="table">
                        <thead class="table-dark">
                            <th>Nombre <br> Oferta</th>
                            <th>Nombre <br> Empleador</th>
                            <th>Salario</th>
                            <th>Fecha <br> Inicio</th>
                            <th>Descripcion <br> Oferta</th>
                            <th>Experiencia <br> Requerida</th>
                            <th>Beneficios <br> Condiciones</th>
                            <th>Acciones</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${nombreOferta}</td>
                                <td>${nombreEmpleador}</td>
                                <td>${salarioOferta}</td>
                                <td>${fechaInicio}</td>
                                <td>${descripcionOferta}</td>
                                <td>${experiecniaOferta}</td>
                                <td>${beneficiosOferta}</td>
                                <td>
                                    <a href="postulante.html
                                    " class="btn btn-success">Ver postulados</a> <br>
                                    <a href="" class="btn btn-primary" style="margin-top: 2%; margin-bottom: 2%; width: 130px;">Editar</a> <br>
                                    <a href="" class="btn btn-danger" style="width: 130px;">Eliminar</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `;
    }

})