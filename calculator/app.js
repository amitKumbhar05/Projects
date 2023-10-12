const b1 = document.querySelector('.b1')
const b2 = document.querySelector('.b2')
const b3 = document.querySelector('.b3')
const b4 = document.querySelector('.b4')
const b5 = document.querySelector('.b5')
const b6 = document.querySelector('.b6')
const b7 = document.querySelector('.b7')
const b8 = document.querySelector('.b8')
const b9 = document.querySelector('.b9')
const b0 = document.querySelector('.b0')

// console.log(eval(32 - 10 * 2));

const bs = document.querySelector('.bs')
const bad = document.querySelector('.bad')
const bm = document.querySelector('.bm')
const bp = document.querySelector('.bp')
const bd = document.querySelector('.bd')
const beq = document.querySelector('.beq')
const bdot = document.querySelector('.bdot')
const bdel = document.querySelector('.bdel')
const bac = document.querySelector('.bac')
const inp = document.querySelector('.inp')
inp.setAttribute('disabled','');

let n1 = "";

const calc = ()=>
{
    try
    {
        n1 = eval(inp.value)
        inp.value = n1
        n1 = "";
    }catch(error)
    {
        inp.value = "Error"
        n1 = "";
    }
}

const logic = (n)=>{
    n1 += n;
    inp.value = n1;
}

const remov = ()=>{
    n1="";
    inp.value = "";
}

const bck = ()=>{
    n1 = n1.substring(0,parseInt(n1.length)-1)
    inp.value = n1;
}

const btnani = (b) =>{
    setTimeout(()=>{
        b.style = "";
        },50 )
        b.style.transform = "translateY(10px)";
}

b1.addEventListener('click',()=>{
    logic(1);
    btnani(b1);
})
b2.addEventListener('click',()=>{
    logic(2);
    btnani(b2);
})
b3.addEventListener('click',()=>{
    logic(3);
    btnani(b3);
})
b4.addEventListener('click',()=>{
    logic(4);
    btnani(b4);
})
b5.addEventListener('click',()=>{
    logic(5);
    btnani(b5);
})
b6.addEventListener('click',()=>{
    logic(6);
    btnani(b6);
})
b7.addEventListener('click',()=>{
    logic(7);
    btnani(b7);
})
b8.addEventListener('click',()=>{
    logic(8);
    btnani(b8);
})
b9.addEventListener('click',()=>{
    logic(9);
    btnani(b9);
})
b0.addEventListener('click',()=>{
    logic(0);
    btnani(b0);
})  
bdot.addEventListener('click',()=>{
    logic('.');
    btnani(bdot);
})
beq.addEventListener('click',()=>{
    calc();
    btnani(beq);
})
bm.addEventListener('click',()=>{
    logic(' - ');
    btnani(bm);
})
bad.addEventListener('click',()=>{
    logic(' + ');
    btnani(bad);
})
bs.addEventListener('click',()=>{
    logic(' * ');
    btnani(bs);
})
bd.addEventListener('click',()=>{
    logic(' / ');
    btnani(bd);
})
bp.addEventListener('click',()=>{
    logic(' % ' );
    btnani(bp);
})
bac.addEventListener('click',()=>{
    remov();
    btnani(bac);
})
bdel.addEventListener('click',()=>{
    bck();
    btnani(bdel);
})


