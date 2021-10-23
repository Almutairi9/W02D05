
const toDos = [] ; 
const DelItem = (item) => 
{
    toDos.splice(item, 1);
    count-- ;
    $("#pragraph").text(`You have enter ${count} tasks`);
    renderList();
}
const EditItem = (item) => {
   if ($('.text1').val().length ) {
       
    let iput3 = $('.text1').val()
    toDos[item] = {name: iput3,isCompleted:false}
   
    renderList();}
}
const renderList = () => 
{  $(".ulist1").html("")
for (let index = 0; index < toDos.length; index++) 
{
        $(".ulist1").append(`<li> ${toDos[index].name}  
    </li> <button class="btn btn-link btn-warning" id="btnEdit-${index}"> Edit </button>
     <button class="btnDel btn btn-danger btn-link" id="btnDel-${index}"> Remove </button>`);
    $(`#btnDel-${index}`).click(()=>{DelItem(index)});
    $(`#btnEdit-${index}`).click(()=>{EditItem(index)});
}  } 

let count = 0 ;
const Count = () => 
{
    count++
    $("#pragraph").text(`You have enter ${count} tasks`);
}

const addToList = () => {
    if ($('.text1').val().length ){
    let inputvalue = $('.text1').val()
    const ob = { name: inputvalue , isCompleted:false }
    toDos.push(ob)
    Count();
    renderList();
} }

const clearList = () => 
{   toDos.length = 0;
    count =0
    $("#pragraph").text(`You have enter ${count} tasks`); 
    renderList(); }

$(".btnA").click(addToList);

$(".btnClear").click(clearList); 