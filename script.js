let interviewList = []
let rejectList = []
let currentStatus =''

let total = document.getElementById('totalCount')
let total2 = document.getElementById('total2')
let interviewCount = document.getElementById('interviewCount')
let rejectCount = document.getElementById('rejectCount')

let allFilterBtn = document.getElementById('all-filter-btn')
let interviewFilterBtn = document.getElementById('interview-filter-btn')
let rejectFilterBtn = document.getElementById('reject-filter-btn')

const allSection = document.getElementById('allSection')
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filteredSection')

// Calculating Realtime Changes 

function calculateCount(){
    total.innerText = allSection.children.length
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectList.length

        total2.innerText = allSection.children.length

}
calculateCount()

// Toggling of the featured three buttons 

function toggleStyle(id){
    
    allFilterBtn.classList.add('bg-white','text-black')
    interviewFilterBtn.classList.add('bg-white','text-black')
    rejectFilterBtn.classList.add('bg-white','text-black')

    allFilterBtn.classList.remove('bg-blue-600','text-white')
    interviewFilterBtn.classList.remove('bg-blue-600','text-white')
    rejectFilterBtn.classList.remove('bg-blue-600','text-white')

    const selected = document.getElementById(id)

    selected.classList.remove('bg-white','text-black')
    selected.classList.add('bg-blue-600','text-white')


    currentStatus = id


    if(id == 'interview-filter-btn'){
        allSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderInterview()
    }
    else if(id == 'all-filter-btn'){
        allSection.classList.remove('hidden')
        filterSection.classList.add('hidden')
    }
    else if(id == 'reject-filter-btn'){
        allSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderReject()
    }
    
}

// Delegation of the content based on interview and reject button clicking 

mainContainer.addEventListener('click',function(event){
    if(event.target.classList.contains('interview-btn')){
        const parenNode = event.target.parentNode.parentNode

    const companyName = parenNode.querySelector('.companyName').innerText
    const jobTitle = parenNode.querySelector('.jobTitle').innerText
    const  workplace    = parenNode.querySelector('.workplace').innerText
    const  jobType    = parenNode.querySelector('.jobType').innerText
    const  salary    = parenNode.querySelector('.salary').innerText
    const  condition   = parenNode.querySelector('.condition').innerText
    const  detail   = parenNode.querySelector('.detail').innerText

    parenNode.querySelector('.condition').innerText = 'Interview'

        const cardInfo ={
         companyName,
         jobTitle,
         workplace,
         jobType,
         salary,
         condition : 'Interview',
         detail 
        }
    const jobExist = interviewList.find(item => item.jobTitle == cardInfo.jobTitle)

    if(!jobExist){
        interviewList.push(cardInfo)
    }

    
    rejectList = rejectList.filter(item=> item.jobTitle != cardInfo.jobTitle)
    if(currentStatus == 'reject-filter-btn'){
        renderReject();
    }
    
    calculateCount()
    
    }


    else if(event.target.classList.contains('reject-btn')){
        const parenNode = event.target.parentNode.parentNode

    const companyName = parenNode.querySelector('.companyName').innerText
    const jobTitle = parenNode.querySelector('.jobTitle').innerText
    const  workplace    = parenNode.querySelector('.workplace').innerText
    const  jobType    = parenNode.querySelector('.jobType').innerText
    const  salary    = parenNode.querySelector('.salary').innerText
    const  condition   = parenNode.querySelector('.condition').innerText
    const  detail   = parenNode.querySelector('.detail').innerText

    parenNode.querySelector('.condition').innerText = 'Rejected'

         const cardInfo ={
         companyName,
         jobTitle,
         workplace,
         jobType,
         salary,
         condition : 'Rejected',
         detail 
        }
       
    const jobExist = rejectList.find(item => item.jobTitle == cardInfo.jobTitle)

    if(!jobExist){
        rejectList.push(cardInfo)
    }

    interviewList = interviewList.filter(item=> item.jobTitle != cardInfo.jobTitle)
    if(currentStatus == 'interview-filter-btn'){
        renderInterview();
    }
    
    calculateCount()
    
    }
    
})

