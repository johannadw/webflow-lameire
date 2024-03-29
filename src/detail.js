if (obj.videoUrl && obj.virtualTour) {
    document.getElementById('video-tab').style.display = 'block'
    document.getElementById('video-content').style.display = 'block'
    document.getElementById('video-wrapper').style.display = 'block'
    document.getElementById('tour-wrapper').style.display = 'block'
} else if (!obj.videoUrl && obj.virtualTour) {
    document.getElementById('video-tab').style.display = 'block'
    document.getElementById('video-content').style.display = 'block'
    document.getElementById('tour-wrapper').style.display = 'block'
} else if (obj.videoUrl && !obj.virtualTour) {
    document.getElementById('video-tab').style.display = 'block'
    document.getElementById('video-content').style.display = 'block'
    document.getElementById('video-wrapper').style.display = 'block'
} else { }

document.getElementById('bouwjaar').innerText = obj.yearBuilt
var imageContainer = document.getElementsByClassName('detail_list')[0]
var smallImages = document.getElementsByClassName('detail_image-wrapper-small')
for (let i = 0; i < 4; i++) {
    var imageEl = document.createElement("img")
    imageEl.src = obj.imageCollection[i].url
    imageEl.addEventListener("click", function () { openModal(obj.imageCollection[i].url) })
    imageEl.classList.add("detail_image-small")
    smallImages[i].appendChild(imageEl)
}
var allPhotosBtn = document.getElementById('all-photos')
var photosModal = document.getElementById('photos-modal')
var modalMainImage = document.getElementById('photos-modal-main-image')
var modalClose = document.getElementById('modal-close')
var thumbnailImage = document.getElementById('thumbnail-image')
var arrowNext = document.getElementById("modal-arrow-next")
var arrowPrev = document.getElementById("modal-arrow-prev")
var modalBottom = document.getElementById('photos-modal-bottom')

thumbnailImage.addEventListener("click", function () { openModal(thumbnailImage.src) });
allPhotosBtn.addEventListener("click", function () { openModal(false) });
modalClose.addEventListener("click", function () { closeModal() });
arrowNext.addEventListener("click", function () { nextSlide() })

var photosMainImage = document.createElement('img')
photosMainImage.classList.add('detail_modal_top-image')
photosMainImage.src = obj.imageCollection[2].url
modalMainImage.appendChild(photosMainImage)

// Show all bottom images in the modal
for (let i = 0; i < obj.imageCollection.length; i++) {
    var modalBottomImage = document.createElement("img")
    modalBottomImage.src = obj.imageCollection[i].url
    modalBottomImage.addEventListener("click", function () { changeImage(obj.imageCollection[i].url) })
    modalBottomImage.classList.add("detail_modal_bottom-image")
    var modalBottomImageWrapper = document.createElement("div")
    modalBottomImageWrapper.classList.add('detail_modal_bottom-image-wrapper')
    modalBottomImageWrapper.appendChild(modalBottomImage)
    modalBottom.appendChild(modalBottomImageWrapper)
}

function changeImage(imageSrc) {
    photosMainImage.src = imageSrc
}
function openModal(image) {
    // When clicked on an image, set image as main image
    if (image) {
        photosMainImage.src = image
    } else {
        // When clicked on button, set first image as main image
        photosMainImage.src = obj.imageCollection[0].url
    }
    photosModal.style.display = 'grid'
    $('.detail_modal_slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: arrowPrev,
        nextArrow: arrowNext,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    });
}
function closeModal() {
    photosModal.style.display = 'none'
}













// Verantwoordelijke
document.getElementById('realtor-name').innerText = obj.negotiator.firstName
if (obj.negotiator.firstName == 'Wout' || obj.negotiator.lastName == 'Wout') {
    document.getElementById('realtor-image').src = 'https://uploads-ssl.webflow.com/636134ed842a02654a3bbfe4/63b2cdf13b0afb48204ca454_team_wout.png'
} else if (obj.negotiator.firstName == 'Heidi' || obj.negotiator.lastName == 'Heidi') {
    document.getElementById('realtor-image').src = 'https://uploads-ssl.webflow.com/636134ed842a02654a3bbfe4/63b2cdf1dd904499dbfa6b6c_team_heidi.png'
} else if (obj.negotiator.firstName == 'Elke' || obj.negotiator.lastName == 'Elke') {
    document.getElementById('realtor-image').src = 'https://uploads-ssl.webflow.com/636134ed842a02654a3bbfe4/63b2cdf19c269534fde58420_team_elke.png'
} else if (obj.negotiator.firstName == 'Nathalie' || obj.negotiator.lastName == 'Nathalie') {
    document.getElementById('realtor-image').src = 'https://uploads-ssl.webflow.com/636134ed842a02654a3bbfe4/63b2cdf159086b96ae886ddf_team_nathalie.png'
}

