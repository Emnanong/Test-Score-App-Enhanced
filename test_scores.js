
let namesArr = ['Ben', 'Joel', 'Judy', 'Anne'];
let scoresArr = [88, 98, 77, 88];

function getAvgScore() {
    let i = 0,
        sum = 0,
        len = scoresArr.length;
    let name = '';
    for (i; i < len; i++) {
        sum += scoresArr[i];
    }
    return sum / len;
}

function getHighScore() {
    let i = 0,
        max = 0,
        len = scoresArr.length;
    let name = '';
    for (i; i < len; i++) {
        if (scoresArr[i] > max) {
            max = scoresArr[i];
            name = namesArr[i];
        }
    }
    return name + ' with score of ' + max;
}

function initializeResults() {
    let results = $('#results');
    let high = getHighScore();
    let avg = getAvgScore().toFixed(1);
    $('#highScore').html(high);
    $('#avgScore').html(avg);
}


function displayScores() {

    let i = 0,
    len = namesArr.length;
  let html = '<table>';
  for (i; i < len; i++) {
    html += '<tr><td>' + namesArr[i] + '</td><td>' + scoresArr[i] + '</td></tr>';
  }
  html += '</table>';
  $('#scores').html(html);
  
  $('#scores table').css('display', 'none');
}
function displayScores() {
    let scores = $('#scores');
    scores.toggle();}

function displayResults() {
    let results = $('#results');
    results.toggle();
}

function insertNewTableElement(newName, newScore) {
   let html = '<tr><td>' + newName + '</td><td>' + newScore + '</td></tr>';
  $('#scores table').append(html);
}

function initializeScoresTable() {
let i = 0,
    len = namesArr.length;
  let html = '<table>';
  for (i; i < len; i++) {
    html += '<tr><td>' + namesArr[i] + '</td><td>' + scoresArr[i] + '</td></tr>';
  }
  html += '</table>';
  $('#scores').html(html);

}


function addScore() {
    let score = $('#score');
    let name = $('#name');
    if (score.val() === '' || name.val() === '') {
        alert('Name and score must have values');
        return;
    }
    if (isNaN(score.val())) {
        alert('Error: Score must be a number');
        return;
    }
    if (!/^[a-zA-Z]+$/.test(name.val())) {
        alert('Error: Name must contain only letters');
        return;
    }
    scoresArr.push(parseInt(score.val()));
    namesArr.push($("#name").val());
    initializeScoresTable();
    score.val('');
    name.val('');
    initializeResults();
    $('#scores').show();
    $('#results').show();
}

window.onload = function () {
    $('#display_results').on('click',  function() {
        displayResults();
    });

    $('#display_scores').on('click',  function() {
        displayScores();
    });
    $('#add').on('click',  function() {
        addScore();
    });

    let name = $('#name');
    let score = $('#score');

    name.focus();
    initializeResults();
    initializeScoresTable();
}
jQuery.extend(jQuery.expr[':'], {
    focusable: function(el, index, selector) {
        return $(el).is('a, button, :input, [tabindex]');
    }
});

//  Changes focus to next input on enter key
$(document).on('keypress', 'input,select', function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        // Get all focusable elements on the page
        let $canfocus = $(':focusable');
        let index = $canfocus.index(this) + 1;
        if (index >= $canfocus.length) index = 0;
        $canfocus.eq(index).focus();
    }
});
