
let current = 0;
const steps = document.querySelectorAll('.step');

function nextStep(){
if(current < steps.length-1){
steps[current].classList.remove('active');
current++;
steps[current].classList.add('active');
}
}

document.getElementById('orderForm').addEventListener('submit',function(e){
e.preventDefault();
alert('Pesanan berhasil dibuat!');
});
