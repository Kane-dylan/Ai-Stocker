// navtoggle
const hiddenNav = document.getElementById('hiddenNav');
function handleMenu() {
    hiddenNav.classList.toggle('hidden'); 
}

// option-toggles
const hiddenOptions = document.getElementById('hiddenOptions');
function actionMenu() {
    hiddenOptions.classList.toggle('hidden'); 
}

// aditional option-toggles
const dropdownImages = document.getElementById('dropdownImages');
function toggleDropdown0() {
    dropdownImages.classList.toggle('hidden');
}
const dropdownVideos = document.getElementById('dropdownVideos');
function toggleDropdown1() {
    dropdownVideos.classList.toggle('hidden');
}
const dropdownGraphics = document.getElementById('dropdownGraphics');
function toggleDropdown2() {
    dropdownGraphics.classList.toggle('hidden');
}