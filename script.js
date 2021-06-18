


let add_box = document.querySelector('.add_box');
let btn_add = document.querySelector('.add');
let btn_addCard = document.querySelector('.add_card')
let cards_container = document.querySelector('.cards');
let AllCards;
let user_memory = [];
let ques;
let ans;
let card_front;
let count = 0;
let card_back;
let pagination_text = document.querySelector('#current')
let pagination = document.querySelector('.pagination')
let noOfmemory = [];
let navigation = document.querySelector('.navigation');
let btn_close = document.querySelector('#hide');
let flip_text = document.querySelector('.flip_text');

btn_close.addEventListener('click',function(){

    add_box.classList.add('hidden');
    navigation.classList.remove('hidden');
    if(user_memory.length!=0)
    {
        flip_text.classList.remove('hidden');
        cards_container.classList.remove('hidden');
        pagination.classList.remove('hidden');
    }
})

// ------------------------- Local Storage ------------------------------------

let showPageAfterReload = (retriveData) => {
   
    pagination.classList.remove('hidden');
    flip_text.classList.remove('hidden');

  /*   retriveData.map((ele,index) => {

        pagination_text.textContent = `${index}/${retriveData.length}`;
    }) */

    pagination_bar();

}



let showRetrieveData = (retriveData) => {
    
    retriveData.forEach(ele => {

        let html = `
        <div class="card">
        <div class="card_front">
              
            <div class="ques">${ele.ques}</div>
             
        </div>
    
        <div class="card_back ">
            
            <div class="answer">${ele.ans}</div>
        </div>
    </div>
        `;

        cards_container.insertAdjacentHTML('beforeend',html);
        AllCards = document.querySelectorAll('.card');

        
        
    })
}

let setLocalStorageData = () => {

    localStorage.setItem('memory', JSON.stringify(user_memory));
    
}

let setLocalStorageNo = () => {
    localStorage.setItem('pageNo', JSON.stringify(noOfmemory));

}

let getLocalStorage = () => {

    let retriveMemory = JSON.parse(localStorage.getItem('memory'));
    let retriveNo = JSON.parse(localStorage.getItem('pageNo'));

    count = retriveNo.length;
    /* noOfmemory = retriveMemory; */
    user_memory = retriveMemory.map((ele) => {
       return ele;
    });

    noOfmemory = retriveNo.map((ele) => {
        return ele;
    })
    /* console.log(noOfmemory); */
    
    if(retriveMemory.length!=0)
    {
        showRetrieveData(retriveMemory);
          showPageAfterReload(retriveMemory);
          cards_container.classList.remove('hidden');
          slideMove();
         
    }




}

// -----------------------------------------

let pagination_bar = () => {
   
    pagination_text.textContent = `${1}/${noOfmemory.length}`
   
}







let addData = (user_data) => {
    
     let html = `
     <div class="card">
     <div class="card_front">
     
         <div class="ques">${user_data.ques}</div>
          
     </div>

     <div class="card_back ">
     
         <div class="answer">${user_data.ans}</div>
     </div>
 </div>
     `;
       

     /*  card_front = document.querySelectorAll('.card_front');
      card_back = document.querySelectorAll('.card_back'); */
     cards_container.insertAdjacentHTML('beforeend',html);
}

btn_add.addEventListener('click',function(){

    add_box.classList.remove('hidden');
    navigation.classList.add('hidden');
    cards_container.classList.add('hidden');
    pagination.classList.add('hidden');
    flip_text.classList.add('hidden');
    

})
    
    
    

btn_addCard.addEventListener('click',function(){

    navigation.classList.remove('hidden');
    
    ques = document.querySelector('.question_text').value;
    ans = document.querySelector('.answer_text').value;

    document.querySelector('.answer_text').value = '';
    document.querySelector('.question_text').value = '';
    
    
    let user_data = {
        ques:ques,
        ans:ans
    } 

    pagination.classList.remove('hidden');

    count++;
    noOfmemory.push(count);

    user_memory.push(user_data);

    setLocalStorageData();
    setLocalStorageNo();

    addData(user_data)

    cards_container.classList.remove('hidden');
    flip_text.classList.remove('hidden');

    add_box.classList.add('hidden');

    // UPdate All CardsSection

    AllCards = document.querySelectorAll('.card');

    // show pagination buttons

    pagination_bar();

    // show slideMove

    slideMove();
})

document.addEventListener('click',function(e) {

    if(e.target.classList.contains('card_front'))
    {
        console.log(e.target);
        let className = e.target.classList.contains('flip')
        if(className)
        {
            e.target.classList.toggle('flip');

       /*      e.target.classList.toggle('deactive');
                e.target.nextElementSibling.classList.toggle('active');   */

                setTimeout(function() {
                    e.target.classList.toggle('deactive');
                    e.target.nextElementSibling.classList.toggle('active');
                },300);
        }

        else{

            e.target.classList.toggle('flip');
            
            setTimeout(function() {
                e.target.classList.toggle('deactive');
                e.target.nextElementSibling.classList.toggle('active');
            },900);
        }
    }

    if(e.target.classList.contains('card_back'))
    {
        console.log('Hell0');
        console.log(e.target.previousElementSibling);
        e.target.classList.add('flip');
        
        setTimeout(function() {
            e.target.classList.add('deactive');
            e.target.previousElementSibling.classList.add('active');
            e.target.previousElementSibling.classList.remove('deactive');
        },900);
    }
})


let shiftSlide = () => {
  
    AllCards.forEach((card,index) => {

          card.style.transform = translateX(`${index*100}%`)
    })

}


// Slides Animation

let pageno = () => {
    pagination_text.textContent = `${currentSlide}/${noOfmemory.length}`

}

let currentSlide = 1;

let slideMove = () => {

    AllCards.forEach((ele,index) => {

        ele.style.transform =`translateX(${index*100}%)`;
    })

}

let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');

let move = (currentSlide) => {

    pageno(currentSlide);
    
    AllCards.forEach((ele,index) => {

        ele.style.transform =`translateX(${(index-currentSlide+1)*100}%)`;
    })
}

let move1 = (currentSlide) => {

    pageno(currentSlide);
    
    AllCards.forEach((ele,index) => {

        ele.style.transform =`translateX(${(index-currentSlide+1)*100}%)`;
    })
}

prevBtn.addEventListener('click',function()

{
    if(noOfmemory.length!=1)
    {

        if(currentSlide>1)
        {
            currentSlide--;
            move1(currentSlide);
        }
    }
})

nextBtn.addEventListener('click',function()

{
    if(currentSlide<noOfmemory.length)
    {
        currentSlide++;
        move(currentSlide);
     }
})


let btnDelete = document.querySelector('.clear');

    btnDelete.addEventListener('click',function()
    {
        user_memory = [];
        noOfmemory = [];
        setLocalStorageData();
        setLocalStorageNo();
        cards_container.classList.add('hidden');
        pagination.classList.add('hidden');
        flip_text.classList.add('hidden');
    })


window.addEventListener('load',getLocalStorage);




