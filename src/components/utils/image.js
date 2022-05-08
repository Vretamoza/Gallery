// Image URL
const MAX_WIDTH = 480;
const MAX_HEIGHT = 360;
export async function getImageFile (fileSelector, urlSelector) {
    const file = fileSelector.files[0];
    if (!file) return { url: urlSelector.value };
    return {
        name: file.name,
        url: await fileResize(file),
    };
}
function fileResize (file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.onload = () => resolve(getDataURL(img, file.type));
            img.src = reader.result.toString();
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
function getDataURL (image, imageType) {
    const canvas = document.createElement("canvas");
    const { width, height } = resizeImage(image, canvas);

    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, width, height);
    ctx.imageSmoothingEnabled = false;

    return canvas.toDataURL(imageType);
}
function resizeImage (image, canvas) {
    const ratio = Math.min(MAX_WIDTH / image.width, MAX_HEIGHT / image.height);
    const width = image.width * ratio;
    const height = image.height * ratio;
    canvas.width = width;
    canvas.height = height;
    return { width, height };
}
