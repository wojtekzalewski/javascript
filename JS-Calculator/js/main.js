function showResult() {
    var result = document.getElementById('display').value;
    document.getElementById('display').value = eval(result);
}

function getItem(element) {
    document.getElementById('display').value += element;
}

function clearItem() {
    document.getElementById('display').value = " ";
}