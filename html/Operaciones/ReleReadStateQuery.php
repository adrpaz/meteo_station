<?php

    include('../Configuraciones/bd.php');
    
    $query = "SELECT * FROM `tb_relaycontrol` WHERE Row = 1";
    $json = array();
    $result = mysqli_query($connection, $query);

    if(!$result) {
        die('Query Error'. mysqli_error($connection));                                                                                      //Comprobamos si no existe algo en la base de datos matamos el proceso y devolvemos el error
    }

    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'Relay_1' => $row['Relay_1'],
            'Relay_2' => $row['Relay_2'],
            'Relay_3' => $row['Relay_3'],
            'Relay_4' => $row['Relay_4'],
            'Relay_5' => $row['Relay_5'],
           
        );
    }
    //Ahora ya tenemos el json preparado, tenemos que convertirlo al formato json para mandarlo (lo almacenamos en una variable de string $jsonString)
    $jsonString = json_encode($json);
    echo $jsonString;
    
?>