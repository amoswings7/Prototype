//all these buttons for about you section on form page
const yesBtn = document.querySelector('.about-person .question div .yes')
const noBtn = document.querySelector('.about-person .no')
const moreQuestions1 = document.querySelector('.about-person> .more-questions1')
const moreQuestions2 = document.querySelector('.about-person> .more-questions2')


//these buttons for your symptons part
const yesBtn2 = document.querySelector('.symptoms .question div .yes')
const noBtn2 = document.querySelector('.symptoms .no')
const moreQuestions1_2 = document.querySelector('.symptoms> .more-questions1')


const submitBtn = document.querySelector('#submit-btn')
const openFormBtn = document.querySelector('.wrapper> .box2> button')
const closeBtn = document.querySelector('.close')
const form = document.querySelector('.form-container')


submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
})
closeBtn.addEventListener('click',()=>{
    // e.preventDefault()
    form.style.display='none'
})
openFormBtn.addEventListener('click',()=>{
    // e.preventDefault()
    form.style.display='flex'
})
// alert('hello')
yesBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    e.target.style.background='royalBlue'
    e.target.style.color='#fff'
    noBtn.style.background='#fff'
    noBtn.style.color='#000'
    moreQuestions2.style.display='none'
    moreQuestions1.style.display='block'
    // alert('yes')
})
noBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    e.target.style.background='royalBlue'
    e.target.style.color='#fff'
    yesBtn.style.background='#fff'
    yesBtn.style.color='#000'
    moreQuestions1.style.display='none'
    moreQuestions2.style.display='block'
    // alert('no')
})

yesBtn2.addEventListener('click',(e)=>{
    e.preventDefault()
    e.target.style.background='royalBlue'
    e.target.style.color='#fff'
    noBtn2.style.background='#fff'
    noBtn2.style.color='#000'
    // moreQuestions2.style.display='none'
    moreQuestions1_2.style.display='block'
    // alert('yes')
})
noBtn2.addEventListener('click',(e)=>{
    e.preventDefault()
    // alert('hhah')
    e.target.style.background='royalBlue'
    e.target.style.color='#fff'
    yesBtn2.style.background='#fff'
    yesBtn2.style.color='#000'
    moreQuestions1_2.style.display='none'
    // moreQuestions2.style.display='block'
    // alert('no')
})