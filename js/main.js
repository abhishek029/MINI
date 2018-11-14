(() =>{
    const vm = new IDBCursorWithValue({
        el:"#app",

        data : {
            modelName:"",
            modelDetails:"",
            carModel:""
        },
        mounted: function(){
            console.log('mounted');

            document.querySelector("#F55").click();
        },
        update: function(){
            console.log("updated");
        },
        methods:{
            fetchData(e){
                let targetURL = e.currentTarget.id;
                fetch(`./includes/connect.php?carModel=${targetURL}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // parseCarData(data[0]);
                    const{modelName,pricing,modelDetails} = data[0];
                    this.modelName = modelName;
                    this.pricing = pricingl
                    this.modelDetails = modelDetails;
                    
                })
                .catch(function(error){
                    console.error(error);
                });
            }

        }

    })






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