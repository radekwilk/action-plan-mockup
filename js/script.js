// DOM variables
const modalCloseBtn = document.getElementById('modal-close-btn')
const uploadFileBtn = document.querySelectorAll('.add-img')
const tab1 = document.getElementById('tab-btn-1')
const tab2 = document.getElementById('tab-btn-2')
const radioRGM = document.getElementById('rgm-btn')
const radioASL = document.getElementById('asl-btn')



// function to add or remove class from the element given as function argument argument
function addClass(el,myClass) {
    const myElement = document.getElementById(el)
    myElement.classList.toggle(myClass)
}

// add CLICK event listener to the button turning cards
// to show it, the change class needs to be added to the card itself - card ID used to achieved it
document.querySelectorAll('.turn-btn').forEach(btn => {
    btn.addEventListener('click',() => {
        let btnID = btn.id
        btnID = btnID.slice(9)
        addClass(`card-${btnID}`,'change')
    })
})

// add CLICK event listener to the button closing the back of card page
// to hide it, the change class needs to be removed from the given card - card ID used to achieved it
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click',() => {
        let closeBtnID = btn.id
        closeBtnID = closeBtnID.slice(10)
        addClass(`card-${closeBtnID}`, 'change')
    })
})

// Open modal to upload the image
uploadFileBtn.forEach(btn => {
    btn.addEventListener('click',()=> {
        addClass('upload-img-modal','modal-show')
    })
})

// Close the upload img modal
modalCloseBtn.addEventListener('click',()=> {
    console.log('BUtton clicked')
    addClass('upload-img-modal','modal-show')
})

// EXAMPLE
function showTab(tabId) {
    // Remove the active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Add the active class to the clicked button
    event.currentTarget.classList.add('active');

    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Show the content of the clicked tab
    document.getElementById(tabId).classList.add('active');
}


//Show content for the Tab 1 (Food Safety)
tab1.addEventListener('click',()=> {
    showTab('tab1')
})

//Show content for the Tab 2 (Brand Standards)
tab2.addEventListener('click',()=> {
    showTab('tab2')
})

// change the view to the RGM view when the radio button if the RGM button is checked
radioRGM.addEventListener('change',()=> {
    if(radioRGM.checked) {
        const buttonsContainer = document.querySelectorAll('.asl-btns-container')
        buttonsContainer.forEach(box => {
            box.classList.remove('asl-view-btns')
        })
        
        const textArea = document.querySelectorAll('.asl-comment-box')
        textArea.forEach(input => {
            input.setAttribute('disabled','disabled')
        })

        document.querySelectorAll('.rgm-view-setting').forEach(inputBox => {
            inputBox.removeAttribute('disabled')
        })

        document.querySelectorAll('.save-btn').forEach(btn => {
            btn.style.visibility = 'visible'
            btn.style.opacity = 1
        })
    }
})

// change the view to the ASL view when the radio button if the ASL button is checked
radioASL.addEventListener('change',()=> {
    if(radioASL.checked) {
        const buttonsContainer = document.querySelectorAll('.asl-btns-container')
        buttonsContainer.forEach(box => {
        box.classList.add('asl-view-btns')
        })
        const textArea = document.querySelectorAll('.asl-comment-box')
        textArea.forEach(input => {
            input.removeAttribute('disabled')
        })

        document.querySelectorAll('.rgm-view-setting').forEach(inputBox => {
            inputBox.setAttribute('disabled','disabled')
        })

        document.querySelectorAll('.save-btn').forEach(btn => {
            btn.style.visibility = 'hidden'
            btn.style.opacity = 0
        })
    }
})


// Action to take when Approved button was clicked by ASL - FOOD SAFETY section
document.querySelectorAll('.asl-btn-approve').forEach(btn => {
    btn.addEventListener('click',() => {
        let btnID = btn.id
        btnID = btnID.slice(15)
        console.log(`Button id number: ${btnID}`)

        // change the styling of the status box and status bar
        approveButton(btnID,'fs-status', 'approved','fs-status-bar', 'ops-audit-status', 'status-bar')

        // display the message about the status change
        displayMsg(btnID, 'fs-msg', 'This action has been approved *just a test text!', 700, 0.2, 'approved')
    })
})

