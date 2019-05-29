console.log('I think its working')


var array = ["google","firefox","chrome","internet explorer"]



var input = "fire"

function getResult(input){

    array.forEach(cur=> {
        if(cur.includes(input)){
            console.log(cur)
        }
    });

}

getResult(input);