const mainContent = document.querySelector("#main-content")
function init() {

    document.querySelector("#personal_space").addEventListener("click", () => {
        drawPersonalSpace()
    })
    document.querySelector("#home").addEventListener("click", () => {
        drawHome()
    })
    document.querySelector("#budget_managment").addEventListener("click", () => {
        drawBudgetManagment()
    })
    document.querySelector("#forum").addEventListener("click", () => {
        drawForum()
    })

}

function drawPersonalSpace() {
    // DO A LOT OF THINGS!
    mainContent.innerHTML = ""
    const header = document.createElement("h1")
    header.innerText = "Personal Space"
    mainContent.append(header)
}
function drawHome() {
    // DO A LOT OF THINGS!
    mainContent.innerHTML = ""
    const header = document.createElement("h1")
    header.innerText = "Home"
    mainContent.append(header)
}
function drawBudgetManagment() {
    mainContent.innerHTML = ""
    const header = document.createElement("h1")
    header.innerText = "Budget Managment"

    ///////////// how much money you have to spend? /////////////

    const form = document.createElement("form")
    form.classList.add("form-inline", "row")

    const amountDiv = document.createElement("div")
    amountDiv.classList.add("form-group", "mb-2", "my-amodiv")

    const amountLable = document.createElement("label")
    amountLable.setAttribute("for", "inputAmount")
    amountLable.classList.add("sr-only")
    amountLable.innerText = "Amount"

    const amountInput = document.createElement("input")
    amountInput.setAttribute("type", "number")
    amountInput.classList.add("form-control")
    amountInput.id = "inputAmount"
    amountInput.placeholder = "Amount"

    const myBudget = document.createElement("h2")
    myBudget.innerText = "My Budget from the municipality:"

    const submitAmount = document.createElement("button")
    submitAmount.classList.add("btn", "btn-primary", "mb-2", "my-btn")
    submitAmount.setAttribute("type", "submit")
    submitAmount.innerHTML = "Submit"
    submitAmount.addEventListener("click", () => {
        myBudget.innerText = `My Budget from the municipality: ${amountInput.value}`
    })

    ///////////// how much did you spent & what did you spent it on? /////////////

    const wDYSO = document.createElement("h2")
    wDYSO.innerText = "What did you spend on?"

    const form_2 = document.createElement("form")
    form_2.classList.add("form-inline", "row")

    const spenDiv =  document.createElement("div")
    spenDiv.classList.add("form-group", "mb-2", "my-amodiv")

    const spentLable = document.createElement("label")
    spentLable.setAttribute("for", "spentInput")
    spentLable.classList.add("sr-only")
    spentLable.innerText = "Spent"

    const spentInput = document.createElement("input")
    spentInput.setAttribute("type", "number")
    spentInput.classList.add("form-control")
    spentInput.id = "spentInput"
    spentInput.placeholder = "Spent"

    const onWhatDiv = document.createElement("div")
    onWhatDiv.classList.add("form-group", "mb-2", "my-amodiv")

    const categoryLabel = document.createElement("label")
    categoryLabel.setAttribute("for", "onWhatDiv")
    categoryLabel.classList.add("sr-only")
    categoryLabel.innerText = "Category"

    const selectCategory = document.createElement("select")
    selectCategory.classList.add("form-control")

    const option_1 = document.createElement("option")
    option_1.innerText = "Cleaning materials"
    const option_2 = document.createElement("option")
    option_2.innerText = "Art materials"
    const option_3 = document.createElement("option")
    option_3.innerText = "Enrichment classes and activities"
    const option_4 = document.createElement("option")
    option_4.innerText = "Holidays and anniversaries"
    const option_5 = document.createElement("option")
    option_5.innerText = "Food and consumption"
    const option_6 = document.createElement("option")
    option_6.innerText = "Others"

    let sum = 0
    const sumSpend = document.createElement("h2")
    sumSpend.innerHTML = ""
    const howMuchLeft = document.createElement("h2")
    howMuchLeft.innerHTML = ""

    const submitSpend = document.createElement("button")
    submitSpend.classList.add("btn", "btn-primary", "mb-2", "my-btn")
    submitSpend.setAttribute("type", "submit")
    submitSpend.innerHTML = "Submit"
    submitSpend.addEventListener("click", () => {
        sum = sum + spentInput.value
        sumSpend.innerHTML = `you spent: ${sum}`
        howMuchLeft.innerHTML = `you are left with: ${amountInput.value - sum}`
    })

    amountDiv.append(amountLable, amountInput)
    spenDiv.append(spentLable, spentInput)
    selectCategory.append(option_1, option_2, option_3, option_4, option_5, option_6)
    onWhatDiv.append(categoryLabel, selectCategory)
    form.append(amountDiv, submitAmount)
    form_2.append(spenDiv, submitSpend, onWhatDiv, submitSpend)
    mainContent.append(header, form, myBudget, form_2, sumSpend, howMuchLeft)

    // const image = document.createElement("img")
    // image.src = "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a65e40b950f2df8edbf0e8_Meme_1%20(1).png"
    // mainContent.append(image)
}

function drawForum() {
    mainContent.innerHTML = ""
    const header = document.createElement("h1")
    header.innerText = "Forum"
    mainContent.append(header)
}

init()