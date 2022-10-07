const con=document.querySelector('.con');

function create(n){
    for(i=0;i<n*n;i++)
    {
        const div=document.createElement('div');
        div.classList.add('box');
        con.appendChild(div);
    }
}

function destroy(n){
    while (con.hasChildNodes()) {
        con.removeChild(con.firstChild);
      }
}

const box=document.querySelector('.box');
con.addEventListener('mouseover',function(e){
    if(e.target.matches('.box'))
        e.target.style.cssText="background-color:black;"; //if want to change color add a variable here and create a function haivng a button
});

const reset=document.querySelector('#reset');
reset.addEventListener('click',()=>window.location.reload())
let initial=16;
create(initial);
const size=document.querySelector('#size');
const dsize=document.querySelector('#displaySize');
let n;

size.addEventListener('click',function(){
    destroy(initial);
    n=prompt('Size : ');
    if(n>=100 || n==''  || !isFinite(n))
        {
            n=prompt('Size should be a number. Not be greater than 100 or empty. Input Size again : ');
        }
    create(n);
    initial=n;
    con.style.gridTemplateColumns=`repeat(${n}, 1fr)`;
    dsize.textContent=`Size is now ${n}X${n}`;
});