import jQuery from 'jquery';

const IMDB_SUGGESTS = "https://v2.sg.media-imdb.com/suggests";

export async function searchSuggest(searchString) {
    const imdbAPI = IMDB_SUGGESTS + "/"+searchString.charAt(0)+"/" + searchString + ".json?";
    
    return new Promise(function (resolve) {
        jQuery.ajax({
            url: imdbAPI,
            dataType: 'jsonp',
            cache: true,
            jsonp: false,
            jsonpCallback: 'imdb$' + searchString
        }).then(function (results) {
            resolve(results)
        })
    })
}

