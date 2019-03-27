new Vue({
    el:"#app",
    data:{
        nome: 'Paulo Roberto Torres',
        idade: 34,
    },
    methods:{
        multiplica: function(){
            return this.idade * 3
        },
        randomico: function(){
            return (Math.random())
        },
        imagem: function(){
            return 'https://cdn-images-1.medium.com/max/800/1*wqYF-8Dmh7LhtLkKfERc3Q.png'
        }
    }
});