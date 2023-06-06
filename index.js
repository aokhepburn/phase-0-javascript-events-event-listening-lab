const input = document.getElementById('button')
function clickAlert() {
    alert("I was clicked!")
}

function addingEventListener() {
input.addEventListener('click', clickAlert)
}

addingEventListener()

//We know that the code works in the console and passes the test, but we should also check our changes to index.js in the browser. Because you've added the addEventListener() function inside the addingEventListener() function, recall that you will need to call the outer function in index.js to execute addEventListener() and activate the event listener. Be sure to refresh the page to load the new code in index.js.


