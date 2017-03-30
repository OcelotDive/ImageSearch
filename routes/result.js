var express = require('express');
var http = require('http');
var https = require('https');
var request = require('request');
var router = express.Router();

var fs = require('fs');
//var doc = '';



//var bodyParser = require('body-parser');

/* GET users listing. */

/*var doc = {
    "kind": "customsearch#search",
    "url": {
        "type": "application/json",
        "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&cref={cref?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
    },
    "queries": {
        "request": [
            {
                "title": "Google Custom Search - mars",
                "totalResults": "236000000",
                "searchTerms": "mars",
                "count": 10,
                "startIndex": 1,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "012288148184537330994:se-5v_it3yq",
                "fileType": "jpg",
                "searchType": "image",
                "imgSize": "small"
            }
        ],
        "nextPage": [
            {
                "title": "Google Custom Search - mars",
                "totalResults": "236000000",
                "searchTerms": "mars",
                "count": 10,
                "startIndex": 11,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "012288148184537330994:se-5v_it3yq",
                "fileType": "jpg",
                "searchType": "image",
                "imgSize": "small"
            }
        ]
    },
    "context": {
        "title": "api search"
    },
    "searchInformation": {
        "searchTime": 0.213208,
        "formattedSearchTime": "0.21",
        "totalResults": "236000000",
        "formattedTotalResults": "236,000,000"
    },
    "items": [
        {
            "kind": "customsearch#result",
            "title": "Trump's NASA budget preserves Mars mission, cuts Earth science ...",
            "htmlTitle": "Trump&#39;s NASA budget preserves <b>Mars</b> mission, cuts Earth science ...",
            "link": "https://www.gannett-cdn.com/-mm-/776c8ef986b5d4034ff0552076bf0c0f71009882/c=0-254-2048-1794&r=115x86/local/-/media/2017/03/16/USATODAY/USATODAY/636252399455428099-mars.JPG",
            "displayLink": "www.usatoday.com",
            "snippet": "... preserves Mars mission, ...",
            "htmlSnippet": "... preserves <b>Mars</b> mission, ...",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "http://www.usatoday.com/story/news/politics/2017/03/16/trumps-nasa-budget-preserves-mars-mission-cuts-earth-science-asteroid-trip-education/99227378/",
                "height": 86,
                "width": 114,
                "byteSize": 1983,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRcplg2HL04i_Ajh0pOAyx55-4P2staTJoLknTjZuwhGX8fQXWCqfVQ",
                "thumbnailHeight": 66,
                "thumbnailWidth": 87
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Games from Mars - YouTube",
            "htmlTitle": "Games from <b>Mars</b> - YouTube",
            "link": "https://yt3.ggpht.com/-H2eLHYdfxV4/AAAAAAAAAAI/AAAAAAAAAAA/mzkRUTcPZj4/s100-c-k-no-mo-rj-c0xffffff/photo.jpg",
            "displayLink": "www.youtube.com",
            "snippet": "Games from Mars",
            "htmlSnippet": "Games from <b>Mars</b>",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "https://www.youtube.com/user/UnitedWalkthroughsHD",
                "height": 100,
                "width": 100,
                "byteSize": 6336,
                "thumbnailLink": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRD1VTgkOasuY1-p9TqD4tT08qr3GbN1Bkr5HTBaYG4dm00khnOBOPhMpU",
                "thumbnailHeight": 82,
                "thumbnailWidth": 82
            }
        },
        {
            "kind": "customsearch#result",
            "title": "VR Mars Walk 3D on the App Store",
            "htmlTitle": "VR <b>Mars</b> Walk 3D on the App Store",
            "link": "http://is5.mzstatic.com/image/thumb/Purple82/v4/82/0b/27/820b2716-8512-c057-c183-6407e8305e16/source/100x100bb.jpg",
            "displayLink": "itunes.apple.com",
            "snippet": "Virtual Reality Mars for ...",
            "htmlSnippet": "Virtual Reality <b>Mars</b> for ...",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "https://itunes.apple.com/us/app/vr-mars-walk-3d/id1172742011?mt=8",
                "height": 100,
                "width": 100,
                "byteSize": 3385,
                "thumbnailLink": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFcmCYAHALJmAmGZ1LsTzi7Sw2GvQAWiEiIRyFWA6q6q4CvQqad0prdyo",
                "thumbnailHeight": 82,
                "thumbnailWidth": 82
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Djs From Mars - YouTube",
            "htmlTitle": "Djs From <b>Mars</b> - YouTube",
            "link": "https://yt3.ggpht.com/-XipmiCozQDU/AAAAAAAAAAI/AAAAAAAAAAA/6i3tOdyW6ng/s100-c-k-no-mo-rj-c0xffffff/photo.jpg",
            "displayLink": "www.youtube.com",
            "snippet": "Djs From Mars",
            "htmlSnippet": "Djs From <b>Mars</b>",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "https://www.youtube.com/user/AlienInvasiontv",
                "height": 100,
                "width": 100,
                "byteSize": 5578,
                "thumbnailLink": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPTTmJKZRKEJx9-VDWAZLVcjAKPrVhjXJG3mQzbIm3f4p-xweEgWcssQ",
                "thumbnailHeight": 82,
                "thumbnailWidth": 82
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Mars rover tests driving, drilling and detecting life in Chile's ...",
            "htmlTitle": "<b>Mars</b> rover tests driving, drilling and detecting life in Chile&#39;s ...",
            "link": "https://3c1703fe8d.site.internapcdn.net/newman/csz/news/tmb/2013/nasasmarsrov.jpg",
            "displayLink": "phys.org",
            "snippet": "NASA tests Mars rover ...",
            "htmlSnippet": "NASA tests <b>Mars</b> rover ...",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "https://phys.org/news/2017-03-mars-rover-drilling-life-chile.html",
                "height": 90,
                "width": 90,
                "byteSize": 1983,
                "thumbnailLink": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTaODxRC8KAlNbMHYI4upV-obpqNuu3UttSHOXZOG1BzpHSSODsUJMFTg",
                "thumbnailHeight": 78,
                "thumbnailWidth": 78
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Republic of Mars - YouTube",
            "htmlTitle": "Republic of <b>Mars</b> - YouTube",
            "link": "https://yt3.ggpht.com/-jr2c_Av0q0A/AAAAAAAAAAI/AAAAAAAAAAA/J8U0MwYXKI8/s100-c-k-no-mo-rj-c0xffffff/photo.jpg",
            "displayLink": "www.youtube.com",
            "snippet": "Republic of Mars",
            "htmlSnippet": "Republic of <b>Mars</b>",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "https://www.youtube.com/channel/UCaqFcJZXT-Jbt-Enpg0zbXw",
                "height": 100,
                "width": 100,
                "byteSize": 3689,
                "thumbnailLink": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPPifCwAYLdx0KOf8g0kt2rjFrfgsIyhS1bALGSqNMZ-ROTJ2njYmDzr0",
                "thumbnailHeight": 82,
                "thumbnailWidth": 82
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Mars: 10 amazing facts you probably didn't know about the Red ...",
            "htmlTitle": "<b>Mars</b>: 10 amazing facts you probably didn&#39;t know about the Red ...",
            "link": "http://cdn.images.express.co.uk/img/dynamic/galleries/116x87/219250.jpg",
            "displayLink": "www.express.co.uk",
            "snippet": "6 / 11 Mars has bright polar ...",
            "htmlSnippet": "6 / 11 <b>Mars</b> has bright polar ...",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "http://www.express.co.uk/pictures/galleries/8570/Facts-About-Mars-Solar-System-Space-Galaxy-Planets-Earth-pictures",
                "height": 87,
                "width": 116,
                "byteSize": 2144,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7crN-zvgdWwEQ0RHLQY8AQHYBzYuBvIH5HE57X-hKDSOYFi7XWPSJA",
                "thumbnailHeight": 65,
                "thumbnailWidth": 87
            }
        },
        {
            "kind": "customsearch#result",
            "title": "General Mars - YouTube",
            "htmlTitle": "General <b>Mars</b> - YouTube",
            "link": "https://yt3.ggpht.com/-iuvJ30JGPAo/AAAAAAAAAAI/AAAAAAAAAAA/ToQs_bbhpmk/s100-c-k-no-mo-rj-c0xffffff/photo.jpg",
            "displayLink": "www.youtube.com",
            "snippet": "General Mars",
            "htmlSnippet": "General <b>Mars</b>",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "https://www.youtube.com/channel/UCI-6VSsI8LMRiy2-vLidNkw",
                "height": 100,
                "width": 100,
                "byteSize": 3970,
                "thumbnailLink": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6gZjKV4RrFUDT9zeKwzZe3-oO7shPYepOOR13hmYq2k8g1Em-V9mzmvo",
                "thumbnailHeight": 82,
                "thumbnailWidth": 82
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Human flights to Mars 15 years away - ESA | SBS News",
            "htmlTitle": "Human flights to <b>Mars</b> 15 years away - ESA | SBS News",
            "link": "http://www.sbs.com.au/news/sites/sbs.com.au.news/files/styles/thumb_small/public/images/2/3/230616m_MarsFlight_800x600.jpg?itok=lFZmj8qA",
            "displayLink": "www.sbs.com.au",
            "snippet": "Human flights to Mars 15 years ...",
            "htmlSnippet": "Human flights to <b>Mars</b> 15 years ...",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "http://www.sbs.com.au/news/article/2016/06/23/human-flights-mars-15-years-away-esa",
                "height": 100,
                "width": 100,
                "byteSize": 22056,
                "thumbnailLink": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5vhsqURpWa7aCvMWKgBh3defbsoeTqiaOssvf0rTSYgJhGsaQcVN0_yw",
                "thumbnailHeight": 82,
                "thumbnailWidth": 82
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Goblins From Mars - YouTube",
            "htmlTitle": "Goblins From <b>Mars</b> - YouTube",
            "link": "https://yt3.ggpht.com/-Au_8Tjp5rG0/AAAAAAAAAAI/AAAAAAAAAAA/JtgLOonHuFE/s100-c-k-no-mo-rj-c0xffffff/photo.jpg",
            "displayLink": "www.youtube.com",
            "snippet": "Goblins From Mars",
            "htmlSnippet": "Goblins From <b>Mars</b>",
            "mime": "image/jpeg",
            "image": {
                "contextLink": "https://www.youtube.com/channel/UC7r8TN-JGGrTyCmIJSShdkw",
                "height": 100,
                "width": 100,
                "byteSize": 5814,
                "thumbnailLink": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgoP8dt8-TEGNoY4OnNhkKhNtXaTV527Hm4ZkcDqBYIC91diSg5RxTays",
                "thumbnailHeight": 82,
                "thumbnailWidth": 82
            }
        }
    ]
}*/

