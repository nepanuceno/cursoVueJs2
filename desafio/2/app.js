new Vue({
    el:"#app",
    data:{
       valor:0
    },
    methods:{

        clicou(){
            alert(this.valor)
        },
        getEvent(e){
            this.valor = e.target.value
        }
      
    }
});