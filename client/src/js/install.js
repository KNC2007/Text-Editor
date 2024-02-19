const butInstall = document.getElementById('buttonInstall');

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log(event);
    event.preventDefault();
    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});

// Logic for installing the PWA
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    console.log(promptEvent);
    if (!promptEvent) {
        return;
    }
    // Show prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
