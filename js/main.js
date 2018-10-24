(() =>{
    const cars = document.querySelectorAll('.data-ref');
    
    function fetchData(){
        fetch(`./includes/connect.php?carModel=${this.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            parseCarData(data[0]);
        })
        .catch(function(error){
            console.error(error);
        });

    }

    function parseCarData(car){
        //debugger;
        // take the database data and put it on page
        const { modelName, pricing, modelDetails } = car
        document.querySelector(".modelName").textContent = modelName;
        document.querySelector(".priceInfo").textContent =  pricing;
        document.querySelector(".modelDetails").textContent = modelDetails;
        
    };
    cars.forEach(cars => cars.addEventListener("click", fetchData))
    fetchData();
})();