// Action to take when Send for review button was clicked by ASL - FOOD SAFETY section
document.querySelectorAll('.asl-btn-review').forEach(btn => {
    btn.addEventListener('click',() => {
        let btnID = btn.id
        btnID = btnID.slice(16)
        console.log(`Button id number: ${btnID}`)

        // change the styling of the status box and status bar
        approveButton(btnID,'fs-status', 'unapproved','fs-status-bar', 'ops-audit-status', 'status-bar')

        // display the message about the status change
        displayMsg(btnID, 'fs-msg', 'This action has been send for review * just a test text', 700, 0.2, 'unapproved')
    })
})


// Action to take when Approved button was clicked by ASL - BRAND STANDARD section
document.querySelectorAll('.bs-asl-btn-approve').forEach(btn => {
    btn.addEventListener('click',() => {
        let btnID = btn.id
        btnID = btnID.slice(15)
        console.log(`Button id number: ${btnID}`)
        // change the styling of the status box and status bar
        approveButton(btnID,'bs-status', 'approved','bs-status-bar', 'ops-audit-status', 'status-bar')

        // display the message about the status change
        displayMsg(btnID, 'bs-msg', 'This action has been approved *just a test text', 700, 0.2, 'approved')

    })
})

// Action to take when Send for review button was clicked by ASL - BRAND STANDARD section
document.querySelectorAll('.bs-asl-btn-review').forEach(btn => {
    btn.addEventListener('click',() => {
        let btnID = btn.id
        btnID = btnID.slice(16)
        console.log(`Button id number: ${btnID}`)

        // display the message about the status change
        approveButton(btnID,'bs-status', 'unapproved','bs-status-bar', 'ops-audit-status', 'status-bar')

        // display the message about the status change
        displayMsg(btnID, 'bs-msg', 'This action has been send for review *just a test text, not sending', 700, 0.2, 'unapproved')
    })
})



document.querySelectorAll('.save-btn').forEach(btn=> {
    btn.addEventListener('click', ()=> {
        let btnID = btn.id
    let btnType = btnID.slice(0,2)
    btnID = btnID.slice(12)
    console.log(`This is the type of the button: ${btnType}`)

    displayMsg(btnID, `${btnType}-msg`,'Your actions has been saved successfully *just a test text, not really saving',700, 0.2, 'approved')
    })
    
})

// function to add classes to changes the a status of given action after clicking the button
function approveButton(btnID, htmlEl, htmlText, status, classToAdd_status,classToAdd_statusBar) {
    // changing audit status to given test (approven, unnaproved or in review)
    const auditStatus = document.getElementById(`${htmlEl}-${btnID}`)
    auditStatus.innerText = htmlText
    // then changing the background colour to corresponding status (approved - green, unapproved - red, in review - orange)
    auditStatus.classList.remove(`${classToAdd_status}-approved`, `${classToAdd_status}-unapproved`,`${classToAdd_status}-in-review`)
    auditStatus.classList.add(`${classToAdd_status}-${htmlText}`)

    // then changing the background colour to corresponding status of the status bar (approved - green, unapproved - red, in review - orange)
    const statusBar =  document.getElementById(`${status}-${btnID}`)
    statusBar.classList.remove(`${classToAdd_statusBar}-approved`, `${classToAdd_statusBar}-unapproved`,`${classToAdd_statusBar}-in-review`)
    statusBar.classList.add(`${classToAdd_statusBar}-${htmlText}`)
}

function displayMsg(elID, el, msgText, delTime, opacityStep, status) {
    const msgBox = document.getElementById(`${el}-${elID}`)

    //  set the text accordingly for approved and unapproved 
    msgBox.innerHTML = msgText

    // set the styling for unapproved and approved
    msgBox.classList.remove('msg-approved', 'msg-unapproved')
    msgBox.classList.add(`msg-${status}`)

    // Display the message in full opacity
    msgBox.style.display = 'block'
    msgBox.style.opacity = 1

    // Start reducing opacity every second
    let opacity = 1 // this is initial opacity value

    const fadeOutInterval = setInterval(() => {
        if (opacity > 0) {
            opacity -= opacityStep //reduce opacity by given step
            msgBox.style.opacity = opacity
        } else {
            // When opacity reaches 0, hie the message box and clear the interval
            msgBox.style.display = 'none'
            clearInterval(fadeOutInterval)
        }
    },delTime)
}