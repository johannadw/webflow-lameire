import axios from 'axios'

import categories from './data/categories.json'
import purposes from './data/purposes.json'
import purposeStatuses from './data/purposeStatuses.json'
import subcategories from './data/subcategories.json'

let baseURL = 'https://api.whise.eu/';
let user = import.meta.env.VITE_WHISE_USER;
let pass = import.meta.env.VITE_WHISE_PASSWORD;
let clientId = 9654;
let officeId = 12121;

async function getToken() {
    let url = baseURL + 'token';
    let headers = {
        'Content-Type': 'application/json'
    };
    let body = {
        username: user,
        password: pass
    };

    try {
        let resp = await axios.post(url, body,
            {
                headers: headers
            });

        if (resp && resp.data && resp.data.token) {
            return resp.data.token;
        }
    }
    catch (e) {
        console.log(e);
    }
}

async function getClientToken() {
    let url = baseURL + 'v1/admin/clients/token';
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${await getToken()}`
    };
    let body = {
        ClientId: clientId,
        OfficeId: officeId
    };

    try {
        let resp = await axios.post(url, body,
            {
                headers: headers
            });

        if (resp && resp.data && resp.data.token) {
            return resp.data.token;
        }
    }
    catch (e) {
        console.log(e);
    }
}

(async function main() {
    let url = baseURL + 'v1/estates/list';
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${await getClientToken()}`
    };
    let body = {
        Page: {
            Limit: 1,
            Offset: 5
        }
    };

    try {
        let resp = await axios.post(url, body,
            {
                headers: headers
            });

        if (resp && resp.data && resp.data.estates) {
            for (let estate of resp.data.estates) {
                if (!estate) {
                    continue;
                }

                var pandNaam = estate.name
                var pandSlug = estate.id
                var pandThumbnail = estate.pictures[0].urlSmall
                var pandStatus = getPurpose()
                var pandPrijs = estate.price
                var pandAdresLine1
                var pandAdresLine2 = estate.zip + " " + estate.city + " " + estate.country.id
                var pandLocatie = estate.city
                var pandAantalBadkamers = getBathrooms()
                var pandAantalSlaapkamers = getBedrooms()
                var pandDetails
                var pandCategory = getCategory()
                var pandSubcategory = getSubcategory()
                var detailList = []
                if (estate.box) {
                    pandAdresLine1 = estate.address + " " + estate.number + " " + estate.box
                } else {
                    pandAdresLine1 = estate.address + " " + estate.number
                }
                var pandCustomCode = {
                    locationLine1: pandAdresLine1,
                    locationLine2: pandAdresLine2,
                    description: estate.shortDescription[0].content,
                    imageCollection: estate.pictures,
                    thumbnailImage: pandThumbnail,
                    askingPrice: pandPrijs,
                    purposeStatus: getPurposeStatus(),
                    transactionType: pandStatus,
                    propertyType: pandCategory,
                    propertySubtype: pandSubcategory,
                }

                // SORTEER ALLE DETAILS PER CATEGORIE
                pandDetails = estate.details.reduce((pandDetails, detail) => {
                    var group = (pandDetails[detail.group] || [])
                    group.push(detail)
                    pandDetails[detail.group] = group
                    return pandDetails
                }, {})

                console.log(pandDetails)

                function getBathrooms() {
                    if (estate.bathRooms) {
                        pandAantalBadkamers = estate.bathRooms
                    } else {
                        pandAantalBadkamers = 0
                    }
                    return pandAantalBadkamers
                }
                function getBedrooms() {
                    pandAantalSlaapkamers = 0
                    for (let details in estate.details) {
                        if (estate.details[details].id === 78 || estate.details[details].id === 79 || estate.details[details].id === 80 || estate.details[details].id === 81 || estate.details[details].id === 82) {
                            pandAantalSlaapkamers++
                        }
                    }
                    return pandAantalSlaapkamers
                }
                function getSubcategory() {
                    let obj = subcategories.find(o => o.id === estate.subCategory.id)
                    return obj.name
                }
                function getPurpose() {
                    let obj = purposes.find(o => o.id === estate.purpose.id)
                    return obj.name
                }
                function getPurposeStatus() {
                    let obj = purposeStatuses.find(o => o.id === estate.purposeStatus.id)
                    return obj.name
                }
                function getCategory() {
                    let obj = categories.find(o => o.id === estate.category.id)
                    return obj.name
                }

                for (let detail in pandDetails) {
                    if (!detailList.includes(detail)) {
                        detailList.push(detail)
                        const detailObj = pandDetails[detail]
                        pandCustomCode[detail] = detailObj
                        for (const detailItem in detailObj) {
                            //
                        }
                    }
                }
            }
        }
    }
    catch (e) {
        console.log(e);
    }
})();

                // pandCustomCode = {
                //     reference: '',
                //     generalCondition: 'good',
                //     orientationBalcony: '',
                //     negotiatedPrice: '',
                //     costs: '',
                //     taxes: '',
                //     propertyTax: '',
                //     recurringCosts: '',
                //     yearlyBudgetedBuildingCosts: '',
                //     amenities: { attic: 'False', balcony: 'False', basement: 'False', climateControl: 'False', code: 'False', coolingRoom: 'False', displayWindow: 'False', drainage: 'False', exteriorParking: 'False', fence: 'False', fenced: 'False', garden: 'False', guesthouse: 'False', interiorParking: 'False', keyCard: 'False', lift: 'False', manualGate: 'False', parking: 'False', pool: 'False', printCopyArea: 'False', receptionArea: 'False', remoteControl: 'False', roadAccess: 'False', serverRoom: 'False', sewerAccess: 'False', terrace: 'False', utilitiesAccess: 'False', waitingAreaElectricalGate: 'False', waterAccess: 'False' },
                // plotArea: '',
                // preemptiveRight: 'False',
                // urbanPlanningBreach: 'False',
                // subdivisionAuthorisation: 'False',

                // greenhouseEmissions: '',
                // energy: '',
                // omfort: '',
                // ecology: '',
                // security: '',
                // heatingCooling: '',
                // availableFrom: '',
                // negotiator: { firstName: 'Wout', lastName: 'Calsijn' }
                // }

