 <form action="{{ route('financialinfo.store') }}" method="post" id="myform">
                            @csrf </form>
 <script>
        document.addEventListener('DOMContentLoaded', function() {
            //alert("11");
            const form = document.getElementById('myform');
            form.addEventListener('submit', function(event) {
                // Prevent the form from submitting by default.
                event.preventDefault();
                // alert("2222");
                const first_name = document.getElementById('first_name').value;
                const last_name = document.getElementById('last_name').value;
                const email = document.getElementById('email').value;
                const current_home_street_address = document.getElementById('current_home_street_address')
                    .value;
                const home_phone = document.getElementById('home_phone').value;
                const work_phone = document.getElementById('work_phone').value;
                const other_phone = document.getElementById('other_phone').value;


                // Perform client-side validation.
                if (typeof first_name === 'string' && first_name.trim() === '') {
                    document.getElementById('first_name_error').innerText = 'First Name is required.';
                    return;
                } else {
                    document.getElementById('first_name_error').innerText = '';
                }
                if (typeof last_name === 'string' && last_name.trim() === '') {
                    document.getElementById('last_name_error').innerText = 'Last Name is required.';
                    return;
                } else {
                    document.getElementById('last_name_error').innerText = '';
                }

                if (email.trim() === '') {
                    document.getElementById('email_error').innerText = 'Email is required.';
                    return;
                } else {
                    document.getElementById('email_error').innerText = '';
                }

                if (home_phone.trim() === "" && work_phone.trim() === "" && other_phone.trim() === "") {
                    document.getElementById('phone_error').innerText =
                        "At least one phone number is required";
                    return;
                } else {
                    document.getElementById('phone_error').innerText = '';
                }
                // If client-side validation passes, submit the form.
                form.submit();
            });
        });
    </script>