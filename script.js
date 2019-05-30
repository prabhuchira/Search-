

console.log('I think its working')


var array = ["google", "firefox", "firelone", "chrome", "internet explorer", "windows", "linux", "apple", "debian"]
var submit = document.querySelector('#submit');
var resultantArray = [];
var list = document.getElementById('list')

var search = document.querySelector('#search');


search.addEventListener('focus',()=>{
    search.style.boxShadow = "2px 2px 5px grey";
    search.style.borderColor = "lightgrey"
})

search.addEventListener('focusout',()=>{
  search.style.boxShadow = "0px 0px 0px"
})

var input = "fire"



function getResult(input) {
    input = input.toLowerCase();
    array.forEach(cur => {

        // console.log(uppercase);
        if (cur.includes(input)) {

            resultantArray.push(cur);
        }

    });



}

document.querySelector('body').addEventListener('click',()=>{
    document.querySelector('ul').style.display = "none"
}
)



function resetArray() {

   
    
  
    resultantArray = [];
    document.querySelector('ul').remove()
    var list = document.createElement('ul');
    var listContainer = document.getElementById('list-container');
    listContainer.appendChild(list);

    // list.remove();
    getResult(search.value);

    for (var i = 0; i < resultantArray.length; i++) {

        var self = i
        var node = document.createElement('li');

        var text = document.createTextNode(resultantArray[i]);


        node.setAttribute('id', 'click-' + i);
        // console.log(i)


        getValue(self, node)
        var list = document.createElement('ul');
        // console.log(node)
        node.appendChild(text);




        document.querySelector('ul').appendChild(node);


    }
  

}


function getValue(something, element) {
   
    element.addEventListener('click', () => {
        var value = document.getElementById('click-' + something).childNodes[0].data
        // console.log(document.getElementById('click-' + something).childNodes[0].data);
        search.value = value;
        // document.getElementById('main-heading').innerText = value;
    })
    
}


function eventOccur(event) {
    // console.log(event);
}