router.post('/', function (req, res, next) {
title = '';
titleArr = [];
link = '';
linkArr = [];
thumb = '';
thumbArr = [];
site = '';
siteArr = [];
    
   term = req.body.search;
    resultNum = req.body.selectPicker;
    var url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyClLZtEf4gn792t1TDrH-7FbwHrrOHbmJo&cx=012288148184537330994:se-5v_it3yq&q=' +term+'&searchType=image&fileType=jpg&imgSize=large&alt=json';
    console.log(term);
    console.log(resultNum);
    
    if (prevArr.length !== 10 && prevArr.indexOf(term) === -1) {
        prevArr.push(term);
    }
    else if (prevArr.length === 10 && prevArr.indexOf(term) === -1) {
        prevArr.shift();
        prevArr.unshift(term);
    }

request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  //console.log('body:', body); // Print the HTML for the Google homepage. 
  
   var doc =  JSON.parse(body);
    //console.log("this is the doc" +  doc);
  time = doc.searchInformation.formattedSearchTime + " " + 'Secs';
    timeArr.push(time);
    if(resultNum <= doc.items.length) {
 for (var i = 0; i < resultNum; i++) {
      title = doc.items[i].snippet;
      titleArr.push(title);
     link = doc.items[i].link;
     linkArr.push(link);
     thumb = doc.items[i].image.thumbnailLink;
     thumbArr.push(thumb);
     site = doc.items[i].image.contextLink;
     siteArr.push(site);
    
 }
    }
    else{
         for (var i = 0; i < doc.items.length; i++) {
      title = doc.items[i].snippet;
      titleArr.push(title);
     link = doc.items[i].link;
     linkArr.push(link);
     thumb = doc.items[i].image.thumbnailLink;
     thumbArr.push(thumb);
     site = doc.items[i].image.contextLink;
     siteArr.push(site);
    }
    }
    console.log(doc);
});
    




function display() {
res.render('result', {
    "time": timeArr[0],
    "output": prevArr,
    "link": linkArr,
    "thumb": thumbArr,
    "title": titleArr,
    "site": siteArr
}
          );
}
    setTimeout(display,4000);
});







module.exports = router;
