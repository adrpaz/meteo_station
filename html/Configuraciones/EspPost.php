<?php

include'conexion.php';

if ($con) {
    echo "Conexion con base de datos exitosa! ";
    
    if(isset($_POST['vmax'])) {
        $vmax = $_POST['vmax'];
        echo "Estación meteorológica";
        echo " Vmax : ".$vmax;
    }
    
     if(isset($_POST['vmedia'])) {
        $vmedia = $_POST['vmedia'];
        echo "Estación meteorológica";
        echo " Vmedia : ".$vmedia;
    }
    
    if(isset($_POST['vdirec'])) {
        $vdirec = $_POST['vdirec'];
        echo "Estación meteorológica";
        echo " Vdirec : ".$vdirec;
    }
    
    if(isset($_POST['lluvia'])) {
        $lluvia = $_POST['lluvia'];
        echo "Estación meteorológica";
        echo " Lluvia : ".$lluvia;
    }
    
    if(isset($_POST['humedad'])) {
        $humedad = $_POST['humedad'];
        echo "Estación meteorológica";
        echo " Humedad : ".$humedad;
    }
    
    if(isset($_POST['presion'])) {
        $presion = $_POST['presion'];
        echo "Estación meteorológica";
        echo " Presion : ".$presion;
    }
 
    if(isset($_POST['temperatura'])) { 
        $temperatura = $_POST['temperatura'];
        echo " Temperatura : ".$temperatura;
        date_default_timezone_set('europe/madrid');
    $Fecha = date("Y-m-d");
    $Hora = date("H:i:s");
        
        $consulta = "INSERT INTO tb_meteodata (Vmax, Vmedia, Vdirec, Lluvia, Humedad, Presion, Temperatura, Fecha, Hora) VALUES ('$vmax', '$vmedia', '$vdirec', '$lluvia', '$humedad', '$presion', '$temperatura', '$Fecha', '$Hora')";
       // $consulta = "UPDATE DHT11 SET Temperatura='$temperatura',Humedad='$humedad' WHERE Id = 1";
        $resultado = mysqli_query($con, $consulta);
        if ($resultado){
            echo " Registo en base de datos OK! ";
        } else {
            echo " Falla! Registro BD";
        }
    }
    
    
} else {
    echo "Falla! conexion con Base de datos ";   
}


?>