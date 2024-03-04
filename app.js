document.addEventListener('DOMContentLoaded', () => {
    const selectDrop = document.querySelector('#countries');

    fetch('https://restcountries.com/v3.1/all')
        .then(resp => {
            return resp.json();
        })
        .then(data => {
            let output = "";
            data.forEach(country => { // Corrected 'foreach' to 'forEach'
                output += `<option>${country.name.common}</option>`; // Enclosed the template literal in backticks
                console.log(country.name.common);
            });

            selectDrop.innerHTML = output; // Moved this line outside the forEach loop
            console.log(data);
        })
        .catch(err => { // Corrected 'catch' placement
            console.log(err);
        });
});
