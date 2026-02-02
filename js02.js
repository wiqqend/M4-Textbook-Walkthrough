/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Jacob
      Date:   1/30/26

      Filename: js02.js
 */

// declare global constats for the applicaiton
const EMP_COST =  100;
const BOOK_COST = 350;
const REPRO_COST =  1250;
const TRAVEL_COST =   2;

// setup the foirm when the page loads
window.addEventListener("load", setupForm);

// set the form's default values
function setupForm() {
      document.getElementById("photoNum").value = 1;
      document.getElementById("photoHrs").value = 2;
      document.getElementById("makeBook").checked = false;
      document.getElementById("photoRights").checked = false;
      document.getElementById("photoDist").value = 0;
}