import jQuery from 'jquery';

const API_KEYS = {
    OMDB: "e561e982"
}

const IMDB_SUGGESTS = "https://v2.sg.media-imdb.com/suggests";
const OMDB_API = "http://www.omdbapi.com/?apikey=" + API_KEYS.OMDB;
//+"&i=tt3896198"


export async function searchSuggest(searchString) {
    const imdbAPI = IMDB_SUGGESTS + "/" + searchString.charAt(0) + "/" + searchString + ".json?";
    const promise = new Promise(function (resolve) {
        jQuery.ajax({
            url: imdbAPI,
            dataType: 'jsonp',
            cache: true,
            jsonp: false,
            jsonpCallback: 'imdb$' + encodeURIComponent(searchString)
        }).then(function (results) {
            resolve(results);
        })
    });

    return promise.then(function (result) {
        let filteredResult = [];
        result && result.d && result.d.forEach(i => {
            if (!i.id.includes("/")) {
                filteredResult.push({ label: i.l, id: i.id, details: i.s, img: (i.i !== undefined && i.i.length > 0) ? i.i[0] : undefined })
            }
        });
        return { isSearched: true, searchResult: filteredResult }
    }).catch(error => {
        console.log("searchSuggest error:", error.message);
    });
}

export async function searchOMDB(id) {
    const promise = new Promise(function(resolve) {
        fetch(OMDB_API + "&i=" + id)
        .then(function (response) {
            response.json().then(function (data) {
                resolve(data)
            });
        })
    });

    return promise.then(function (result) {
        return result
    }).catch(error => {
        console.log("searchOMDB error:", error.message);
    });
}
