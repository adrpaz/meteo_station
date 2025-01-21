$(document).ready(function () {

    setButtonStyle();
    $('#R1but').click(setButtonStyle);
    setInterval(setButtonStyle, 500);
    


    function setButtonStyle() {


        //Leemos el estado del 
        $.ajax({
            url: '../Operaciones/ReleReadStateQuery.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);

                let readstate1 = data[0].Relay_1;
                let readstate2 = data[0].Relay_2;
                let readstate3 = data[0].Relay_3;
                let readstate4 = data[0].Relay_4;
                let readstate5 = data[0].Relay_5;

            //Relé 1

            if(readstate1 == "false"){

                var R1but = document.getElementById('R1but');
                R1but.style.backgroundColor = 'rgba(41, 73, 88, 0.616)';
                R1but.style.boxShadow = '1.5px 1.5px 1.5px rgba(0,0,0,0.4)';
                st1 = document.getElementById('st1').innerHTML = "<spam>off</span>";
                

            } else {

                var R1but = document.getElementById('R1but');
                R1but.style.backgroundColor = 'rgba(59, 143, 182, 0.986)';
                R1but.style.boxShadow = '0px 0px 0px rgba(0,0,0,0.4)';
                R1but.style.boxShadow = 'inset 1.5px 1.5px 1.5px rgba(0,0,0,0.2)';
                R1but.style.transition = 'all 400ms ease';
                st1 = document.getElementById('st1').innerHTML = "<spam>on</span>";

            }

            //Relé 2

            if(readstate2 == "false"){

                var R2but = document.getElementById('R2but');
                R2but.style.backgroundColor = 'rgba(41, 73, 88, 0.616)';
                R2but.style.border.backgroundColor='rgba(66, 100, 117, 1)';
                st2 = document.getElementById('st2').innerHTML = "<spam>off</span>";
                

            } else {

                var R2but = document.getElementById('R2but');
                R2but.style.backgroundColor = 'rgba(59, 143, 182, 0.986)';
                R2but.style.border.backgroundColor='rgba(240, 255, 255, 0.164)';
                st2 = document.getElementById('st2').innerHTML = "<spam>on</span>";

            }

            //Relé 3

            if(readstate3 == "false"){

                var R3but = document.getElementById('R3but');
                R3but.style.backgroundColor = 'rgba(41, 73, 88, 0.616)';
                R3but.style.border.backgroundColor='rgba(66, 100, 117, 1)';
                st3 = document.getElementById('st3').innerHTML = "<spam>off</span>";
                

            } else {

                var R3but = document.getElementById('R3but');
                R3but.style.backgroundColor = 'rgba(59, 143, 182, 0.986)';
                R3but.style.border.backgroundColor='rgba(240, 255, 255, 0.164)';
                st3 = document.getElementById('st3').innerHTML = "<spam>on</span>";

            }

            //Relé 4
            
            if(readstate4 == "false"){

                var R4but = document.getElementById('R4but');
                R4but.style.backgroundColor = 'rgba(41, 73, 88, 0.616)';
                R4but.style.border.backgroundColor='rgba(66, 100, 117, 1)';
                st4 = document.getElementById('st4').innerHTML = "<spam>off</span>";
                

            } else {

                var R4but = document.getElementById('R4but');
                R4but.style.backgroundColor = 'rgba(59, 143, 182, 0.986)';
                R4but.style.boxShadow = '0px 0px 0px rgba(0,0,0,0.4)';
                R4but.style.boxShadow = 'inset 1.5px 1.5px 1.5px rgba(0,0,0,0.2)';
                R4but.style.transition = 'all 400ms ease';
                st4 = document.getElementById('st4').innerHTML = "<spam>en curso...</span>";

            }

            //Relé 5

            if(readstate5 == "false"){

                var R5but = document.getElementById('R5but');
                R5but.style.backgroundColor = 'rgba(41, 73, 88, 0.616)';
                R5but.style.boxShadow = '2px 2px 2px rgba(0,0,0,0.4)';
                R5but.style.border.backgroundColor='rgba(41, 73, 88, 0.616)';
                st5 = document.getElementById('st5').innerHTML = "<spam>off</span>";
                

            } else {

                var R5but = document.getElementById('R5but');
                R5but.style.backgroundColor = 'rgba(59, 143, 182, 0.986)';
                R5but.style.boxShadow = '0px 0px 0px rgba(0,0,0,0.4)';
                R5but.style.boxShadow = 'inset 1.5px 1.5px 1.5px rgba(0,0,0,0.2)';
                R5but.style.transition = 'all 400ms ease';
                st5 = document.getElementById('st5').innerHTML = "<spam>en curso...</span>";

            }
           
            
        }
           

        })
    }

})
    