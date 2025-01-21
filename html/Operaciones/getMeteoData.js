$(document).ready(function () {

    console.log('jQuery is working');
    dataRequest();
    setInterval(dataRequest, 1000 * 60);

    tempMaxRequest();
    setInterval(tempMaxRequest, 1000 * 60);

    tempMinRequest();
    setInterval(tempMinRequest, 1000 * 60);

    tempSensaTerm();
    setInterval(tempSensaTerm, 1000 * 60);

    lluviaHoy();
    setInterval(lluviaHoy, 1000 * 60);

    lluviaSemana();
    setInterval(lluviaSemana, 1000 * 60);

    tempMinRequestHis();
    tempMaxRequestHis();
    dataSolRequest();
    lluviaHoy();
    lluviaSemana();

    //CAPTURA DE LOS DATOS METEOROLÓGICOS ACTUALES
    function dataRequest() {

        $.ajax({
            url: '../Operaciones/MeteoDataQuery.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);

                let Temperatura = data[0].Temperatura;
                let Vmax = data[0].Vmax;
                let Vmedia = data[0].Vmedia;
                let Presion = data[0].Presion;
                Presion = parseFloat(Presion).toFixed(1);
                let Humedad = data[0].Humedad;
                Vmedia = parseFloat(Vmedia).toFixed(1);
                Vmax = parseFloat(Vmax).toFixed(1);
                Hor = data[0].Hor;
                
                console.log(Hor);
                //console.log(Vmedia);
                //console.log(Presion);
                //console.log(Humedad);

                $('#Temp').html(Temperatura + 'º');
                $('#Temp1').html(Temperatura + 'º');
                $('#Temp2').html(Temperatura + 'º');
                $('#Vmed').html(Vmedia);
                $('#Vmed1').html(Vmedia + ' km/h');
                $('#Vmax').html(Vmax + ' km/h');
                $('#Pre').html(Presion + ' hPa');
                $('#Hum').html(Humedad);
                $('#Hum1').html(Humedad + ' %');

            }
        });

    }

    //CAPTURA DE LAS HORAS DE SALIDA Y PUESTA DE SOL
    function dataSolRequest() {

        $.ajax({
            url: '../Operaciones/HorasSolQuery.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);

                let Amanecer = data[0].Amanecer;
                let Anochecer = data[0].Anochecer;

                console.log(response);
                //console.log(Puesta);
        
                $('#Sal').html(Amanecer);
                $('#Pue').html(Anochecer);

            }
        });

    }

    //TEMPERATURA MAXIMA DIARIA
    function tempMaxRequest() {

        $.ajax({
            url: '../Operaciones/TempMaxQuery.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);
                let MaxTemp = data[0].Temperatura;

                //Array de Horas (La Máxima se puede repetir a varias horas)
                MaxHora = [];
                MaxHora.length = data.length;
                MaxHora.fill('');

                for (let i = 0; i < data.length; i++) {

                    MaxHora[i] += data[i].Hora;

                }

                //console.log(MaxTemp);
                //console.log(MaxHora);


                $('#MaxTemp').html(MaxTemp + 'º');
                $('#MaxTemp1').html(MaxTemp + 'º');
                $('#MaxHora').html(MaxHora[0]);
                $('#MaxHora1').html(MaxHora[1]);
                $('#MaxHora2').html(MaxHora[2]);
                $('#MaxHora3').html(MaxHora[3]);
                $('#MaxHora4').html(MaxHora[4]);


            }
        });
    }

    //TEMPERATURA MINIMA DIARIA
    function tempMinRequest() {

        $.ajax({
            url: '../Operaciones/TempMinQuery.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);
                let MinTemp = data[0].Temperatura;

                //Array de Horas (La Mínima se puede repetir a varias horas)
                MinHora = [];
                MinHora.length = data.length;
                MinHora.fill('');

                for (let i = 0; i < data.length; i++) {

                    MinHora[i] += data[i].Hora;

                }

                //console.log(MinTemp);
                //console.log(MinHora);

                $('#MinTemp').html(MinTemp + 'º');
                $('#MinTemp1').html(MinTemp + 'º');
                $('#MinHora').html(MinHora[0]);
                $('#MinHora1').html(MinHora[1]);
                $('#MinHora2').html(MinHora[2]);
                $('#MinHora3').html(MinHora[3]);
                $('#MinHora4').html(MinHora[4]);
                $('#Hola').html(MinTemp + 'º');


            }
        });


    }

    //TEMPERATURA SENSACION TERMICA ACTUAL
    function tempSensaTerm() {

        $.ajax({
            url: '../Operaciones/MeteoDataQuery.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);

                let Temperatura = data[0].Temperatura;
                let Vmedia = data[0].Vmedia;
                let Humedad = data[0].Humedad;

                Tc = parseFloat(Temperatura);
                Tf = (Tc * 1.80) + 32;
                Vm = parseFloat(Vmedia);
                Hr = parseFloat(Humedad);

                if (Tc < 27) {
                    if (Tc < 10) {
                        if (Vm > 1.388) {

                            Ts = 13.112 + 0.6215 * Tc - 11.37 * Vm ** 0.16 + 0.3965 * Tc * Vm ** 0.16;
                            Ts = parseFloat(Ts).toFixed(1);
                            $('#SenTemp').html(Ts + 'º');
                            $('#SenTemp1').html(Ts + 'º');

                        }
                        else {
                            Ts = Tc;
                            $('#SenTemp').html(Ts + 'º');
                            $('#SenTemp1').html(Ts + 'º');

                        }
                    }
                    else {

                        Ts = Tc;
                        $('#SenTemp').html(Ts + 'º');
                        $('#SenTemp1').html(Ts + 'º');

                    }

                }
                else {
                    if (Hr > 42) {

                        Ts = 16.923 + (0.185212 * Tf) + (5.37941 * Hr) - (0.100254 * Tf * Hr) + (0.00941695 * Tf ** 2) + (0.00728898 * Hr ** 2) + (0.000345372 * Tf ** 2 * Hr) - (0.000814971 * Tf * Hr ** 2) + (0.0000102102 * Tf ** 2 * Hr ** 2) - (0.000038646 * Tf ** 3) + (0.0000291583 * Hr ** 3) + (0.00000142721 * Tf ** 3 * Hr) + (0.000000197483 * Tf * Hr ** 3) - (0.0000000218429 * Tf ** 3 * Hr ** 2) + (0.000000000843296 * Tf ** 2 * Hr ** 3) - (0.0000000000481975 * Tf ** 3 * Hr ** 3)
                        Tsc = (Ts - 32) / 1.80;
                        Tsc = parseFloat(Tsc).toFixed(1);
                        $('#SenTemp').html(Tsc + 'º');
                        $('#SenTemp1').html(Ts + 'º');

                    }
                    else {

                        Ts = Tc;
                        $('#SenTemp').html(Ts + 'º');
                        $('#SenTemp1').html(Ts + 'º');

                    }
                }

            }
        });
    }

    //TEMPERATURA MINIMA HISTÓRICA
    function tempMinRequestHis() {

        $.ajax({
            url: '../Operaciones/TempMinQueryHis.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);
                let MinTempHis = data[0].Temperatura;

                //Array de Horas (La Mínima se puede repetir a varias horas)
                MinFechaHis = [];
                MinFechaHis.length = data.length;
                MinFechaHis.fill('');

                for (let i = 0; i < data.length; i++) {

                    MinFechaHis[i] += data[i].Fecha;

                }

                //console.log(MinTemp);
                console.log(MinFechaHis);

                $('#MinTempHis').html(MinTempHis + 'º');
                $('#MinFechaHis').html(MinFechaHis[0]);
                $('#MinFechaHis1').html(MinFechaHis[1]);
                $('#MinFechaHis2').html(MinFechaHis[2]);
                $('#MinFechaHis3').html(MinFechaHis[3]);
                $('#MinFechaHis4').html(MinFechaHis[4]);

            }
        });


    }

    //TEMPERATURA MAXIMA HISTÓRICA
    function tempMaxRequestHis() {

        $.ajax({
            url: '../Operaciones/TempMaxQueryHis.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);
                let MaxTempHis = data[0].Temperatura;

                //Array de Horas (La Mínima se puede repetir a varias horas)
                MaxFechaHis = [];
                MaxFechaHis.length = data.length;
                MaxFechaHis.fill('');

                for (let i = 0; i < data.length; i++) {

                    MaxFechaHis[i] += data[i].Fecha;

                }

                //console.log(MinTemp);
                console.log(MaxFechaHis);

                $('#MaxTempHis').html(MaxTempHis + 'º');
                $('#MaxFechaHis').html(MaxFechaHis[0]);
                $('#MaxFechaHis1').html(MaxFechaHis[1]);
                $('#MaxFechaHis2').html(MaxFechaHis[2]);
                $('#MaxFechaHis3').html(MaxFechaHis[3]);
                $('#MaxFechaHis4').html(MaxFechaHis[4]);


            }
        });


    }

    //PRECIPITACION HOY

    function lluviaHoy() {

        $.ajax({
            url: '../Operaciones/LluviaHoy.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);
                let lluviaHoy = 0;
                
                for (let i = 0; i < data.length; i++) {

                    lluviaHoy += parseFloat(data[i].Lluvia);
                }
                lluviaHoy = lluviaHoy.toFixed(2);
                $('#Prec').html(lluviaHoy + ' mm');
                //console.log(LluviaHoy);
            }
        });


    }

        //PRECIPITACION 7 DIAS

    function lluviaSemana() {

        $.ajax({
            url: '../Operaciones/LluviaSemana.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);
                let lluviaSemana = 0;
                
                for (let i = 0; i < data.length; i++) {

                    lluviaSemana += parseFloat(data[i].Lluvia);
                }
                lluviaSemana = lluviaSemana.toFixed(2);
                $('#Prec1').html(lluviaSemana + ' mm');
                //console.log(LluviaSemana);
            }
        });

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


                Vmedia = parseFloat(Vmedia).toFixed(1);
                Vmax = parseFloat(Vmax).toFixed(1);

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

                                }
                                else {
                                    if (Vmax >= 100 && Vmax < 200) {

                                        StrViento = document.getElementById('StrViento').innerHTML = "<spam>Brisa Moderada</spam><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                    }
                                    else {

                                        if (Vmax >= 200) {

                                            StrViento = document.getElementById('StrViento').innerHTML = "<spam>Brisa Moderada</spam><br><spam style ='font-size: 0.5cm; color:#922B21;'>Racha Máx&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21; font-size: 0.5cm;' aria-hidden='true'></span>"
                                        }

                                    }
                                }

                            }
                            else {
                                if (Vmedia > 28 && Vmedia <= 49) {

                                    StrViento = "Brisa Fuerte";

                                    if (Vmax >= 80 && Vmax < 100) {

                                        StrViento = document.getElementById('StrViento').innerHTML = "<spam>Brisa Fuerte</spam><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span>"

                                    }
                                    else {
                                        if (Vmax >= 100 && Vmax < 200) {

                                            StrViento = document.getElementById('StrViento').innerHTML = "<spam>Brisa Fuerte</spam><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                        }
                                        else {

                                            if (Vmax >= 200) {

                                                StrViento = document.getElementById('StrViento').innerHTML = "<spam>Brisa Fuerte</spam><br><spam style ='font-size: 0.5cm; color:#922B21;'>Racha Máx&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21; font-size: 0.5cm;' aria-hidden='true'></span>"
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

                                        }
                                        else {
                                            if (Vmax >= 100 && Vmax < 200) {

                                                StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Viento Fuerte&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                            }
                                            else {

                                                if (Vmax >= 200) {

                                                    StrViento = document.getElementById('StrViento').innerHTML = "<spam style ='font-size: 0.6cm;'>Viento Fuerte&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm; color:#CD6155;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#CD6155; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                }

                                            }
                                        }

                                    }
                                    else {
                                        if (Vmedia > 61 && Vmedia <= 74) {

                                            StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Temporal&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                    document.getElementById("WindRow").style.background = "#e67d2280";
                                    if(Vmax>=80 && Vmax<100) {

                                        StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Temporal&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span>"

                                    }
                                    else {
                                        if(Vmax>=100 && Vmax<200) {

                                            StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Temporal&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                        }
                                        else {

                                            if(Vmax>=200) {

                                                StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Temporal&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm; color:#C0392B;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#C0392B ; font-size: 0.5cm;' aria-hidden='true'></span>"
                                            }
                                
                                        }
                                    }

                                        }
                                        else {
                                            if (Vmedia > 74 && Vmedia <= 88) {

                                                StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Temporal Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                document.getElementById("WindRow").style.background = "#e67d2280";
                                                if(Vmax>=80 && Vmax<100) {
            
                                                    StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Temporal Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span>"
            
                                                }
                                                else {
                                                    if(Vmax>=100 && Vmax<200) {
            
                                                        StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Temporal Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                    }
                                                    else {
            
                                                        if(Vmax>=200) {
            
                                                            StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Temporal Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm; color:#C0392B;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#C0392B ; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                        }
                                            
                                                    }
                                                }
                                            }
                                            else {
                                                if (Vmedia > 88 && Vmedia <= 117) {

                                                    StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Temporal Muy Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                document.getElementById("WindRow").style.background = "#e67d2280";
                                                if(Vmax>=80 && Vmax<100) {
            
                                                    StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Temporal Muy Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span>"
            
                                                }
                                                else {
                                                    if(Vmax>=100 && Vmax<200) {
            
                                                        StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Temporal Muy Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                    }
                                                    else {
            
                                                        if(Vmax>=200) {
            
                                                            StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Temporal Muy Fuerte&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm; color:#C0392B;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#C0392B ; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                        }
                                            
                                                    }
                                                }
                                                }
                                                else {
                                                    StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Vientos Huracanados&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21 ; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                    document.getElementById("WindRow").style.background = "#c03a2b80";
                                                    if(Vmax>=80 && Vmax<100) {
                
                                                        StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Vientos Huracanados&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21 ; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F4D03F; font-size: 0.5cm;' aria-hidden='true'></span>"
                
                                                    }
                                                    else {
                                                        if(Vmax>=100 && Vmax<200) {
                
                                                            StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Vientos Huracanados&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21 ; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#F5B041; font-size: 0.5cm;' aria-hidden='true'></span>"
                                                        }
                                                        else {
                
                                                            if(Vmax>=200) {
                
                                                                StrViento = document.getElementById('StrViento').innerHTML="<spam style ='font-size: 0.6cm;'>Vientos Huracanados&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21 ; font-size: 0.5cm;' aria-hidden='true'></span><br><spam style ='font-size: 0.5cm; color:#922B21;'>Racha Máx&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</spam><span class='glyphicon glyphicon-warning-sign' style='color:#922B21; font-size: 0.5cm;' aria-hidden='true'></span>"
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

});
