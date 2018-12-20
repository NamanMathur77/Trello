
var ul=document.getElementById('list');       //initialising unordered list
var li;






var addButton=document.getElementById('add');      //initialising add button
addButton.addEventListener('click', addItem);     //addItem is a function defined later

var removeButton=document.getElementById('remove');        //initialising remove button
removeButton.addEventListener('click', removeItem);       //removeItem is a function defined later


function removeItem(){
    li=ul.children;                                   //li array contains all the children of ul
    for(let index=0; index<li.length; index++){
        //li is an array which contains all the elements
        //each element in li have children which is either checked or unchecked
        while(li[index] && li[index].children[0].checked){
            //if element is checked it will be removed
            ul.removeChild(li[index])
        }
    }
}

function addItem(){
    var input=document.getElementById('input');//initialising text input
    var item=input.value;
    ul=document.getElementById('list');//ul is the list of todos
    var textnode=document.createTextNode(item);//making a text node from the input from the user

    //if user inputs empty string
    if(item==''){
        return false;
    }


    else{

        //initialising the elements to create
        li=document.createElement('li');
        var checkbox=document.createElement('input')
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');
        var label=document.createElement('label');
        label.setAttribute('for','item');

        //adding the elements in the format ul->li->checkbox,label->textnode
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        //to create a fade in effect
        setTimeout(()=>{
            li.className='visual';
        },100);
        input.value='';
    }
}
