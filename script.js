document.getElementById('lelangForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let itemName = document.getElementById('itemName').value;
    let startingBid = document.getElementById('startingBid').value;
    
    let lelangList = document.getElementById('lelangList');
    
    let newItem = document.createElement('div');
    newItem.innerHTML = `<strong>${itemName}</strong> - Harga Awal: Rp${startingBid}`;
    
    lelangList.appendChild(newItem);
    
    // Clear the form
    document.getElementById('lelangForm').reset();
});
