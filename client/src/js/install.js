const butInstall = document.getElementById('buttonInstall');
let  installPrompt = null;
// Logic for installing the PWA
// An event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installPrompt = event;
    butInstall.style.display = 'inline-block'
});

// A click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!installPrompt) {
        return;
    }
    const result = await installPrompt.prompt();
    disableInstallPrompt();
});

const disableInstallPrompt = () => {
    installPrompt = null;
    butInstall.style.display = 'none'
}

// An handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    event.preventDefault();
    disableInstallPrompt();
});