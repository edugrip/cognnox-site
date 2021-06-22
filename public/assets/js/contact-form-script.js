/*==============================================================*/
// Startp Contact Form  JS
/*==============================================================*/
(function($) {
    "use strict"; // Start of use strict
    $("#contactForm").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });


    function submitForm() {
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var msg_subject = $("#msg_subject").val();
        var phone_number = $("#phone_number").val();
        var message = $("#message").val();

        const data_val = { name, email, msg_subject, phone_number, message };
        $.post('/email', data_val, function() {
            console.log('Server recieved our data');
        });
        $.ajax({
            type: "POST",

            data: "&name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&phone_number=" + phone_number + "&message=" + message,
            success: function(data) {
                if (data) {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, data);
                }
            },
            url: "/submit"
        });
    }

    function formSuccess() {
        console.log('hello');
        $("#contactForm")[0].reset();
        // document.getElementById($("#contactForm").reset());

        submitMSG(true, "Message Submitted!");

    }

    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h4 text-start tada animated text-success";
        } else {
            var msgClasses = "h4 text-start text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict