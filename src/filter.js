// Render Locatie filters
var locationsHtml = locationsArray.map(location => `<div class="filter"><div class="filter_check"><label for="${location}" class="filter_label"><input type="checkbox" name="locations" value="${location}" id="${location}" class="filter_icon"><p class="filter_text">${location}</p></label></div></div>`).join(' ')
document.querySelectorAll('.filter_wrapper.locations')[0].innerHTML = locationsHtml
// Render Prijsklasse filters
var rangeArr = []
for (let i = 0; i < priceArr.length; i++) {
    var parse = parseInt(priceArr[i])
    if (parse <= 399) {
        var rangeEl = { id: 1, input: "400", label: "< 400" }
        if (!rangeArr.some(obj => obj.input === "400")) { rangeArr.push(rangeEl) }
    }
    else if (400 <= parse && parse < 500) {
        var rangeEl = { id: 2, input: "400-500", label: "400 - 500" }
        if (!rangeArr.some(obj => obj.input === "400-500")) { rangeArr.push(rangeEl) }
    }
    else if (500 <= parse && parse < 600) {
        var rangeEl = { id: 3, input: "500-600", label: "500 - 600" }
        if (!rangeArr.some(obj => obj.input === "500-600")) { rangeArr.push(rangeEl) }
    }
    else if (600 <= parse && parse < 700) {
        var rangeEl = { id: 4, input: "600-700", label: "600 - 700" }
        if (!rangeArr.some(obj => obj.input === "600-700")) { rangeArr.push(rangeEl) }
    }
    else if (700 <= parse && parse < 800) {
        var rangeEl = { id: 5, input: "700-800", label: "700 - 800" }
        if (!rangeArr.some(obj => obj.input === "700-800")) { rangeArr.push(rangeEl) }
    }
    else if (800 <= parse && parse < 900) {
        var rangeEl = { id: 6, input: "800-900", label: "800 - 900" }
        if (!rangeArr.some(obj => obj.input === "800-900")) { rangeArr.push(rangeEl) }
    }
    else if (900 <= parse && parse < 1000) {
        var rangeEl = { id: 7, input: "900-1000", label: "900 - 1000" }
        if (!rangeArr.some(obj => obj.input === "900-1000")) { rangeArr.push(rangeEl) }
    }
    else if (1000 <= parse && parse < 1500) {
        var rangeEl = { id: 8, input: "1000-1500", label: "1000 - 1500" }
        if (!rangeArr.some(obj => obj.input === "1000-1500")) { rangeArr.push(rangeEl) }
    }
    else if (1500 <= parse && parse < 2000) {
        var rangeEl = { id: 9, input: "1500-2000", label: "1500 - 2000" }
        if (!rangeArr.some(obj => obj.input === "1500-2000")) { rangeArr.push(rangeEl) }
    }
    else if (2000 <= parse && parse < 2500) {
        var rangeEl = { id: 10, input: "2000-2500", label: "2000 - 2500" }
        if (!rangeArr.some(obj => obj.input === "2000-2500")) { rangeArr.push(rangeEl) }
    }
    else if (2500 <= parse && parse < 10000) {
        var rangeEl = { id: 11, input: "2500-10000", label: "2500 - 10000" }
        if (!rangeArr.some(obj => obj.input === "2500-10000")) { rangeArr.push(rangeEl) }
    }
    else if (10000 <= parse && parse < 25000) {
        var rangeEl = { id: 12, input: "10000-25000", label: "10000 - 25000" }
        if (!rangeArr.some(obj => obj.input === "10000-25000")) { rangeArr.push(rangeEl) }
    }
    else if (25000 <= parse && parse < 50000) {
        var rangeEl = { id: 13, input: "25000-50000", label: "25000 - 50000" }
        if (!rangeArr.some(obj => obj.input === "25000-50000")) { rangeArr.push(rangeEl) }
    }
    else if (50000 <= parse && parse < 75000) {
        var rangeEl = { id: 14, input: "50000-75000", label: "50000 - 75000" }
        if (!rangeArr.some(obj => obj.input === "50000-75000")) { rangeArr.push(rangeEl) }
    }
    else if (75000 <= parse && parse < 100000) {
        var rangeEl = { id: 15, input: "75000-100000", label: "75000 - 100000" }
        if (!rangeArr.some(obj => obj.input === "75000-100000")) { rangeArr.push(rangeEl) }
    }
    else if (100000 <= parse && parse < 125000) {
        var rangeEl = { id: 16, input: "100000-125000", label: "100000 - 125000" }
        if (!rangeArr.some(obj => obj.input === "100000-125000")) { rangeArr.push(rangeEl) }
    }
    else if (125000 <= parse && parse < 150000) {
        var rangeEl = { id: 17, input: "125000-150000", label: "125000 - 150000" }
        if (!rangeArr.some(obj => obj.input === "125000-150000")) { rangeArr.push(rangeEl) }
    }
    else if (150000 <= parse && parse < 200000) {
        var rangeEl = { id: 18, input: "150000-200000", label: "150000 - 200000" }
        if (!rangeArr.some(obj => obj.input === "150000-200000")) { rangeArr.push(rangeEl) }
    }
    else if (200000 <= parse && parse < 250000) {
        var rangeEl = { id: 19, input: "200000-2500000", label: "200000 - 2500000" }
        if (!rangeArr.some(obj => obj.input === "200000-2500000")) { rangeArr.push(rangeEl) }
    }
    else if (250000 <= parse && parse < 300000) {
        var rangeEl = { id: 20, input: "250000-300000", label: "250000 - 300000" }
        if (!rangeArr.some(obj => obj.input === "250000-300000")) { rangeArr.push(rangeEl) }
    }
    else if (300000 <= parse && parse < 350000) {
        var rangeEl = { id: 21, input: "300000-350000", label: "300000 - 350000" }
        if (!rangeArr.some(obj => obj.input === "300000-350000")) { rangeArr.push(rangeEl) }
    }
    else if (350000 <= parse && parse < 400000) {
        var rangeEl = { id: 22, input: "350000-400000", label: "350000 - 400000" }
        if (!rangeArr.some(obj => obj.input === "350000-400000")) { rangeArr.push(rangeEl) }
    }
    else if (400000 <= parse && parse < 450000) {
        var rangeEl = { id: 23, input: "400000-450000", label: "400000 - 450000" }
        if (!rangeArr.some(obj => obj.input === "400000-450000")) { rangeArr.push(rangeEl) }
    }
    else if (450000 <= parse && parse < 500000) {
        var rangeEl = { id: 24, input: "450000-500000", label: "450000 - 500000" }
        if (!rangeArr.some(obj => obj.input === "450000-500000")) { rangeArr.push(rangeEl) }
    }
    else if (500000 <= parse && parse < 550000) {
        var rangeEl = { id: 25, input: "500000-550000", label: "500000 - 550000" }
        if (!rangeArr.some(obj => obj.input === "500000-550000")) { rangeArr.push(rangeEl) }
    }
    else if (550000 <= parse && parse < 600000) {
        var rangeEl = { id: 26, input: "550000-600000", label: "550000 - 600000" }
        if (!rangeArr.some(obj => obj.input === "550000-600000")) { rangeArr.push(rangeEl) }
    }
    else if (600000 <= parse && parse < 650000) {
        var rangeEl = { id: 27, input: "600000-650000", label: "600000 - 650000" }
        if (!rangeArr.some(obj => obj.input === "600000-650000")) { rangeArr.push(rangeEl) }
    }
    else if (650000 <= parse && parse < 700000) {
        var rangeEl = { id: 28, input: "650000-700000", label: "650000 - 700000" }
        if (!rangeArr.some(obj => obj.input === "650000-700000")) { rangeArr.push(rangeEl) }
    }
    else if (700000 <= parse && parse < 750000) {
        var rangeEl = { id: 29, input: "700000-750000", label: "700000 - 750000" }
        if (!rangeArr.some(obj => obj.input === "700000-750000")) { rangeArr.push(rangeEl) }
    }
    else if (750000 <= parse && parse < 800000) {
        var rangeEl = { id: 30, input: "750000-800000", label: "750000 - 800000" }
        if (!rangeArr.some(obj => obj.input === "750000-800000")) { rangeArr.push(rangeEl) }
    }
    else if (800000 <= parse && parse < 850000) {
        var rangeEl = { id: 31, input: "800000-850000", label: "800000 - 850000" }
        if (!rangeArr.some(obj => obj.input === "800000-850000")) { rangeArr.push(rangeEl) }
    }
    else if (850000 <= parse && parse < 900000) {
        var rangeEl = { id: 32, input: "850000-900000", label: "850000 - 900000" }
        if (!rangeArr.some(obj => obj.input === "850000-900000")) { rangeArr.push(rangeEl) }
    }
    else if (900000 <= parse && parse < 950000) {
        var rangeEl = { id: 33, input: "900000-950000", label: "900000 - 950000" }
        if (!rangeArr.some(obj => obj.input === "900000-950000")) { rangeArr.push(rangeEl) }
    }
    else if (950000 <= parse && parse < 1000000) {
        var rangeEl = { id: 34, input: "950000-500", label: "950000 - 1000000" }
        if (!rangeArr.some(obj => obj.input === "950000-500")) { rangeArr.push(rangeEl) }
    }
    else {
        var rangeEl = { id: 35, input: "1000000", label: "> 1000000" }
        if (!rangeArr.some(obj => obj.input === "1000000")) { rangeArr.push(rangeEl) }
    }
};
rangeArr.sort((a, b) => a.id - b.id);
var rangeHtml = rangeArr.map(range => `<div class="filter"><div class="filter_check"><label for="${range.input}" class="filter_label"><input type="checkbox" name="prices" value="${range.input}" id="${range.input}" class="filter_icon"><p class="filter_text">${range.label}</p></label></div></div>`).join(' ')
document.querySelectorAll('.filter_wrapper.price')[0].innerHTML = rangeHtml

