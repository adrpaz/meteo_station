<?php
//Incluimos el archivo encargado de la conexión al servidor SELECT Temperatura2, Hora FROM `tb_meteodata` WHERE Fecha = '2022-11-01' AND Temperatura2 >= ALL (SELECT Temperatura2 FROM `tb_meteodata` WHERE Fecha = '2022-11-01')
include('../Configuraciones/bd.php');
    date_default_timezone_set('Europe/Madrid');
    $fechaActual = date('Y-m-d');
                                                                      
    $query = "SELECT Temperatura, Hora FROM `tb_meteodata` WHERE Fecha = '$fechaActual' AND Temperatura <= ALL (SELECT Temperatura FROM `tb_meteodata` WHERE Fecha = '$fechaActual')";           //Definimos la Query con la variable recibida (el % es para buscar todos los valores no solo el primero)
    $result = mysqli_query($connection, $query);                                                                                            //Lanzamos la Query mandandole la variable $connection (que viene del include) y la query definida arriba

    if(!$result) {
        die('Query Error'. mysqli_error($connection));    //Comprobamos si no existe algo en la base de datos matamos el proceso y devolvemos el error
    }
    
    //Si aparece algo entonces lo mandamos desde la BD de la siguiente manera
    //Para recorrer la variable recibida ($result) la convertimos en un array y lo guardamos en la variable $row
    //Creamos un json en donde vamos a ir guardando los valores en cada iteraccion PARA LA ESTACION METEOROLOGICA SE PUEDE USAR ALGO ASI
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'Temperatura' => $row['Temperatura'],
            'Hora' => $row['Hora'],

        );
    }
    //Ahora ya tenemos el json preparado, tenemos que convertirlo al formato json para mandarlo (lo almacenamos en una variable de string $jsonString)
    $jsonString = json_encode($json);
    echo $jsonString;

?>