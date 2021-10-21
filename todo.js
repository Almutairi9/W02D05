
const toDos = []; 


const deleteListItem = (item)=>{
    toDos.splice(item,1);
    counter-- 
    $("#pragraph").text(`you have enter ${counter} Tasks !`);
    renderList(); 
}

const editListItem = (item) => {
    if ($('#input1').val().length ) {
        let data = $('#input1').val()
        toDos[item] = {name:data , isCompleted :false }
        renderList();}
    }

    const renderList = ()=> {

        $("#ul").html("")

        for (let index = 0; index < toDos.length; index++) {
            
        $("#uList").append(`<li> ${toDos[index].name} 
</li> <button class=" btn btn-link btn-warning" id="btnEdit-${index}"> edit </button> 
<button class="btnDelelte btn btn-danger btn-link" id="btnDelelte-${index}"> remove </button>`);
            $(`#btnDelelte-${index}`).click(()=>{delItem(index)});
            $(`#btnEdit- ${index}`).click(()=>{editItem(index)});
        } }

        let counter = 0;
        const Counter =() => {
        counter++
        $("#pragraph").text(`You have entered ${counter} Tasks !`);
        } 

const addToList = () => {
 
    if ($('#input').val().length ) {
        let adddata = $('#input').val()
        const object ={ name : adddata , isCompleted :false }
        toDos.push(object)
        Counter();
        renderList(); }
}  

const buttonClearList = ()=> {

    toDos.length = 0;
    counter =0
    $("#pragraph").text(`You have entered ${counter} Tasks !`)
    renderList();
}

 $(`#buttonAdd`).click(addToList);
 $(`#buttonClearList`).click(buttonClearList);

