$(document).ready(function () {


    $('#R1but').click(function (e) {

        let readst;

        //Leemos el estado del Relé
        $.ajax({
            url: '../Operaciones/ReleReadStateQuery.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);

                let readstate = data[0].Relay_1;


                if (readstate == 'true') {
                    const relOFF = {
                        state: 'false'
                    };
                    $.ajax({
                        type: 'POST',
                        url: '../Operaciones/Rele1SetStateQuery.php',
                        data: relOFF,
                        success: function (response) {
                            console.log("Rele_1 OFF " + response);


                        }
                    });

                } else {
                    const relON = {
                        state: 'true'
                    };
                    $.ajax({
                        type: 'POST',
                        url: '../Operaciones/Rele1SetStateQuery.php',
                        data: relON,
                        success: function (response) {
                            console.log("Rele_1 ON " + response);

                        }
                    });
                }
            }
        });


    });

    $('#R2but').click(function (e) {

        let readst;

        //Leemos el estado del Relé
        $.ajax({
            url: '../Operaciones/ReleReadStateQuery.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);

                let readstate = data[0].Relay_2;


                if (readstate == 'true') {
                    const relOFF = {
                        state: 'false'
                    };
                    $.ajax({
                        type: 'POST',
                        url: '../Operaciones/Rele2SetStateQuery.php',
                        data: relOFF,
                        success: function (response) {
                            console.log("Rele_2 OFF " + response);


                        }
                    });

                } else {
                    const relON = {
                        state: 'true'
                    };
                    $.ajax({
                        type: 'POST',
                        url: '../Operaciones/Rele2SetStateQuery.php',
                        data: relON,
                        success: function (response) {
                            console.log("Rele_2 ON " + response);

                        }
                    });
                }
            }
        });


    });

    $('#R3but').click(function (e) {

        let readst;

        //Leemos el estado del Relé
        $.ajax({
            url: '../Operaciones/ReleReadStateQuery.php',
            type: 'GET',
            success: function (response) {
                let data = JSON.parse(response);

                let readstate = data[0].Relay_3;


                if (readstate == 'true') {
                    const relOFF = {
                        state: 'false'
                    };
                    $.ajax({
                        type: 'POST',
                        url: '../Operaciones/Rele3SetStateQuery.php',
                        data: relOFF,
                        success: function (response) {
                            console.log("Rele_3 OFF " + response);


                        }
                    });

                } else {
                    const relON = {
                        state: 'true'
                    };
                    $.ajax({
                        type: 'POST',
                        url: '../Operaciones/Rele3SetStateQuery.php',
                        data: relON,
                        success: function (response) {
                            console.log("Rele_3 ON " + response);

                        }
                    });
                }
            }
        });


    });

    $('#R4but').click(function (e) {
        const relON = {
            state: 'true'
        };
        const relOFF = {
            state: 'false'
        };
        activarRele();
        setTimeout(desActivarRele, 1000 * 3);


        function activarRele() {
            $.ajax({
                type: 'POST',
                url: '../Operaciones/Rele4SetStateQuery.php',
                data: relON,
                success: function (response) {
                    console.log("Rele_4 ON " + response);

                }

            });
        }

        function desActivarRele() {
            $.ajax({
                type: 'POST',
                url: '../Operaciones/Rele4SetStateQuery.php',
                data: relOFF,
                success: function (response) {
                    console.log("Rele_4 ON " + response);

                }

            });
        }




    });

    $('#R5but').click(function (e) {

        const relON = {
            state: 'true'
        };
        const relOFF = {
            state: 'false'
        };
        activarRele();
        setTimeout(desActivarRele, 1000 * 3);


        function activarRele() {
            $.ajax({
                type: 'POST',
                url: '../Operaciones/Rele5SetStateQuery.php',
                data: relON,
                success: function (response) {
                    console.log("Rele_5 ON " + response);

                }

            });
        }

        function desActivarRele() {
            $.ajax({
                type: 'POST',
                url: '../Operaciones/Rele5SetStateQuery.php',
                data: relOFF,
                success: function (response) {
                    console.log("Rele_5 OFF " + response);

                }

            });
        }
    });


})