if (obj.orientationTerrace) {
    var criterium = document.createElement("p")
    criterium.innerText = 'Orientation terrace'
    var value = document.createElement("p")
    value.innerText = obj.orientationTerrace
    document.getElementById('orientation-terrace').appendChild(criterium)
    document.getElementById('orientation-terrace').appendChild(value)
    document.getElementById('orientation-terrace').style.display = "grid"
}
if (obj.orientationGarden) {
    var criterium = document.createElement("p")
    criterium.innerText = 'Orientation garden'
    var value = document.createElement("p")
    value.innerText = obj.orientationGarden
    document.getElementById('orientation-garden').appendChild(criterium)
    document.getElementById('orientation-garden').appendChild(value)
    document.getElementById('orientation-garden').style.display = "grid"
}
if (obj.orientationBalcony) {
    var criterium = document.createElement("p")
    criterium.innerText = 'Orientation balcony'
    var value = document.createElement("p")
    value.innerText = obj.orientationBalcony
    document.getElementById('orientation-balcony').appendChild(criterium)
    document.getElementById('orientation-balcony').appendChild(value)
    document.getElementById('orientation-balcony').style.display = "grid"
}
if (obj.dpe) {
    var dpeCriterium = document.createElement("p")
    dpeCriterium.innerText = 'DPE'
    var dpeValue = document.createElement("p")
    dpeValue.innerText = obj.dpe
    document.getElementById('dpe').appendChild(dpeCriterium)
    document.getElementById('dpe').appendChild(dpeValue)
    document.getElementById('dpe').style.display = "grid"
}
if (obj.greenhouseEmissions) {
    var greenhouseCriterium = document.createElement("p")
    greenhouseCriterium.innerText = 'DPE'
    var greenhouseValue = document.createElement("p")
    greenhouseValue.innerText = obj.greenhouseEmissions
    document.getElementById('greenhouse').appendChild(greenhouseCriterium)
    document.getElementById('greenhouse').appendChild(greenhouseValue)
    document.getElementById('greenhouse').style.display = "grid"
}
if (obj.co2Emissions) {
    var co2Criterium = document.createElement("p")
    co2Criterium.innerText = 'CO2 Emissions'
    var co2Value = document.createElement("p")
    co2Value.innerText = obj.co2Emissions
    document.getElementById('co2').appendChild(co2Criterium)
    document.getElementById('co2').appendChild(co2Value)
    document.getElementById('co2').style.display = "grid"
}
if (obj.plotArea) {
    var totaleOppCriterium = document.createElement("p")
    totaleOppCriterium.innerText = 'Totale oppervlakte'
    var totaleOppValue = document.createElement("p")
    totaleOppValue.innerText = obj.plotArea + 'm²'
    document.getElementById('totale-opp').appendChild(totaleOppCriterium)
    document.getElementById('totale-opp').appendChild(totaleOppValue)
    document.getElementById('totale-opp').style.display = "grid"
}
if (obj.liveableArea) {
    var bewoonbareOppCriterium = document.createElement("p")
    bewoonbareOppCriterium.innerText = 'Bewoonbare oppervlakte'
    var bewoonbareOppValue = document.createElement("p")
    bewoonbareOppValue.innerText = obj.liveableArea + 'm²'
    document.getElementById('bewoonbare-opp').appendChild(bewoonbareOppCriterium)
    document.getElementById('bewoonbare-opp').appendChild(bewoonbareOppValue)
    document.getElementById('bewoonbare-opp').style.display = "grid"
}
if (obj.epcReference) {
    var epcReferentieCriterium = document.createElement("p")
    epcReferentieCriterium.innerText = 'EPC referentie'
    var epcReferentieValue = document.createElement("p")
    epcReferentieValue.innerText = obj.epcReference
    document.getElementById('epc-ref').appendChild(epcReferentieCriterium)
    document.getElementById('epc-ref').appendChild(epcReferentieValue)
    document.getElementById('epc-ref').style.display = "grid"
}
if (obj.epcLevel) {
    var epcLevelCriterium = document.createElement("p")
    epcLevelCriterium.innerText = 'EPC level'
    var epcLevelValue = document.createElement("p")
    epcLevelValue.innerText = obj.epcLevel
    document.getElementById('epc-level').appendChild(epcLevelCriterium)
    document.getElementById('epc-level').appendChild(epcLevelValue)
    document.getElementById('epc-level').style.display = "grid"
}
if (obj.epcValue) {
    var epcCriterium = document.createElement("p")
    epcCriterium.innerText = 'EPC'
    var epcValue = document.createElement("p")
    epcValue.innerText = obj.epcValue
    document.getElementById('epc').appendChild(epcCriterium)
    document.getElementById('epc').appendChild(epcValue)
    document.getElementById('epc').style.display = "grid"
}
var overstromingsgevoeligheidCriterium = document.createElement("p")
overstromingsgevoeligheidCriterium.innerText = 'Overstromingsgevoeligheid'
var overstromingsgevoeligheidValue = document.createElement("p")
if (obj.floodRiskArea) { overstromingsgevoeligheidValue.innerText = 'Ja' } else { overstromingsgevoeligheidValue.innerText = 'Nee' }
document.getElementById('overstromingsgevoeligheid').appendChild(overstromingsgevoeligheidCriterium)
document.getElementById('overstromingsgevoeligheid').appendChild(overstromingsgevoeligheidValue)
document.getElementById('overstromingsgevoeligheid').style.display = "grid"

