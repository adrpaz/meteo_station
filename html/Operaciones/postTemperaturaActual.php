<?php
    //CONECTAMOS CON LA BD
    include_once "../configuraciones/bd.php";
    $conexionBD=BD::crearInstancia();

    //LANZAMOS LA QUERY SQL
    date_default_timezone_set('Europe/Madrid');
    $fechaActual = date('Y-m-d');
    $horaActual = date("H:i:s");
    $OffSet = 10;
    $horaActual_prim =strtotime ('-'.$OffSet.'minute' , strtotime ($horaActual));
    $horaActual_prim = date ('G:i:s' ,  $horaActual_prim); //$horaActual_prim es la hora actual menos 10 minutos.

    $consulta=$conexionBD->prepare("SELECT Temperatura FROM `tb_meteodata` WHERE Fecha = '$fechaActual' AND Hora <= '$horaActual' AND Hora >='$horaActual_prim'");
    $consulta->execute();
    $temp=$consulta->fetchAll();

    //print_r($TemperaturaActual);
    //print_r($horaActual);
    //print_r($consulta);

?>
