<?php

    include('../Configuraciones/bd.php');
    
        $state = $_POST['state'];
        $query = "UPDATE tb_relaycontrol set Relay_4 = '$state' WHERE Row = 1"; 
        $result = mysqli_query($connection, $query);
        echo $result;
   

?>