var afgebakendeZoneCriterium = document.createElement("p")
afgebakendeZoneCriterium.innerText = 'Afgebakende zone'
var afgebakendeZoneValue = document.createElement("p")
if (obj.amenities.fenced) { afgebakendeZoneValue.innerText = 'Ja' } else { afgebakendeZoneValue.innerText = 'Nee' }
document.getElementById('afgebakende-zone').appendChild(afgebakendeZoneCriterium)
document.getElementById('afgebakende-zone').appendChild(afgebakendeZoneValue)
document.getElementById('afgebakende-zone').style.display = "grid"

var certificaatElektriciteitCriterium = document.createElement("p")
certificaatElektriciteitCriterium.innerText = 'Certificaat elektriciteit'
var certificaatElektriciteitValue = document.createElement("p")
certificaatElektriciteitValue.innerText = ''
document.getElementById('certificaat-elektriciteit').appendChild(certificaatElektriciteitCriterium)
document.getElementById('certificaat-elektriciteit').appendChild(certificaatElektriciteitValue)
document.getElementById('certificaat-elektriciteit').style.display = "grid"

var stedenbouwkundigeBestemmingCriterium = document.createElement("p")
stedenbouwkundigeBestemmingCriterium.innerText = 'Stedenbouwkundige bestemming'
var stedenbouwkundigeBestemmingValue = document.createElement("p")
stedenbouwkundigeBestemmingValue.innerText = ''
document.getElementById('stedenbouwkundige-bestemming').appendChild(stedenbouwkundigeBestemmingCriterium)
document.getElementById('stedenbouwkundige-bestemming').appendChild(stedenbouwkundigeBestemmingValue)
document.getElementById('stedenbouwkundige-bestemming').style.display = "grid"

var dagvaardingStedenbouwkundigeOvertredingCriterium = document.createElement("p")
dagvaardingStedenbouwkundigeOvertredingCriterium.innerText = 'Dagvaarding stedenbouwkundige overtredingen'
var dagvaardingStedenbouwkundigeOvertredingValue = document.createElement("p")
if (obj.urbanPlanningBreach) { dagvaardingStedenbouwkundigeOvertredingValue.innerText = 'Ja' } else { dagvaardingStedenbouwkundigeOvertredingValue.innerText = 'Nee' }
document.getElementById('dagvaarding-overtredingen').appendChild(dagvaardingStedenbouwkundigeOvertredingCriterium)
document.getElementById('dagvaarding-overtredingen').appendChild(dagvaardingStedenbouwkundigeOvertredingValue)
document.getElementById('dagvaarding-overtredingen').style.display = "grid"

