<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include("../templates/cabecera.html"); ?>
    <title>Document</title>
    <style>
        body{

            background-image: url("../ElementosGraficos/Wallpaper_home.jpeg");
            background-repeat:no-repeat;
            background-size: 100%;
 
        }
       
    </style>
     <style>
        .table{
            color: #fff;
 
        }
       
    </style>
</head>
<body>

<?php
 include_once "../configuraciones/bd.php";
 $conexionBD=BD::crearInstancia();
 include_once "../Operaciones/postTemperaturaActual.php";
 ?>
 <script type="text/javascript">
$(document).ready(function() {	
    function update(){
        var temp = $('#Temperatura2').text();
 
        $.ajax({
            type: "POST",
            url: "home.php",
            data: temp,
            success: function() {
                $('#Temperatura2').text(temp);
            }
        });
    }
 
    setInterval(update, 3000);
});
</script>

<br><br>
<div class="container">
        <div class="row">
            <div class="col-md-4">

                <table class="table">
                    <thead class="table-light">
                        <caption>Table Name</caption>
                        <tr>
                            <th>Ahora</th>
                        </tr>
                    </thead>
                    <tbody class="table-body">
                        <?php foreach($temp as $MD){?>
                        <tr>
                            <td><spam id='Temperatura2'><?php echo $MD['Temperatura2'].' ºC'?></spam></td>
                        </tr>
                        <?php }?>
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </div>
        </div>
        <?php include_once "../ElementosGraficos/reloj.php"; ?>
    </div>
   
</body>
</html>