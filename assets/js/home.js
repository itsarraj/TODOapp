function checkedFunction() {
    // Add a click event listener to the 'deleteButton' element
    document
        .getElementById('deleteButton')
        .addEventListener('click', function () {
            // Get all checked checkboxes with the class 'checkboxDelete'
            let checkValue = document.querySelectorAll(
                '.checkboxDelete:checked'
            ); // getting only checked value
            // Create an empty array to store the unique IDs of the checked items
            let arrcheck = []; // creating the list of checked array
            // Loop through each checked checkbox and get its unique ID attribute
            for (let i of checkValue) {
                let gg = '';
                gg = i.getAttribute('uid'); // getting unique id and pushing into array
                console.log(gg);
                arrcheck.push(gg);
            }
            console.log(arrcheck);
            // If there are no checked items, show an error message and return
            if (arrcheck.length === 0) {
                // checking if array is null the
                console.log('no item is checked');
                return;
            }
            // Send a POST request to delete the selected items using AJAX
            const Http = new XMLHttpRequest();
            const url = '/delete-todo/?id=' + arrcheck;
            Http.open('POST', url);
            Http.send();
            console.log(`printing response`);
        });
}
