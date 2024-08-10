let eraser_selected = false;
const eraser = document.querySelector('.eraser');
const btn1 = document.querySelector('.orange');
const btn2 = document.querySelector('.black');
const btn3 = document.querySelector('.blue');
const erase = document.querySelector('.erase');
let selected_color = 'white';
const canvas = document.querySelector('.canvas');
  const btn = document.querySelector('.start');
  let entered_num = 2;
  
  let div2 = document.createElement('div');
let selected_ele = null;

  eraser.addEventListener('click',()=>{
    if(eraser_selected ==false){
      eraser_selected =true;
    }
    else{
      eraser_selected =false;
    }
  })
    erase.addEventListener('click',()=>
    {
        canvas.innerHTML = '';
    })
  btn.addEventListener('click',()=>{
    entered_num = prompt('enter the side of square(2-99)')
    if(entered_num>99){
        alert('please select a valid number');
        return;
    }
    canvas.addEventListener('click',ad_divs(entered_num));
    
  }
  )

  function ad_divs(entered_num){
        var child = canvas.lastElementChild;
        while(child){
            canvas.removeChild(child);
            child = canvas.lastElementChild;
        }
        for(i=0;i<entered_num;i++){
            let div = document.createElement('div');
            div.classList.add('row');
            div.style.display = 'flex';
            div.style.flex = '1';
            div.style.backgroundColor = 'white';
            
            canvas.appendChild(div);
            for(j=0;j<entered_num;j++){

                let div2 = document.createElement('div');
                div2.style.flex = '1'
                div.appendChild(div2);
                
                    div2.classList.add('column');
                div2.style.backgroundColor = 'white';
                div2.style.borderStyle = 'solid';
                div2.style.borderColor = 'black';
                
                
                
                
                
                
            
            }
        }
    }
        btn1.addEventListener('click',()=>
        {selected_color = 'orange';
        eraser_selected =false;}
        )
        btn2.addEventListener('click',()=>
        {
          selected_color = 'black';
          eraser_selected =false;
        }
        )
        btn3.addEventListener('click',()=>
        {
          selected_color = 'blue';
          eraser_selected =false;
        }
        )
 
        

        canvas.addEventListener('mouseover', function(e) {
          
            if (e.target.classList.contains('column')) {
              if(eraser_selected ==false){
              e.target.style.backgroundColor = selected_color;}
              else{
                e.target.style.backgroundColor = 'white';
              }
            }
          ; // Adjust the interval delay as per your requirement
        });
        
        
        


        
 
  


 





