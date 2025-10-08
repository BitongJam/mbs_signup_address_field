document.addEventListener("DOMContentLoaded", function () {
    const companyType = document.querySelectorAll('input[name="company_type"]');

    companyType.forEach(function (companyType) {
        companyType.addEventListener('change', function () {
            // alert("company_type: " + companyType.value);
            if (companyType.value == "company") {
                document.querySelector('label[for="name"]').textContent = "Company Name";
                // document.getElementById('name').setAttribute('required', 'required');
            }
            else {
                document.querySelector('label[for="name"]').textContent = "Your Name";
                // document.getElementById('name').removeAttribute('required');
            }
        })


    });

    document.getElementById('phone').addEventListener('input', function (e) {
        

        countrySelect = document.getElementById('country_id');
        let country_code = countrySelect.options[countrySelect.selectedIndex].dataset.code;

        phoneInput = document.getElementById('phone');
        if (['US', 'CA', 'PR'].includes(country_code)) {
            // let value = this.value.replace(/\D/g, ''); // Remove all non-digits
            let value = this.value

            // if (value.length > 3 && value.length <= 6) {
            //     value = value.slice(0, 3) + '-' + value.slice(3);
            // } else if (value.length > 6) {
            //     value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
            // }

            this.value = formatPhone(value);
        }

        function formatPhone(value) {
            value = value.replace(/\D/g, ''); // remove non-digits
            if (value.length > 3 && value.length <= 6) {
                value = value.slice(0, 3) + '-' + value.slice(3);
            } else if (value.length > 6) {
                value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
            }
            return value;
        }


        function applyPhoneFormatting() {
            const selectedOption = countrySelect.options[countrySelect.selectedIndex];
            const country_code = selectedOption.dataset.code;

            if (['US', 'CA', 'PR'].includes(country_code)) {
                phoneInput.value = formatPhone(phoneInput.value);
                phoneInput.setAttribute('required', 'required');
                phoneInput.placeholder = 'XXX-XXX-XXXX';
            } else {
                phoneInput.removeAttribute('required');
                phoneInput.placeholder = 'Enter phone number';
                // optionally leave value as-is without formatting
            }
        }

        document.getElementById('country_id').addEventListener('change', applyPhoneFormatting);

    })

     // ------------------------------
    // Google Places Autocomplete for Street
    // ------------------------------
    const streetInput = document.getElementById('street');
    const googleApiKey = document.getElementById('google_api_key_holder').dataset.googleApiKey; // key from config
    console.log("google api: ", googleApiKey)

    function loadGooglePlacesApi(apiKey, callback) {
        if (!apiKey) {
            console.warn("Google API key missing; autocomplete disabled.");
            return;
        }
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;

        script.onload = () => callback();
        script.onerror = () => console.error("Failed to load Google Places API.");

        document.head.appendChild(script);
    }

    function initAutocomplete() {
        if (!streetInput) return;
        try {
            const autocomplete = new google.maps.places.Autocomplete(streetInput, { types: ['address'] });
            autocomplete.addListener('place_changed', function() {
                const place = autocomplete.getPlace();
                streetInput.value = place.name || place.formatted_address;
            });
        } catch (error) {
            console.error("Google Places Autocomplete failed:", error);
        }
    }

    loadGooglePlacesApi(googleApiKey, initAutocomplete);
    // loadGooglePlacesApi('AIzaSyD4qSeV-g9lq8uwSTFt9POL3Ki9oxpCD54', initAutocomplete);
});