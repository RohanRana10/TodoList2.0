const list = document.getElementById('list');

//click listener for toggling task when checked
list.addEventListener('click', function(event){
    if(event.target.className === 'custom-checkbox')
    {
        console.log(event.target);
        let a = event.target.id;
        fetch(`http://localhost:8000/toggle-task/?id=${a}`)  
        .then(function(response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
        
    }
});

const AllTasksList = document.querySelectorAll('.custom-checkbox');
const deleteButton = document.getElementById('delete-task-button');

// click listener for deleting the checked tasks
deleteButton.addEventListener('click', function(event){   
    var checkListArray = [];
    AllTasksList.forEach(function(task){
        if(task.checked)
        {
            checkListArray.push(task.id);
        }
    })
    var url = new URL(window.location.href + 'delete');
    for(let k in checkListArray) {
        url.searchParams.append('id' + k, checkListArray[k])
    }
    fetch(url) 
    .then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error);
    });
    location.reload();
});