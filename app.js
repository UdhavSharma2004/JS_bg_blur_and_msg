let fbtn=document.getElementById('initial');
let mbox=document.getElementById('mid');
let mbtn_rev=document.getElementById('midrev');
let ebox=document.getElementById('end');
let ebtn_rev=document.getElementById('endrev');
let b=document.getElementsByTagName('body');

fbtn.addEventListener('click',function(){
    mbox.style.display='block';
})
mbox.addEventListener('click',function(e){
    if(e.target!=mbtn_rev)
    ebox.style.display='block';
})
ebtn_rev.addEventListener('click',function(){
    ebox.style.display='none';
})
mbtn_rev.addEventListener('click',function(){
    mbox.style.display='none';
})