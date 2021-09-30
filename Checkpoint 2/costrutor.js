
        function Aluno (_nome, _faltas, _notas){
           this.nome = _nome;
           this.faltas = _faltas;
           this.notas = _notas;
           this.mediaAluno = function(){
               let soma = this.notas.reduce(function(acumulador, valorNotas){
                   return acumulador + valorNotas; 
               }) 
               return Number((soma/(this.notas.length)).toFixed(2));
           }
           this.quantFaltas = function(){
               return this.faltas++; 
           }
           
        };
   
        module.exports = Aluno;
     
       