$(document).ready(function () {

    console.log('jQuery is working');
    TempAlert();
    HumAlert();
    veleta();
    setInterval(veleta, 1000 * 60);
    
    vientAlert();
    setInterval(vientAlert, 1000 * 60);
    

    //ALERTA DE TEMPERATURA
    function TempAlert() {

        $.ajax({
            url: '../Operaciones/MeteoDataQuery.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);

                let Temperatura = data[0].Temperatura;
                Temperatura = parseFloat(Temperatura).toFixed(1);
                

                if (Temperatura <= -5) {

                    StrTemp = document.getElementById('StrTemp').innerHTML = "<spam style ='font-size: 0.55cm; color:#922B21 '>Hielo Extremo&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21 ; font-size: 0.5cm;' aria-hidden='true'></span>";
                    document.getElementById("TempRow").style.background = "#c03a2b80";

                } else {
                    if (Temperatura <= 0) {
                        
                        StrTemp = document.getElementById('StrTemp').innerHTML = "<spam style ='font-size: 0.6cm; color:#F5B041 '>Hielo&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041 ; font-size: 0.5cm;' aria-hidden='true'></span>";
                        document.getElementById("TempRow").style.background = "#e67d2280";
    
                    } else {
                        if (Temperatura <= 2) {
                            
                            StrTemp = document.getElementById('StrTemp').innerHTML = "<spam style ='font-size: 0.6cm; color:#F4D03F '>Muy Frío&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span>";
                            document.getElementById("TempRow").style.background = "#f4d03f7a";
        
                        } else {
                            if (Temperatura <= 5) {
                            
                                StrTemp = document.getElementById('StrTemp').innerHTML = "<spam>Frío</spam>";
            
                            } else {
                                if (Temperatura <= 10) {
                            
                                    StrTemp = document.getElementById('StrTemp').innerHTML = "<spam>Fresco</spam>";
                
                                } else {
                                    if (Temperatura <= 15) {
                            
                                        StrTemp = document.getElementById('StrTemp').innerHTML = "<spam>Templado</spam>";
                    
                                    } else {
                                        if (Temperatura <= 20) {
                            
                                            StrTemp = document.getElementById('StrTemp').innerHTML = "<spam>Confortable</spam>";
                        
                                        } else {
                                            if (Temperatura <= 25) {
                            
                                                StrTemp = document.getElementById('StrTemp').innerHTML = "<spam>Cálido</spam>";
                            
                                            } else {
                                                if (Temperatura <= 30) {
                            
                                                    StrTemp = document.getElementById('StrTemp').innerHTML = "<spam>Calor</spam>";
                                
                                                } else {
                                                    if (Temperatura <= 35) {
                            
                                                        StrTemp = document.getElementById('StrTemp').innerHTML = "<spam style ='font-size: 0.52cm; color:#F4D03F '>Calor Moderado&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F ; font-size: 0.5cm;' aria-hidden='true'></span>";
                                                        document.getElementById("TempRow").style.background = "#f4d03f7a";
                                    
                                                    } else {
                                                        if (Temperatura <= 40) {
                            
                                                            StrTemp = document.getElementById('StrTemp').innerHTML = "<spam style ='font-size: 0.6cm; color:#F5B041 '>Calor Intenso&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041 ; font-size: 0.5cm;' aria-hidden='true'></span>";
                                                            document.getElementById("TempRow").style.background = "#e67d2280";
                                        
                                                        } else {

                                                            StrTemp = document.getElementById('StrTemp').innerHTML = "<spam style ='font-size: 0.55cm; color:#922B21 '>Calor Extremo&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21 ; font-size: 0.5cm;' aria-hidden='true'></span>";
                                                            document.getElementById("TempRow").style.background = "#c03a2b80";

                                                        }
                                                    }
                                                    
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                        }
                    }

                }
            }
        }
        );
    }

 //ALERTA DE HUMEDAD
 function HumAlert() {

    $.ajax({
        url: '../Operaciones/MeteoDataQuery.php',
        type: 'GET',
        success: function (response) {
            let data = JSON.parse(response);

            let Humedad = data[0].Humedad;
            

            if (Humedad <= 40) {

                StrHum = document.getElementById('StrHum').innerHTML = "<spam>Seco</spam>"
            } else {
                if (Humedad <= 60) {

                    StrHum = document.getElementById('StrHum').innerHTML = "<spam>Óptimo</spam>"
                } else {
                    if (Humedad > 60) {

                        StrHum = document.getElementById('StrHum').innerHTML = "<spam>Húmedo</spam>"
                    }
                }

            }
        }
    }
    );
}
    

    //ALERTA DE VIENTO
    function vientAlert() {

        $.ajax({
            url: '../Operaciones/MeteoDataQuery.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);

                let Vmedia = data[0].Vmedia;
                let Vmax = data[0].Vmax;
                let StrViento;
                let edit;

                Vmedia = parseFloat(Vmedia).toFixed(1);
                Vmax = parseFloat(Vmax).toFixed(1);

                //Vmedia = 250;
                //Vmax = 250;

                if (Vmedia <= 1) {

                    StrViento = "Calma";

                }
                else {
                    if (Vmedia > 1 && Vmedia <= 11) {

                        StrViento = "Brisa Suave";

                    }
                    else {
                        if (Vmedia > 11 && Vmedia <= 19) {

                            StrViento = "Brisa Ligera";

                        }
                        else {
                            if (Vmedia > 19 && Vmedia <= 28) {

                                StrViento = "Brisa Moderada";

                                if (Vmax >= 80 && Vmax < 100) {

                                    StrViento = document.getElementById('StrViento').innerHTML = "<spam>Brisa Moderada</spam><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span>"
                                    edit = document.getElementById('imgvel');
                                    edit.style.width = '72%';

                                }
                                else {
                                    if (Vmax >= 100 && Vmax < 200) {

                                        StrViento = document.getElementById('StrViento').innerHTML = "<spam>Brisa Moderada</spam><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                        edit = document.getElementById('imgvel');
                                        edit.style.width = '72%';
                                    }
                                    else {

                                        if (Vmax >= 200) {

                                            StrViento = document.getElementById('StrViento').innerHTML = "<spam>Brisa Moderada</spam><br><spam style ='font-size: 0.5cm; color:#922B21;'>Racha Máx&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21; font-size: 0.5cm;' aria-hidden='true'></span>"
                                            edit = document.getElementById('imgvel');
                                            edit.style.width = '72%';
                                        }

                                    }
                                }

                            }
                            else {
                                if (Vmedia > 28 && Vmedia <= 49) {

                                    StrViento = "Brisa Fuerte";

                                    if (Vmax >= 80 && Vmax < 100) {

                                        StrViento = document.getElementById('StrViento').innerHTML = "<spam>Brisa Fuerte</spam><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span>"
                                        edit = document.getElementById('imgvel');
                                        edit.style.width = '72%';

                                    }
                                    else {
                                        if (Vmax >= 100 && Vmax < 200) {

                                            StrViento = document.getElementById('StrViento').innerHTML = "<spam>Brisa Fuerte</spam><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                            edit = document.getElementById('imgvel');
                                            edit.style.width = '72%';
                                        }
                                        else {

                                            if (Vmax >= 200) {

                                                StrViento = document.getElementById('StrViento').innerHTML = "<spam>Brisa Fuerte</spam><br><spam style ='font-size: 0.5cm; color:#922B21;'>Racha Máx&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                edit = document.getElementById('imgvel');
                                                edit.style.width = '72%';
                                            }

                                        }
                                    }

                                }
                                else {
                                    if (Vmedia > 49 && Vmedia <= 61) {

                                        StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Viento Fuerte&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span>"
                                        document.getElementById("WindRow").style.background = "#f4d03f7a";
                                        if (Vmax >= 80 && Vmax < 100) {

                                            StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Viento Fuerte&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span>"
                                            edit = document.getElementById('imgvel');
                                            edit.style.width = '72%';

                                        }
                                        else {
                                            if (Vmax >= 100 && Vmax < 200) {

                                                StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Viento Fuerte&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                edit = document.getElementById('imgvel');
                                                edit.style.width = '72%';
                                            }
                                            else {

                                                if (Vmax >= 200) {

                                                    StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Viento Fuerte&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm; color:#CD6155;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#CD6155; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                    edit = document.getElementById('imgvel');
                                                    edit.style.width = '72%';
                                                }

                                            }
                                        }

                                    }
                                    else {
                                        if (Vmedia > 61 && Vmedia <= 74) {

                                            StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Temporal&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                            document.getElementById("WindRow").style.background = "#e67d2280";
                                            if (Vmax >= 80 && Vmax < 100) {

                                                StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Temporal&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                edit = document.getElementById('imgvel');
                                                edit.style.width = '72%';

                                            }
                                            else {
                                                if (Vmax >= 100 && Vmax < 200) {

                                                    StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Temporal&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                    edit = document.getElementById('imgvel');
                                                    edit.style.width = '72%';

                                                }
                                                else {

                                                    if (Vmax >= 200) {

                                                        StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Temporal&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm; color:#C0392B;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#C0392B ; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                        edit = document.getElementById('imgvel');
                                                        edit.style.width = '72%';

                                                    }

                                                }
                                            }

                                        }
                                        else {
                                            if (Vmedia > 74 && Vmedia <= 88) {

                                                StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Temporal Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                document.getElementById("WindRow").style.background = "#e67d2280";
                                                edit = document.getElementById('imgvel');
                                                edit.style.width = '72%';
                                                if (Vmax >= 80 && Vmax < 100) {

                                                    StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Temporal Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                    edit = document.getElementById('imgvel');
                                                    edit.style.width = '55%';


                                                }
                                                else {
                                                    if (Vmax >= 100 && Vmax < 200) {

                                                        StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Temporal Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                        edit = document.getElementById('imgvel');
                                                        edit.style.width = '55%';
                                                    }
                                                    else {

                                                        if (Vmax >= 200) {

                                                            StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Temporal Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm; color:#C0392B;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#C0392B ; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                            edit = document.getElementById('imgvel');
                                                            edit.style.width = '55%';
                                                        }

                                                    }
                                                }
                                            }
                                            else {
                                                if (Vmedia > 88 && Vmedia <= 117) {

                                                    StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Temporal Muy Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                    document.getElementById("WindRow").style.background = "#e67d2280";
                                                    edit = document.getElementById('imgvel');
                                                    edit.style.width = '72%';
                                                    if (Vmax >= 80 && Vmax < 100) {

                                                        StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Temporal Muy Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                        edit = document.getElementById('imgvel');
                                                        edit.style.width = '55%';

                                                    }
                                                    else {
                                                        if (Vmax >= 100 && Vmax < 200) {

                                                            StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Temporal Muy Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                            edit = document.getElementById('imgvel');
                                                            edit.style.width = '55%';
                                                        }
                                                        else {

                                                            if (Vmax >= 200) {

                                                                StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Temporal Muy Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm; color:#C0392B;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#C0392B ; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                                edit = document.getElementById('imgvel');
                                                                edit.style.width = '55%';
                                                            }

                                                        }
                                                    }
                                                }
                                                else {
                                                    StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Vientos Huracanados&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21 ; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                    document.getElementById("WindRow").style.background = "#c03a2b80";
                                                    edit = document.getElementById('imgvel');
                                                    edit.style.width = '72%';
                                                    if (Vmax >= 80 && Vmax < 100) {

                                                        StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Vientos Huracanados&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21 ; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                        edit = document.getElementById('imgvel');
                                                        edit.style.width = '55%';

                                                    }
                                                    else {
                                                        if (Vmax >= 100 && Vmax < 200) {

                                                            StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Vientos Huracanados&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21 ; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                            edit = document.getElementById('imgvel');
                                                            edit.style.width = '55%';
                                                        }
                                                        else {

                                                            if (Vmax >= 200) {

                                                                StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Vientos Huracanados&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21 ; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm; color:#922B21;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                                edit = document.getElementById('imgvel');
                                                                edit.style.width = '55%';
                                                            }

                                                        }
                                                    }

                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                console.log(StrViento);

                $('#StrViento').html(StrViento);

            }
        });


    }
    //FUNCION VELETA

    function veleta() {

        $.ajax({
            url: '../Operaciones/MeteoDataQuery.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);

                let Vdir= data[0].Vdirec;
                
                let DirViento;
                $('#Vdirec').html(Vdir + 'º');

                if (Vdir == 0) {

                    DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_0.PNG' alt='Card image cap'></img>"

                }
                else {
                    if (Vdir == 23) {

                        DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_22.PNG' alt='Card image cap'></img>"

                    }
                    else {
                        if (Vdir == 45) {

                            DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_45.PNG' alt='Card image cap'></img>"

                        }
                        else {
                            if (Vdir == 68) {

                                DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_67.PNG' alt='Card image cap'></img>"

                            }
                            else {
                                if (Vdir == 90) {

                                    DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_90.PNG' alt='Card image cap'></img>"

                                }
                                else {
                                    if (Vdir == 113) {

                                        DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_112.PNG' alt='Card image cap'></img>"

                                    }
                                    else {
                                        if (Vdir == 135) {

                                            DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_135.PNG' alt='Card image cap'></img>"

                                        }
                                        else {
                                            if (Vdir == 158) {

                                                DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_157.PNG' alt='Card image cap'></img>"

                                            }
                                            else {
                                                if (Vdir == 180) {

                                                    DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_180.PNG' alt='Card image cap'></img>"

                                                }
                                                else {
                                                    if (Vdir == 203) {

                                                        DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_202.PNG' alt='Card image cap'></img>"

                                                    }
                                                    else {
                                                        if (Vdir == 225) {

                                                            DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%; ' src='../ElementosGraficos/Veleta_225.PNG' alt='Card image cap'></img>"

                                                        }
                                                        else {
                                                            if (Vdir == 248) {

                                                                DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_247.PNG' alt='Card image cap'></img>"

                                                            }
                                                            else {
                                                                if (Vdir == 270) {       //------------------------

                                                                    DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_270.PNG' alt='Card image cap'></img>"

                                                                }
                                                                else {
                                                                    if (Vdir == 293) {

                                                                        DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_292.PNG' alt='Card image cap'></img>"

                                                                    }
                                                                    else {
                                                                        if (Vdir == 315) {
                                                                            console.log(Vdir);
                                                                            DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_315.PNG' alt='Card image cap'></img>"

                                                                        }
                                                                        else {
                                                                            if (Vdir == 338) {

                                                                                DirViento = document.getElementById('DirViento').innerHTML = "<img class='image' id='imgvel' style='width: 40%;' src='../ElementosGraficos/Veleta_337.PNG' alt='Card image cap'></img>"

                                                                            }
                                                                            else {
                                                                                if (Vdir == 0) {

                                                                                    DirViento = document.getElementById('DirViento').innerHTML = "<spam>--</spam>"

                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                }

            }


        }

            });
        }

});
