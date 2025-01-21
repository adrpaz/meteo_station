<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include("../templates/cabecera.html"); ?>
    <title>Document</title>
</head>

<body>
    <br><br><br>

    <?php
include_once "../configuraciones/bd.php";
$conexionBD=BD::crearInstancia();
include_once "../Operaciones/postDatosHistoricos.php";
?>

    <div class="container">
        <div class="row">
            <div class="col-md-4">

                <table class="table">
                    <thead class="table-light">
                        <caption>Table Name</caption>
                        <tr>
                            <th>v máxima viento Historica</th>
                            <th>Temperartura Máxima Histórica</th>
                            <th>Temperartura mínima Histórica</th>
                            <th>TimeStamp</th>
                        </tr>
                    </thead>
                    <tbody class="table-body">
                        <?php foreach($MeteoData as $MD){?>
                        <tr>
                            
                            <td><?php echo $MD['Vmax']?></td>
                            
                            
                            <td><?php echo $MD['Temperatura1']?></td>
                            <td><?php echo $MD['Humedad']?></td>
                            <td><?php echo $MD['Presion']?></td>
                            <td><?php echo $MD['Temperatura2']?></td>
                            <td><?php echo $MD['fecha_actual']?></td>
                        </tr>
                        <?php }?>
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </div>
        </div>
    </div>
    </div>




</body>

</html>