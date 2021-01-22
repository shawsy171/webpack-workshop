module.exports = (buttonName) => {
    const button = document.createElement('button');
    button.textContent = buttonName;

    return button;
}