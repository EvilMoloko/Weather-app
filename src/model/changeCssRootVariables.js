const changeCssRootVariables = (theme) => {
    const root = document.querySelector(':root');

    const components = [
        'body-background',
        'component-background',
        'card-background',
        'text-color'
    ];

    components.forEach(component => {
        root.style.setProperty(`--${component}-default`,`var(--${component}-${theme})`)
    })
}

export default changeCssRootVariables;