var bouwvergunningCriterium = document.createElement("p")
bouwvergunningCriterium.innerText = 'Bouwvergunning'
var bouwvergunningValue = document.createElement("p")
if (obj.Bouwvergunning) { bouwvergunningValue.innerText = 'Ja' } else { bouwvergunningValue.innerText = 'Nee' }
document.getElementById('bouwvergunning').appendChild(bouwvergunningCriterium)
document.getElementById('bouwvergunning').appendChild(bouwvergunningValue)
document.getElementById('bouwvergunning').style.display = "grid"

var verkavelingsvergunningCriterium = document.createElement("p")
verkavelingsvergunningCriterium.innerText = 'Verkavelingsvergunning'
var verkavelingsvergunningValue = document.createElement("p")
if (obj.subdivisionAuthorisation) { verkavelingsvergunningValue.innerText = 'Ja' } else { verkavelingsvergunningValue.innerText = 'Nee' }
document.getElementById('verkavelingsvergunning').appendChild(verkavelingsvergunningCriterium)
document.getElementById('verkavelingsvergunning').appendChild(verkavelingsvergunningValue)
document.getElementById('verkavelingsvergunning').style.display = "grid"

var voorkoopRechtCriterium = document.createElement("p")
voorkoopRechtCriterium.innerText = 'Recht op voorkoop'
var voorkoopRechtValue = document.createElement("p")
if (obj.preemptiveRight) { voorkoopRechtValue.innerText = 'Ja' } else { voorkoopRechtValue.innerText = 'Nee' }
document.getElementById('recht-voorkoop').appendChild(voorkoopRechtCriterium)
document.getElementById('recht-voorkoop').appendChild(voorkoopRechtValue)
document.getElementById('recht-voorkoop').style.display = "grid"

var asbuiltCriterium = document.createElement("p")
asbuiltCriterium.innerText = 'As-built attest'
var asbuiltValue = document.createElement("p")
asbuiltValue.innerText = ''
document.getElementById('as-built').appendChild(asbuiltCriterium)
document.getElementById('as-built').appendChild(asbuiltValue)
document.getElementById('as-built').style.display = "grid"

var energieArray = obj.energy.split(",")
var comfortArray = obj.comfort.split(",")
var veiligheidArray = obj.security.split(",")
var verwarmingArray = obj.heatingCooling.split(",")
var ecologieArray = obj.ecology.split(",")

for (let i = 0; i < energieArray.length; i++) {
    var energieCriterium = document.createElement("p")
    energieCriterium.innerText = 'Energie - ' + energieArray[i]
    var energieValue = document.createElement("p")
    energieValue.innerText = 'Ja'
    var energieEl = document.createElement("div")
    energieEl.classList.add('technisch_grid-row')
    energieEl.appendChild(energieCriterium)
    energieEl.appendChild(energieValue)
    energieEl.style.display = "grid"
    document.getElementById('energie').appendChild(energieEl)
}
for (let i = 0; i < ecologieArray.length; i++) {
    var ecologieCriterium = document.createElement("p")
    ecologieCriterium.innerText = 'Ecologie - ' + ecologieArray[i]
    var ecologieValue = document.createElement("p")
    ecologieValue.innerText = 'Ja'
    var ecologieEl = document.createElement("div")
    ecologieEl.classList.add('technisch_grid-row')
    ecologieEl.appendChild(ecologieCriterium)
    ecologieEl.appendChild(ecologieValue)
    ecologieEl.style.display = "grid"
    document.getElementById('ecologie').appendChild(ecologieEl)
}
for (let i = 0; i < comfortArray.length; i++) {
    var comfortCriterium = document.createElement("p")
    comfortCriterium.innerText = 'Comfort - ' + comfortArray[i]
    var comfortValue = document.createElement("p")
    comfortValue.innerText = 'Ja'
    var comfortEl = document.createElement("div")
    comfortEl.classList.add('technisch_grid-row')
    comfortEl.appendChild(comfortCriterium)
    comfortEl.appendChild(comfortValue)
    comfortEl.style.display = "grid"
    document.getElementById('comfort').appendChild(comfortEl)
}
for (let i = 0; i < veiligheidArray.length; i++) {
    var veiligheidCriterium = document.createElement("p")
    veiligheidCriterium.innerText = 'Veiligheid - ' + veiligheidArray[i]
    var veiligheidValue = document.createElement("p")
    veiligheidValue.innerText = 'Ja'
    var veiligheidEl = document.createElement("div")
    veiligheidEl.classList.add('technisch_grid-row')
    veiligheidEl.appendChild(veiligheidCriterium)
    veiligheidEl.appendChild(veiligheidValue)
    veiligheidEl.style.display = "grid"
    document.getElementById('veiligheid').appendChild(veiligheidEl)
}
for (let i = 0; i < verwarmingArray.length; i++) {
    var verwarmingCriterium = document.createElement("p")
    verwarmingCriterium.innerText = 'Verwarming - ' + verwarmingArray[i]
    var verwarmingValue = document.createElement("p")
    verwarmingValue.innerText = 'Ja'
    var verwarmingEl = document.createElement("div")
    verwarmingEl.classList.add('technisch_grid-row')
    verwarmingEl.appendChild(verwarmingCriterium)
    verwarmingEl.appendChild(verwarmingValue)
    verwarmingEl.style.display = "grid"
    document.getElementById('verwarming').appendChild(verwarmingEl)
}

