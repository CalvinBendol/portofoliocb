$(document).on('click', 'btn-wa', function () {

    var input_email = document.getElementById('email');

    // Whatsapp Settings

    var walink = 'https://wa.me',

        phone = '6289515784051',

        walink2 = 'CONTACT',

        text_yes = 'Terkirim.',

        text_no = 'Isi semua Formulir lalu klik Send.';

    // Smartphone Support

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        walink = 'whatsapp://send';

    }

    if (input_email.value !== "") {

        // Get input values

        var input_name = $("#name").val(),

            input_email = $("#email").val(),

            input_message = $("#message").val()

        // Construct Whatsapp Message

        var message = `${walink2}%0A%0A*Name* : ${input_name}%0A*Email Address* : ${input_email}%0A*Message* : ${input_message}`;

        // Construct Whatsapp URL

        var pesan_order = walink + '?phone=' + phone + '&text=' + walink2 +

             '%0A%0A' + 'Nama Lengkap: ' + input_name +

             '%0A%0A' + 'Email Address: ' + input_email +

             '%0A%0A' + 'Message: ' + input_message;
        // Open Whatsapp Window

        window.open(pesan_order, '_blank');

        $("#text-info").html('<span class="yes">' + text_yes + '</span>');

    } else {

        $("#text-info").html('<span class="no">' + text_no + '</span>');

    }

}); 

//]]>