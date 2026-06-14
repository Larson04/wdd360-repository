const baseURL = "https://api.inaturalist.org/v1/";
const searchForm = document.querySelector("#searchForm");

let formData = new FormData(searchForm);

let place = formData.get("searchPlace");

console.log("Place:", place);


async function searchPlace(place) {
    const url = `${baseURL}search?q=${place}&include_taxon_ancestors=false&per_page=5`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const place = e.target.place.value;
    console.log("Place:", place);
    const data = await searchPlace(place);
    console.log("Data:", data);
})

