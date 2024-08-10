// Function to toggle visibility of an element
function toggleDetails(elementId){
    var element = document.getElementById(elementId);
    if (element.style.display ==="none")
        {
        element.style.display ="block";
    }
    else{
        element.style.display ="none";
    }
}