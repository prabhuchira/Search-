console.log('I think its working')


var array = ["google","firefox","firelone","chrome","internet explorer"]
var submit = document.querySelector('#submit');
var resultantArray = [];

var search = document.querySelector('#search');

var input = "fire"

function getResult(input){
    console.log(input)
    array.forEach(cur=> {
        if(cur.includes(input)){
            resultantArray.push(cur);
        }
    });

}

    

    submit.addEventListener('click',()=>{
        getResult(search.value);  
        for(var i=0;i<resultantArray.length;i++){
            var node = document.createElement('li');
    
            var text = document.createTextNode(resultantArray[i]);
        
            node.appendChild(text);
            document.querySelector('#list').appendChild(node)

        }
      
    })

