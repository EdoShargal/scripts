const handleItem = function(itemName){

    const items = itemList.querySelectorAll('.item');
 
    items.forEach(function(item){
        
        if(item.querySelector('.item-name').textContent === itemName){
            //complete event listener
            item.querySelector('.complete-item').addEventListener('click', function(){
                item.querySelector('.item-name').classList.toggle('completed');
                this.classList.toggle('visibility');
            });
            //edit event listener
            item.querySelector('.edit-item').addEventListener('click', function(){
                itemInput.value = itemName;
                itemList.removeChild(item);

                todoItems = todoItems.filter(function(item){
                    return item !== itemName;
                });
            });
            // delete event listener
            item.querySelector('.delete-item').addEventListener('click', function(){
                debugger;
                itemList.removeChild(item);

                todoItems = todoItems.filter(function(item){
                    return item !== itemName;
                });

                showFeedback('item delete', 'success');
            })
        }
    })
}