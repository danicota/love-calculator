const loveForm = document.getElementById("love-form");

window.addEventListener("load", function(){
    console.log("Ready!");


    function getPercentage(f,s){

        
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${f}&sname=${s}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "14daa21aadmsha4d4212049505eap19f997jsn09887971ae50",
                "x-rapidapi-host": "love-calculator.p.rapidapi.com"
            }
        })
        .then((response) => response.json())
        .then(response => {       
            const result = document.querySelector(".res");
            result.innerHTML = ``;
            const pElem = document.createElement('p');
            pElem.innerHTML = `First lover: ${f} <br> Second Lover: ${s} <br> Love Percentage: ${response.percentage}`;
            result.append(pElem)
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });  
    }

    loveForm.addEventListener("submit", function(event) {
        const fname = document.getElementById("first-lover")
        const sname = document.getElementById("second-lover")
        console.log(fname.value, sname.value)
        // const formData = new FormData(loveForm)
        // const fData = JSON.stringify(Object.fromEntries(formData));
        // console.log(fData);
        event.preventDefault();
        getPercentage(fname.value,sname.value);
    })


    // getPercentage();
});
