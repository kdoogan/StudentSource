

$(document).ready(function() {
    $.validator.addMethod("phoneWithCountryCode", function(value, element) {
        // Use a regex pattern to validate the phone number format
        return this.optional(element) || /^\+\d{1,3}\d{3,14}$/.test(value);
    }, "Please enter a valid phone number with country code");

 // Set rules for input to the form

    $("#form").validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
                maxlength: 18
            },
            email: {
                required: true,
                minlength: 11,
                email: true
            },
            phone: {
                required: true,
                phoneWithCountryCode: true,
                minlength: 11
            }
        },

// set messages for incorrect inouts

        messages: {
            name: {
                minlength: "Name must be at least 3 characters"
            },
            email: "Please enter a valid email address",
            phone: {
                required: "A valid mobile number is required",
                phoneWithCountryCode: "Please use a valid country code"
            }
        },

// Show success message and reset the form

        submitHandler: function(form) {  
            $("#success-message").show();
            form.reset(); 
        }
    });
});