// Delete-Btn 
mainContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('btnDelete')){

        const card = event.target.parentNode.parentNode 
        const jobTitle = card.querySelector('.jobTitle').innerText

        interviewList = interviewList.filter(item => item.jobTitle != jobTitle)
        rejectList = rejectList.filter(item => item.jobTitle != jobTitle)

        card.parentNode.removeChild(card) 
        calculateCount()
    }
})

// Content Rendering 
 
function renderInterview(){
        filterSection.innerHTML = ''

        if(interviewList.length == 0){
        filterSection.innerHTML = `
            <div class="text-center my-10">
                <img src="assets/jobs.png" class="mx-auto w-40 mb-4">
                <h1 class=" text-3xl font-bold p-5">No Jobs Available</h1>
                <p class="text-gray-500 text-lg">
                    Check back soon for new job opportunities
                </p>
            </div>
        `
    }


        for(let interview of interviewList){
            let div = document.createElement('div')
            div.className = "jobcard flex justify-between bg-white p-4  my-5 rounded-sm"
            div.innerHTML = `
            <!-- part-1  -->
            <div>
                <div>
                     <p class="companyName text-xl font-bold ">${interview.companyName}</p>
                     <p class="jobTitle text-gray-600">${interview.jobTitle}</p>
                </div>
                <div class="md:flex gap-4 my-4">
                    <p class="workplace px-2">${interview.workplace}</p>
                    <p class="jobType px-2">${interview.jobType}</p>
                    <p class="salary px-2">${interview.salary}</p>
                </div>
                <div class=" mb-4">
                    <p class="condition rounded-sm bg-gray-200 w-35 px-3 py-1">${interview.condition}</p>
                    <p class="detail mt-2">${interview.detail}</p>
                </div>
                <div>
                    <button class="interview-btn px-2 rounded-sm border border-green-500 text-green-500">Interview</button>
                    <button class="reject-btn px-2 rounded-sm border border-red-500 text-red-500">Rejected</button>
                </div>
            </div>
            <!-- part-2  -->
            <div>
                <button class="btnDelete"><i class="fa-solid fa-trash-can"></i>Delete</button>
            </div>
            `
            filterSection.appendChild(div)
        }  

}
function renderReject(){
        filterSection.innerHTML = ''

         if(rejectList.length == 0){
        filterSection.innerHTML = `
            <div class="text-center my-10">
                <img src="assets/jobs.png" class="mx-auto w-40 mb-4">
                <h1 class=" text-3xl font-bold p-5">No Jobs Available</h1>
                <p class="text-gray-500 text-lg">
                    Check back soon for new job opportunities
                </p>
            </div>
        `
    }
       
        for(let reject of rejectList){
            let div = document.createElement('div')
            div.className = "jobcard flex justify-between bg-white p-4  my-5 rounded-sm"
            div.innerHTML = `
            <!-- part-1  -->
            <div>
                <div>
                     <p class="companyName text-xl font-bold ">${reject.companyName}</p>
                     <p class="jobTitle text-gray-600">${reject.jobTitle}</p>
                </div>
                <div class="md:flex gap-4 my-4">
                    <p class="workplace px-2">${reject.workplace}</p>
                    <p class="jobType px-2">${reject.jobType}</p>
                    <p class="salary px-2">${reject.salary}</p>
                </div>
                <div class=" mb-4">
                    <p class="condition rounded-sm bg-gray-200 w-35 px-3 py-1">${reject.condition}</p>
                    <p class="detail mt-2">${reject.detail}</p>
                </div>
                <div>
                    <button class="interview-btn px-2 rounded-sm border border-green-500 text-green-500">Interview</button>
                    <button class="reject-btn px-2 rounded-sm border border-red-500 text-red-500">Rejected</button>
                </div>
            </div>
            <!-- part-2  -->
            <div>
                <button class="btnDelete"><i class="fa-solid fa-trash-can"></i>Delete</button>
            </div>
            `
            filterSection.appendChild(div)
        }  

}

