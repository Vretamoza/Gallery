function createImageItem (item, template) {
    const imageItem = document.createElement('div');
    imageItem.className = "relative bg-white dark:bg-gray-700 dark:text-white/90 rounded-[10px] shadow-xl";
    imageItem.innerHTML = template;

    const imageInfo = imageItem.querySelector('div[data-info]');
    imageInfo.children[0].textContent = item.title;
    imageInfo.children[1].textContent = item.description;

    const deleteButton = imageItem.querySelector('button[data-delete]');
    deleteButton.addEventListener('click', () => deleteImage({ ...item }));

    const image = imageItem.querySelector('img');
    image.src = item.imageURL;
    image.title = item.title;
    image.alt = item.description;

    return imageItem;
}
function partialImages (items, currentPage) {
    const start = (currentPage - 1) * 8;
    const end = start + 8;
    return items.slice(start, end);
}
export function cleanContainer (container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
export function renderImages (template, container) {
    const localItems = IMAGE_ITEMS.items;
    const currentPage = getLocalPage();
    const itemsToDisplay = partialImages(localItems, currentPage);
    itemsToDisplay.forEach(item => {
        const imageItem = createImageItem(item, template);
        container.appendChild(imageItem);
    });
}
export function reloadImages () {
    const container = document.querySelector('main[data-main-content]');
    const template = document.querySelector('template[data-image]').innerHTML;
    cleanContainer(container);
    renderImages(template, container);
}
function deleteImage (imageItem) {
    IMAGE_ITEMS.remove(imageItem);
    reloadImages();
}
