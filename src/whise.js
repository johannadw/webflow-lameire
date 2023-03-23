import axios from 'axios'
// import cors from 'cors'
// import express from 'express'

// var app = express();
// app.use(
//     cors({
//         origin: "*",
//     })
// );

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
// });
import categories from './data/categories.json'
import purposes from './data/purposes.json'
import purposeStatuses from './data/purposeStatuses.json'
import subcategories from './data/subcategories.json'

const WHISE_BASEURL = 'https://api.whise.eu/';
const WHISE_USER = import.meta.env.VITE_WHISE_USER;
const WHISE_PASS = import.meta.env.VITE_WHISE_PASSWORD;
const CLIENTID = 9654;
const OFFICEID = 12121;

var pandNaam
var pandSlug
var pandThumbnail
var pandStatus
var pandPrijs
var pandAdresLine1
var pandAdresLine2
var pandLocatie
var pandAantalBadkamers
var pandAantalSlaapkamers
var pandCategory
var pandSubcategory
var pandCustomCode

async function whiseGetToken() {
    let url = WHISE_BASEURL + 'token';
    let headers = {
        'Content-Type': 'application/json'
    };
    let body = {
        username: WHISE_USER,
        password: WHISE_PASS
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

async function whiseGetClientToken() {
    let url = WHISE_BASEURL + 'v1/admin/clients/token';
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${await whiseGetToken()}`
    };
    let body = {
        ClientId: CLIENTID,
        OfficeId: OFFICEID
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

async function whiseGetData() {
    let url = WHISE_BASEURL + 'v1/estates/list';
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${await whiseGetClientToken()}`
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
                pandNaam = estate.name
                pandSlug = estate.id
                pandThumbnail = estate.pictures[0].urlSmall
                pandStatus = getPurpose()
                pandPrijs = estate.price
                pandAdresLine2 = estate.zip + " " + estate.city + " " + estate.country.id
                pandLocatie = estate.city
                pandAantalBadkamers = getBathrooms()
                pandAantalSlaapkamers = getBedrooms()
                var pandDetails
                pandCategory = getCategory()
                pandSubcategory = getSubcategory()
                var detailList = []
                if (estate.box) {
                    pandAdresLine1 = estate.address + " " + estate.number + " " + estate.box
                } else {
                    pandAdresLine1 = estate.address + " " + estate.number
                }
                pandCustomCode = {
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

                // pandCustomCode = JSON.stringify(pandCustomCode)

                const fields = {
                    name: pandNaam,
                    status: pandStatus,
                    prijs: pandPrijs,
                    thumbnail: pandThumbnail,
                    'adres-line-1': pandAdresLine1,
                    'adres-line-2': pandAdresLine2,
                    'aantal-slaapkamers': pandAantalSlaapkamers,
                    'aantal-badkamers': pandAantalBadkamers,
                    locatie: pandLocatie,
                    'custom-code': pandCustomCode,
                    _archived: false,
                    _draft: false,
                    slug: pandSlug,
                };

                // for (let details in obj['Building']) {
                //     if (obj['Building'][details].id === 14) {
                //         console.log(obj['Building'][details])
                //     }
                // }
                console.log(fields['custom-code']['Building'])
                // Object.is(fields['custom-code']['Building']['id'], value);

                return { pandNaam, pandSlug, pandThumbnail, pandStatus, pandPrijs, pandAdresLine1, pandAdresLine2, pandLocatie, pandAantalBadkamers, pandAantalSlaapkamers, pandCategory, pandSubcategory, pandCustomCode }
            }
        }
    }
    catch (e) {
        console.log(e);
    }
};

whiseGetData()