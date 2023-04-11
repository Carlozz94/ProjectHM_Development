$(document).ready(function(){
    tablaPersonas = $("#tablaProductos").DataTable({
       "columnDefs":[{
        "targets": -1,
        "data":null,
        "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-success btnEditar'>Editar</button><button class='btn btn-danger btnBorrar'>Borrar</button></div></div>"  
       }],
        
        //Para cambiar el lenguaje a español
    "language": {
            "lengthMenu": "Mostrar  _MENU_  registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast":"Último",
                "sNext":"Siguiente",
                "sPrevious": "Anterior"
             },
             "sProcessing":"Procesando...",
        }
    });

    $(".btnEditar").css("background-color", "#38b972");

    
$("#btnNuevo").click(function(){
    $("#formProductos").trigger("reset");
    $(".modal-header").css("background-color", "#28a745");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Nueva Producto");            
    $("#modalCRUD").modal("show");        
    id=null;
    opcion = 1; //alta
});    
    
var fila; //capturar la fila para editar o borrar el registro
    
//botón EDITAR    
$(document).on("click", ".btnEditar", function(){
    fila = $(this).closest("tr");
    nombre = fila.find(fila.find('td:eq(0)').text());
    precio = parseInt(fila.find('td:eq(0)').text());
    descripcion = fila.find('td:eq(2)').text();
    
    $("#nombre").val(nombre);
    $("#descripcion").val(descripcion);
    opcion = 2; //editar

    
    
    $(".modal-header").css("background-color", "#38b972");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Editar Producto");            
    $("#modalCRUD").modal("show");  
    
});

//botón BORRAR
$(document).on("click", ".btnBorrar", function(){    
    fila = $(this);
    id = parseInt($(this).closest("tr").find('td:eq(0)').text());
    opcion = 3 //borrar
    var respuesta = confirm("¿Está seguro de eliminar el registro: "+id+"?");
    if(respuesta){
        $.ajax({
            url: "",
            type: "POST",
            dataType: "json",
            data: {opcion:opcion, id:id},
            success: function(){
                tablaPersonas.row(fila.parents('tr')).remove().draw();
            }
        });
    }   
});
    
$("#formProductos").submit(function(e){
    e.preventDefault();    
    nombre = $.trim($("#nombre").val());
    descripcion = $.trim($("#descripcion").val());    
    $.ajax({
        url: "",
        type: "POST",
        dataType: "json",
        data: {nombre:nombre, precio:precio, descripcion:descripcion, categoria:categoria, linkImg:linkImg, opcion:opcion},
        success: function(data){
            console.log(data);          
            nombre = data[0].nombre;
            precio = data[0].precio;
            descripcion = data[0].descripcion;
            categoria = data[0].categoria;
            linkImg = data[0].linkImg;
            if(opcion == 1){tablaProductos.row.add([nombre,precio,descripcion,categoria,linkImg]).draw();}
            else{tablaProductos.row(fila).data([nombre,precio,descripcion,categoria,linkImg]).draw();}            
        }        
    });
    $("#modalCRUD").modal("hide");    
    
});    
    
});