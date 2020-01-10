'use strict';

function getRepo(repoName) {

    fetch(`https://api.github.com/users/${repoName}/repos`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong! Try again.'))
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.js-results').empty();
    for (let i = 0; i < responseJson.length; i++) {
        $('.js-results').append(
            `<li>
                <p><a href="${responseJson[i].svn_url}">${responseJson[i].name}</a></p>
            </li>`
        )
    }
    $('.js-results').removeClass('hidden');
};

function watchForm() {
    $('form').submit(event => {
        const handle = $('#handle').val();
        event.preventDefault();
        getRepo(handle);
    })
}

$(function() {
    watchForm();
})