// Technisch
var beschikbaarVanaf = document.createElement("p")
beschikbaarVanaf.innerText = 'Beschikbaar vanaf: ' + obj.availableFrom

// Algemeen
document.getElementById('referentie').innerText = obj.reference
// document.getElementById('transaction-type').innerText = obj.transactionType
document.getElementById('property-type').innerText = obj.propertyType
document.getElementById('property-subtype').innerText = obj.propertySubtype
document.getElementById('algemene-staat').innerText = obj.generalCondition
document.getElementById('ligging').innerText = obj.locationLine1 + ', ' + obj.locationLine2
document.getElementById('vraagprijs').innerText = '€' + obj.askingPrice

if (obj.floorsNo) {
    var verdiepingAantalCriterium = document.createElement("p")
    verdiepingAantalCriterium.innerText = 'Verdiepingen'
    var verdiepingAantalValue = document.createElement("p")
    verdiepingAantalValue.innerText = obj.floorsNo
    document.getElementById('verdieping-aantal').appendChild(verdiepingAantalCriterium)
    document.getElementById('verdieping-aantal').appendChild(verdiepingAantalValue)
    document.getElementById('verdieping-aantal').style.display = "grid"
}

if (obj.toiletsNo) {
    var toiletAantalCriterium = document.createElement("p")
    toiletAantalCriterium.innerText = 'WCs'
    var toiletAantalValue = document.createElement("p")
    toiletAantalValue.innerText = obj.toiletsNo
    document.getElementById('toilet-aantal').appendChild(toiletAantalCriterium)
    document.getElementById('toilet-aantal').appendChild(toiletAantalValue)
    document.getElementById('toilet-aantal').style.display = "grid"
}

if (obj.bedroomsNo) {
    var slaapkamerAantalCriterium = document.createElement("p")
    slaapkamerAantalCriterium.innerText = 'Slaapkamers'
    var slaapkamerAantalValue = document.createElement("p")
    slaapkamerAantalValue.innerText = obj.bedroomsNo
    document.getElementById('slaapkamer-aantal').appendChild(slaapkamerAantalCriterium)
    document.getElementById('slaapkamer-aantal').appendChild(slaapkamerAantalValue)
    document.getElementById('slaapkamer-aantal').style.display = "grid"
}

if (obj.kitchensNo) {
    var keukenAantalCriterium = document.createElement("p")
    keukenAantalCriterium.innerText = 'Keukens'
    var keukenAantalValue = document.createElement("p")
    keukenAantalValue.innerText = obj.kitchensNo
    document.getElementById('keuken-aantal').appendChild(keukenAantalCriterium)
    document.getElementById('keuken-aantal').appendChild(keukenAantalValue)
    document.getElementById('keuken-aantal').style.display = "grid"
}

if (obj.bathroomsNo) {
    var badkamerAantalCriterium = document.createElement("p")
    badkamerAantalCriterium.innerText = 'Badkamers'
    var badkamerAantalValue = document.createElement("p")
    badkamerAantalValue.innerText = obj.bathroomsNo
    document.getElementById('badkamer-aantal').appendChild(badkamerAantalCriterium)
    document.getElementById('badkamer-aantal').appendChild(badkamerAantalValue)
    document.getElementById('badkamer-aantal').style.display = "grid"
}

