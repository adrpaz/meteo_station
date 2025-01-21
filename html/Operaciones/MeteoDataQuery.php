<?php
//Incluimos el archivo encargado de la conexión al servidor
include('../Configuraciones/bd.php');

    date_default_timezone_set('Europe/Madrid');
    $fechaActual = date('Y-m-d');
    $horaActual = date("G:i:s");
    $OffSet = 10;
    $horaActual_prim =strtotime ('-'.$OffSet.'minute' , strtotime ($horaActual));
    $horaActual_prim = date ('G:i:s' ,  $horaActual_prim);                                                                                  //$horaActual_prim es la hora actual menos 10 minutos.

    $query = "SELECT * FROM `tb_meteodata` WHERE Fecha = '$fechaActual' AND Hora <= '$horaActual' AND Hora >='$horaActual_prim'";           //Definimos la Query con la variable recibida (el % es para buscar todos los valores no solo el primero)
    $result = mysqli_query($connection, $query);                                                                                            //Lanzamos la Query mandandole la variable $connection (que viene del include) y la query definida arriba

    if(!$result) {
        die('Query Error'. mysqli_error($connection));                                                                                      //Comprobamos si no existe algo en la base de datos matamos el proceso y devolvemos el error
    }

    //Si aparece algo entonces lo mandamos desde la BD de la siguiente manera
    //Para recorrer la variable recibida ($result) la convertimos en un array y lo guardamos en la variable $row
    //Creamos un json en donde vamos a ir guardando los valores en cada iteraccion PARA LA ESTACION METEOROLOGICA SE PUEDE USAR ALGO ASI
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'Id' => $row['Id'],
            'Vmax' => $row['Vmax'],
            'Vdirec' => $row['Vdirec'],
            'Vmedia' => $row['Vmedia'],
            'Lluvia' => $row['Lluvia'],
            'Humedad' => $row['Humedad'],
            'Presion' => $row['Presion'],
            'Temperatura' => $row['Temperatura'],
            'Fecha' => $row['Fecha'],
            'Hora' => $row['Hora'],
            'Hor' => $horaActual
        );  
    }
    //Ahora ya tenemos el json preparado, tenemos que convertirlo al formato json para mandarlo (lo almacenamos en una variable de string $jsonString)
    $jsonString = json_encode($json);
    echo $jsonString;

?>