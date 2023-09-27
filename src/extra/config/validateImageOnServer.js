
// Validation Images on Server
export async function validateImageOnServer(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            if (img.width > 0 && img.height > 0) {
                resolve(true);
            } else {
                resolve(false);
            }
        };
        img.onerror = () => {
            resolve(false);
        };
        img.src = url;
    });
}
