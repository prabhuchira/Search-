console.log('I think its working')


var array = ["google","firefox","firelone","chrome","internet explorer"]
var submit = document.querySelector('#submit');
var resultantArray = [];
var list = document.getElementById('list')

var search = document.querySelector('#search');

var input = "fire"



function getResult(input){
    input = input.toLowerCase();
    array.forEach(cur=> {
      
        // console.log(uppercase);
        if(cur.includes(input)){
            
            resultantArray.push(cur);
        }
       
    });
   
   

}

    function resetArray(){
        resultantArray = [];
        document.querySelector('ul').remove()
        var list = document.createElement('ul');
        var listContainer = document.getElementById('list-container');
        listContainer.appendChild(list);
        
        // list.remove();
        getResult(search.value);  
     
        for(var i=0;i<resultantArray.length;i++){

            var self = i
            var node = document.createElement('li');
          
            var text = document.createTextNode(resultantArray[i]);

         
            node.setAttribute('id','click-' + i);
            console.log(i)
         

                getValue(self,node)
            console.log(node)
            node.appendChild(text);

            
       
           
            document.querySelector('ul').appendChild(node);
        
            
        }
      
      
       
        
        
       
    }


    function getValue(something,element){
        element.addEventListener('click',()=>{
            console.log(document.getElementById('click-' +something ));
        })
    }
   
   
   function eventOccur(event){
        console.log(event);
    }


 