if (obj.livingroomsNo) {
    var woonkamerAantalCriterium = document.createElement("p")
    woonkamerAantalCriterium.innerText = 'Woonkamers'
    var woonkamerAantalValue = document.createElement("p")
    woonkamerAantalValue.innerText = obj.livingroomsNo
    document.getElementById('woonkamer-aantal').appendChild(woonkamerAantalCriterium)
    document.getElementById('woonkamer-aantal').appendChild(woonkamerAantalValue)
    document.getElementById('woonkamer-aantal').style.display = "grid"
}

if (obj.amenities.attic == 'True') {
    var zolderCriterium = document.createElement("p")
    var zolderValue = document.createElement("p")
    zolderCriterium.innerText = 'Zolder'
    zolderValue.innerText = 'Ja'
    document.getElementById('zolder').appendChild(zolderCriterium)
    document.getElementById('zolder').appendChild(zolderValue)
    document.getElementById('zolder').style.display = "grid"
}

if (obj.amenities.climateControl == 'True') {
    var klimaatCriterium = document.createElement("p")
    var klimaatValue = document.createElement("p")
    klimaatCriterium.innerText = 'Klimaat'
    klimaatValue.innerText = 'Ja'
    document.getElementById('klimaat').appendChild(klimaatCriterium)
    document.getElementById('klimaat').appendChild(klimaatValue)
    document.getElementById('klimaat').style.display = "grid"
}

if (obj.amenities.code == 'True') {
    var codeCriterium = document.createElement("p")
    var codeValue = document.createElement("p")
    codeCriterium.innerText = 'Code'
    codeValue.innerText = 'Ja'
    document.getElementById('code').appendChild(codeCriterium)
    document.getElementById('code').appendChild(codeValue)
    document.getElementById('code').style.display = "grid"

}

if (obj.amenities.coolingRoom == 'True') {
    var coolingRoomCriterium = document.createElement("p")
    var coolingRoomValue = document.createElement("p")
    coolingRoomCriterium.innerText = 'Cooling Room'
    coolingRoomValue.innerText = 'Ja'
    document.getElementById('cooling-room').appendChild(coolingRoomCriterium)
    document.getElementById('cooling-room').appendChild(coolingRoomValue)
    document.getElementById('cooling-room').style.display = "grid"

}

if (obj.amenities.displayWindow == 'True') {
    var displayWindowCriterium = document.createElement("p")
    var displayWindowValue = document.createElement("p")
    displayWindowCriterium.innerText = 'Display window'
    displayWindowValue.innerText = 'Ja'
    document.getElementById('display-window').appendChild(displayWindowCriterium)
    document.getElementById('display-window').appendChild(displayWindowValue)
    document.getElementById('display-window').style.display = "grid"

}

if (obj.amenities.drainage == 'True') {
    var drainageCriterium = document.createElement("p")
    var drainageValue = document.createElement("p")
    drainageCriterium.innerText = 'Drainage'
    drainageValue.innerText = 'Ja'
    document.getElementById('drainage').appendChild(drainageCriterium)
    document.getElementById('drainage').appendChild(drainageValue)
    document.getElementById('drainage').style.display = "grid"
}

if (obj.amenities.fence == 'True') {
    var fenceCriterium = document.createElement("p")
    var fenceValue = document.createElement("p")
    fenceCriterium.innerText = 'Fence'
    fenceValue.innerText = 'Ja'
    document.getElementById('fence').appendChild(fenceCriterium)
    document.getElementById('fence').appendChild(fenceValue)
    document.getElementById('fence').style.display = "grid"
}

if (obj.amenities.keyCard == 'True') {
    var keycardCriterium = document.createElement("p")
    var keycardValue = document.createElement("p")
    keycardCriterium.innerText = 'Key card'
    keycardValue.innerText = 'Ja'
    document.getElementById('keycard').appendChild(keycardCriterium)
    document.getElementById('keycard').appendChild(keycardValue)
    document.getElementById('keycard').style.display = "grid"
}

if (obj.amenities.manualGate == 'True') {
    var gateCriterium = document.createElement("p")
    var gateValue = document.createElement("p")
    gateCriterium.innerText = 'Manual gate'
    gateValue.innerText = 'Ja'
    document.getElementById('gate').appendChild(gateCriterium)
    document.getElementById('gate').appendChild(gateValue)
    document.getElementById('gate').style.display = "grid"
}

