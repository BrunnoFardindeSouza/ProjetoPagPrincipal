const menu_lateral = [...document.getElementsByClassName('menu_lateral')];
const burguer = document.getElementById('burguer');
const header = document.getElementsByTagName('header')[0];
const nav = document.getElementsByClassName('menu_horizontal')[0];
let topo = nav.offsetTop;

burguer.addEventListener('click',()=>{
    menu_lateral.map((el,i,a)=>{
        if(i == 0){
            if(el.style.display == 'none'){
                el.style.display = 'flex'
            }else{
                el.style.display = 'none'
            }
        }
    })
    
});

window.onresize = ()=>{
    if(window.innerWidth >= 490){
        menu_lateral.map((el,i,a)=>{
            if(i == 0){
                el.style.display = 'none'  
            }
        })
        
    }else{
        menu_lateral.map((el,i,a)=>{
            if(i == 0){
                el.style.display = 'none'  
            }
        })
        
        
    }
    
};

if(window.innerWidth >= 490){
    menu_lateral.map((el,i,a)=>{
        if(i == 0){
            el.style.display = 'none'  
        }
    })
    
}else{
    menu_lateral.map((el,i,a)=>{
        if(i == 0){
            el.style.display = 'flex'  
        }
    })
    
    
}

window.onscroll = ()=>{
    if(window.scrollY >=60){
        nav.classList.add('fixar')

    }else{
        nav.classList.remove('fixar')
    }

};

const done = document.getElementsByClassName('done')[0]
const menu = document.getElementsByClassName('itens_lateral')[0]
const menu1 = menu.lastElementChild
const body = document.getElementsByTagName('body')[0]

menu.lastElementChild.addEventListener('click',()=>{
    
})
done.addEventListener('click',()=>{
    if(window.innerWidth >=490){
        menu1.style.display='none'
        
    }else{
        if(menu1.style.display == 'block'){
            menu1.style.display='none'
            
        }else{
           menu1.style.display='block'               
                    
        }

    }
    
        
    

})