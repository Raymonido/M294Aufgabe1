let count = 0;

function addOne() {
  count += 1;
  document.getElementById('counter').textContent = count;
}


function reset() {
    count = 0;
    document.getElementById('counter').textContent = count;
}