if (obj.amenities.printCopyArea == 'True') {
    var printCopyAreaCriterium = document.createElement("p")
    var printCopyAreaValue = document.createElement("p")
    printCopyAreaCriterium.innerText = 'Print/Copy area'
    printCopyAreaValue.innerText = 'Ja'
    document.getElementById('print-copy-area').appendChild(printCopyAreaCriterium)
    document.getElementById('print-copy-area').appendChild(printCopyAreaValue)
    document.getElementById('print-copy-area').style.display = "grid"
}

if (obj.amenities.receptionArea == 'True') {
    var receptionAreaCriterium = document.createElement("p")
    var receptionAreaValue = document.createElement("p")
    receptionAreaCriterium.innerText = 'Reception area'
    receptionAreaValue.innerText = 'Ja'
    document.getElementById('reception-area').appendChild(receptionAreaCriterium)
    document.getElementById('reception-area').appendChild(receptionAreaValue)
    document.getElementById('reception-area').style.display = "grid"
}

if (obj.amenities.remoteControl == 'True') {
    var remoteControlCriterium = document.createElement("p")
    var remoteControlValue = document.createElement("p")
    remoteControlCriterium.innerText = 'Remote control'
    remoteControlValue.innerText = 'Ja'
    document.getElementById('remote-control').appendChild(remoteControlCriterium)
    document.getElementById('remote-control').appendChild(remoteControlValue)
    document.getElementById('remote-control').style.display = "grid"
}

if (obj.amenities.roadAccess == 'True') {
    var roadAccessCriterium = document.createElement("p")
    var roadAccessValue = document.createElement("p")
    roadAccessCriterium.innerText = 'Road access'
    roadAccessValue.innerText = 'Ja'
    document.getElementById('road-access').appendChild(roadAccessCriterium)
    document.getElementById('road-access').appendChild(roadAccessValue)
    document.getElementById('road-access').style.display = "grid"
}

if (obj.amenities.serverRoom == 'True') {
    var serverRoomCriterium = document.createElement("p")
    var serverRoomValue = document.createElement("p")
    serverRoomCriterium.innerText = 'Server room'
    serverRoomValue.innerText = 'Ja'
    document.getElementById('server-room').appendChild(serverRoomCriterium)
    document.getElementById('server-room').appendChild(serverRoomValue)
    document.getElementById('server-room').style.display = "grid"
}

if (obj.amenities.sewerAccess == 'True') {
    var sewerAccessCriterium = document.createElement("p")
    var sewerAccessValue = document.createElement("p")
    sewerAccessCriterium.innerText = 'Sewer access'
    sewerAccessValue.innerText = 'Ja'
    document.getElementById('sewer-access').appendChild(sewerAccessCriterium)
    document.getElementById('sewer-access').appendChild(sewerAccessValue)
    document.getElementById('sewer-access').style.display = "grid"
}

if (obj.amenities.utilitiesAccess == 'True') {
    var utilitiesAccessCriterium = document.createElement("p")
    var utilitiesAccessValue = document.createElement("p")
    utilitiesAccessCriterium.innerText = 'Utilities access'
    utilitiesAccessValue.innerText = 'Ja'
    document.getElementById('utilities-access').appendChild(utilitiesAccessCriterium)
    document.getElementById('utilities-access').appendChild(utilitiesAccessValue)
    document.getElementById('utilities-access').style.display = "grid"
}

if (obj.amenities.waitingAreaElectricalGate == 'True') {
    var waitingGateCriterium = document.createElement("p")
    var waitingGateValue = document.createElement("p")
    waitingGateCriterium.innerText = 'Waiting gate'
    waitingGateValue.innerText = 'Ja'
    document.getElementById('waiting-gate').appendChild(waitingGateCriterium)
    document.getElementById('waiting-gate').appendChild(waitingGateValue)
    document.getElementById('waiting-gate').style.display = "grid"
}

if (obj.amenities.waterAccess == 'True') {
    var waterAccessCriterium = document.createElement("p")
    var waterAccessValue = document.createElement("p")
    waterAccessCriterium.innerText = 'Water access'
    waterAccessValue.innerText = 'Ja'
    document.getElementById('water-access').appendChild(waterAccessCriterium)
    document.getElementById('water-access').appendChild(waterAccessValue)
    document.getElementById('water-access').style.display = "grid"
}

if (obj.amenities.balcony == 'True') {
    var balkonCriterium = document.createElement("p")
    var balkonValue = document.createElement("p")
    balkonCriterium.innerText = 'Balkon'
    balkonValue.innerText = 'Ja'
    document.getElementById('balkon').appendChild(balkonCriterium)
    document.getElementById('balkon').appendChild(balkonValue)
    document.getElementById('balkon').style.display = "grid"
}

