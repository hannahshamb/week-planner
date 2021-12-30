/* global data */
/* exported data */

var $entryForm = document.querySelector('.entry-form');

$entryForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var objectOfValues = {
    day: $entryForm.elements.day.value,
    time: $entryForm.elements.time.value,
    description: $entryForm.elements.description.value
  };
  data.push(objectOfValues);
  $entryForm.reset();
});