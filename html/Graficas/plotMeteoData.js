$(document).ready(function () {

    console.log('jQuery is working');
    Chart.defaults.global.defaultFontColor = "#E0E0E0";

    var TempHoy = [];
    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafica");
    
    dataPlotRequest();
    setTimeout(cretaePlot, 100);
    setInterval(dataPlotRequest,1000 * 60);
        

   
    //CAPTURA DE LOS DATOS METEOROLÓGICOS ACTUALES
    function dataPlotRequest() {


        $.ajax({
            url: '../Operaciones/TempHoyQueryHis.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);


                TempHoy.length = data.length;
                TempHoy.fill('');

                for (let i = 0; i < data.length; i++) {

                    TempHoy[i] += data[i].Temperatura;

                }

                //console.log(Presion);
                //console.log(Humedad);

            }
        });

    }


    console.log(TempHoy);
    function cretaePlot() {
        // Las etiquetas son las que van en el eje X. 
        const etiquetas = ["0:00",
"0:10",
"0:20",
"0:30",
"0:40",
"0:50",
"1:00",
"1:10",
"1:20",
"1:30",
"1:40",
"1:50",
"2:00",
"2:10",
"2:20",
"2:30",
"2:40",
"2:50",
"3:00",
"3:10",
"3:20",
"3:30",
"3:40",
"3:50",
"4:00",
"4:10",
"4:20",
"4:30",
"4:40",
"4:50",
"5:00",
"5:10",
"5:20",
"5:30",
"5:40",
"5:50",
"6:00",
"6:10",
"6:20",
"6:30",
"6:40",
"6:50",
"7:00",
"7:10",
"7:20",
"7:30",
"7:40",
"7:50",
"8:00",
"8:10",
"8:20",
"8:30",
"8:40",
"8:50",
"9:00",
"9:10",
"9:20",
"9:30",
"9:40",
"9:50",
"10:00",
"10:10",
"10:20",
"10:30",
"10:40",
"10:50",
"11:00",
"11:10",
"11:20",
"11:30",
"11:40",
"11:50",
"12:00",
"12:10",
"12:20",
"12:30",
"12:40",
"12:50",
"13:00",
"13:10",
"13:20",
"13:30",
"13:40",
"13:50",
"14:00",
"14:10",
"14:20",
"14:30",
"14:40",
"14:50",
"15:00",
"15:10",
"15:20",
"15:30",
"15:40",
"15:50",
"16:00",
"16:10",
"16:20",
"16:30",
"16:40",
"16:50",
"17:00",
"17:10",
"17:20",
"17:30",
"17:40",
"17:50",
"18:00",
"18:10",
"18:20",
"18:30",
"18:40",
"18:50",
"19:00",
"19:10",
"19:20",
"19:30",
"19:40",
"19:50",
"20:00",
"20:10",
"20:20",
"20:30",
"20:40",
"20:50",
"21:00",
"21:10",
"21:20",
"21:30",
"21:40",
"21:50",
"22:00",
"22:10",
"22:20",
"22:30",
"22:40",
"22:50",
"23:00",
"23:10",
"23:20",
"23:30",
"23:40",
"23:50",
]
        // Podemos tener varios conjuntos de datos
        const datosTemperatura = {
            label: "Temperatura",
            data: TempHoy, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
            backgroundColor: 'rgba(0, 51, 102, 0.2)', // Color de fondo
            borderColor: 'rgba(0, 51, 102, 0.5)', // Color del borde
            borderWidth: 0.5,// Ancho del borde
            
        };

        new Chart($grafica, {
            type: 'line',// Tipo de gráfica
            data: {
                labels: etiquetas,
                datasets: [
                    datosTemperatura,
                    //datosHumedad,
                    // Aquí más datos...
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                fontColor: 'black',
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }],
                },
            }
        });

    }

});