// Variabelen
var hideElements = []
var propertyCards = document.getElementsByClassName('property-card')
var checkedAll = []
var allLocations = document.querySelectorAll('[name="locations"]')
var allPrices = document.querySelectorAll('[name="prices"]')
var countHidden = document.querySelectorAll(".cms-counter[style='display: block;']").length;

// Filter functies
function checkLocation(checkedEl) {
    checkedAll.push(checkedEl.value)
    hideElements = document.querySelectorAll(`.property-card:not(.${checkedEl.value})`)
    hideElements.forEach((hideElement) => {
        hideElement.parentElement.parentElement.style.display = 'none'
    });
    Object.entries(propertyCards).forEach(propCard => {
        const [key, value] = propCard;
        checkedAll.forEach(checkedClass => {
            if (value.classList.contains(`${checkedClass}`)) {
                value.parentElement.parentElement.style.display = "block"
            }
        })
    })
}
function checkPrice(checkedEl) {
    checkedAll.push(checkedEl.value)
    hideElements = document.querySelectorAll(`.property-card`)
    hideElements.forEach((hideElement) => {
        hideElement.parentElement.parentElement.style.display = 'none'
    });
    Object.entries(propertyCards).forEach(propCard => {
        const [key, value] = propCard;
        checkedAll.forEach(checkedClass => {
            if (value.classList.contains(`${checkedClass}`)) {
                value.parentElement.parentElement.style.display = "block"
            }
        })
    })
}
function uncheckEl(checkedEl) {
    Object.entries(propertyCards).forEach(propCard => {
        const [key, value] = propCard;
        if (value.classList.contains(`${checkedEl.value}`)) {
            value.parentElement.parentElement.style.display = "none"
        }
    })
    // remove checked from checkedAll
    var index = checkedAll.indexOf(checkedEl.value)
    if (index > -1) {
        checkedAll.splice(index, 1)
    }
    if (document.querySelectorAll('input[type="checkbox"]:checked').length == 0) {
        Object.entries(propertyCards).forEach(propCard => {
            const [key, value] = propCard;
            value.parentElement.parentElement.style.display = "block"
        })
    }
    Object.entries(propertyCards).forEach(propCard => {
        const [key, value] = propCard;
        checkedAll.forEach(checkedClass => {
            if (value.classList.contains(`${checkedClass}`)) {
                value.parentElement.parentElement.style.display = "block"
            }
        })
    })
}

// Add eventlisteners
for (let i = 0; i < allLocations.length; i++) {
    allLocations[i].addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            checkLocation(event.currentTarget)
        } else {
            uncheckEl(event.currentTarget)
        }
        countHidden = document.querySelectorAll(".cms-counter[style='display: block;']").length;
        document.getElementById('panden-counter').innerText = countHidden
    })
}
for (let i = 0; i < allPrices.length; i++) {
    allPrices[i].addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            checkPrice(event.currentTarget)
        } else {
            uncheckEl(event.currentTarget)
        }
        countHidden = document.querySelectorAll(".cms-counter[style='display: block;']").length;
        document.getElementById('panden-counter').innerText = countHidden
    })
}
