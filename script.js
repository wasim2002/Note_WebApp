const addBtn = document.querySelector(".add-btn")
const listItems = document.querySelector(".list-items");
(function listItemsBody() {
    listItems.innerHTML = `
    <div class="list-item">
        <input type="text" name="" id="list-title" placeholder="title here kjdkocn osdocvlkcd ofhvnfdav ojadvodjkv m;sljc p'kajvdmv" disabled>
        <div class="body-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum unde molestias at nemo aliquam reprehenderit dolore quibusdam fuga quos, qui natus amet aliquid libero reiciendis enim laboriosam sequi iste accusantium.
        </div>
        <div class="time"><em>Thursday,13/04/2024</em> </div>
    </div>
`
})()
function getLocalStorageItem() {
    return JSON.parse(localStorage.getItem("notes")) || []
}
