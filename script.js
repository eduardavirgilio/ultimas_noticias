const colorPicker = document.querySelector('#color-picker');
const fontSelect = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPicker = document.querySelector('#article-color-picker');
const news = document.querySelector('.news');
const body = document.querySelector('.page');

// mudar o tema
document.addEventListener('DOMContentLoaded', () =>{
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.body.classList.add(currentTheme);

    document.getElementById('theme-toggle').addEventListener('click', () =>{
        const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});

colorPicker.addEventListener('input', (e) =>{
    const color = e.target.value;
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('primaryColor', color);
});

fontSelect.addEventListener('change', (e) =>{
    const font = e.target.value;
    document.documentElement.style.setProperty('--font-family', font);
    localStorage.setItem('font-select', font);
});

articleColorPicker.addEventListener('input', (e) =>{
    const color = e.target.value;
    localStorage.setItem('cores', color);
    document.querySelectorAll('.news').forEach(noticias => {
    noticias.style.backgroundColor = localStorage.getItem('cores')});
});




