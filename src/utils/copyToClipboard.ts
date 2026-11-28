export function setupCopyToClipboard(buttonSelector: string, textToCopy: string) {
  const buttons = document.querySelectorAll(buttonSelector);

  buttons.forEach((button) => {
    const successMessage = button.parentElement?.querySelector('.copy-success-message');

    button.addEventListener('click', () => {
      navigator.clipboard.writeText(textToCopy).then(() => {
        // show success message
        if (successMessage) {
          successMessage.classList.remove('hidden');
          successMessage.classList.add('visible');

          // hide the message after 1.3 second
          setTimeout(() => {
            successMessage.classList.remove('visible');
            successMessage.classList.add('hidden');
          }, 1300);
        }
      });
    });
  });
}
