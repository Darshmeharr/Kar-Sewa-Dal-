document.querySelectorAll('.counter').forEach(counter=>{
const target=+counter.dataset.target;
let count=0;
const update=()=>{
count+=Math.ceil(target/100);
if(count<target){counter.innerText=count;requestAnimationFrame(update);}
else{counter.innerText=target+'+';}
};
update();
});