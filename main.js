let arr;
arr = localStorage.getItem("Locations")
if(arr = null){
    arr = []
}
arr = JSON.parse(localStorage.getItem("locations"));