if (obj.amenities.basement == 'True') {
    var kelderCriterium = document.createElement("p")
    var kelderValue = document.createElement("p")
    kelderCriterium.innerText = 'Kelder'
    kelderValue.innerText = 'Ja'
    document.getElementById('kelder').appendChild(kelderCriterium)
    document.getElementById('kelder').appendChild(kelderValue)
    document.getElementById('kelder').style.display = "grid"
}

if (obj.amenities.garden == 'True') {
    var tuinCriterium = document.createElement("p")
    var tuinValue = document.createElement("p")
    tuinCriterium.innerText = 'Tuin'
    tuinValue.innerText = 'Ja'
    document.getElementById('tuin').appendChild(tuinCriterium)
    document.getElementById('tuin').appendChild(tuinValue)
    document.getElementById('tuin').style.display = "grid"
}

if (obj.amenities.guesthouse == 'True') {
    var gastenverblijfCriterium = document.createElement("p")
    var gastenverblijfValue = document.createElement("p")
    gastenverblijfCriterium.innerText = 'Gastenverblijf'
    gastenverblijfValue.innerText = 'Ja'
    document.getElementById('gastenverblijf').appendChild(gastenverblijfCriterium)
    document.getElementById('gastenverblijf').appendChild(gastenverblijfValue)
    document.getElementById('gastenverblijf').style.display = "grid"
}

if (obj.amenities.exteriorParking == 'True') {
    var buitenParkerenCriterium = document.createElement("p")
    var buitenParkerenValue = document.createElement("p")
    buitenParkerenCriterium.innerText = 'Buiten parkeren'
    buitenParkerenValue.innerText = 'Ja'
    document.getElementById('buiten-parkeren').appendChild(buitenParkerenCriterium)
    document.getElementById('buiten-parkeren').appendChild(buitenParkerenValue)
    document.getElementById('buiten-parkeren').style.display = "grid"
}

if (obj.amenities.interiorParking == 'True') {
    var binnenParkerenCriterium = document.createElement("p")
    var binnenParkerenValue = document.createElement("p")
    binnenParkerenCriterium.innerText = 'Binnen parkeren'
    binnenParkerenValue.innerText = 'Ja'
    document.getElementById('binnen-parkeren').appendChild(binnenParkerenCriterium)
    document.getElementById('binnen-parkeren').appendChild(binnenParkerenValue)
    document.getElementById('binnen-parkeren').style.display = "grid"
}

if (obj.amenities.parking == 'True') {
    var overdektParkerenCriterium = document.createElement("p")
    var overdektParkerenValue = document.createElement("p")
    overdektParkerenCriterium.innerText = 'Overdekt parkeren'
    overdektParkerenValue.innerText = 'Ja'
    document.getElementById('overdekte-parking').appendChild(overdektParkerenCriterium)
    document.getElementById('overdekte-parking').appendChild(overdektParkerenValue)
    document.getElementById('overdekte-parking').style.display = "grid"
}

if (obj.amenities.lift == 'True') {
    var liftCriterium = document.createElement("p")
    var liftValue = document.createElement("p")
    liftCriterium.innerText = 'Lift'
    liftValue.innerText = 'Ja'
    document.getElementById('lift').appendChild(liftCriterium)
    document.getElementById('lift').appendChild(liftValue)
    document.getElementById('lift').style.display = "grid"
}

if (obj.amenities.pool == 'True') {
    var zwembadCriterium = document.createElement("p")
    var zwembadValue = document.createElement("p")
    zwembadCriterium.innerText = 'Zwembad'
    zwembadValue.innerText = 'Ja'
    document.getElementById('zwembad').appendChild(zwembadCriterium)
    document.getElementById('zwembad').appendChild(zwembadValue)
    document.getElementById('zwembad').style.display = "grid"
}

if (obj.amenities.terrace == 'True') {
    var terrasCriterium = document.createElement("p")
    var terrasValue = document.createElement("p")
    terrasCriterium.innerText = 'Terras'
    terrasValue.innerText = 'Ja'
    document.getElementById('terras').appendChild(terrasCriterium)
    document.getElementById('terras').appendChild(terrasValue)
    document.getElementById('verdieping-aantal').style.display = "grid"
}