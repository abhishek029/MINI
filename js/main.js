(() =>{
    const vm = new Vue({
        el:"#app",

        data : {
            modelName:"",
            modelDetails:"",
            carModel:""
        },
        mounted: function(){
            console.log('mounted');

            this.addPreloader(document.querySelector('.modelInfo'));

            document.querySelector("#F55").click();

        },
        updated: function(){
            console.log("updated");

            let preloader = document.querySelector('.preloader-wrapper');

            setTimeout( function() {
                preloader.classList.add('hidden');
                document.body.appendChild('.preloader');
            },1000)
        },
        methods:{
            addPreloader(patentE){
                parentEl.appendChild(document.querySelector('.preloader-wrapper'));

                bodymovin.loadAnimation({
                    wrapper: document.querySelector('.preloader'),
                    animType : 'svg',
                    loop : true,
                    path : './data/search.json'
                });
            },
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

    cars.forEach(cars => cars.addEventListener("click", fetchData))
    fetchData();
})();