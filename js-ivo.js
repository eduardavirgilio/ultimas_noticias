const colorPicker = document.querySelector('#color-picker');
const fontSelect = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPicker = document.querySelector('#article-color-picker');
const newsArticles = document.querySelectorAll('.news');
const body = document.querySelector('body');


const loadPreferences = () =>{
    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor){
        document.documentElement.style.setProperty('--primary-color', savedColor);
        colorPicker.value = savedColor;
    }

    const savedArticleColor = localStorage.getItem('articleColor');
    if (savedArticleColor){
        newsArticles.forEach(article =>{
            article.style.backgroundColor =  savedArticleColor;
        });
        articleColorPicker.value = savedArticleColor;
    }

    const savedFont = localStorage.getItem('fontFamily');
    if (savedFont){
        document.documentElement.style.setProperty('--font-family', savedFont);
        fontSelect.value = savedFont;
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme == 'dark'){
        body.classList.add('dark');
       themeToggle.innerHTML =  '<span class="material-icons">light_mode</span>'
    }
}

//o elemento eh obrigatorio no foreach, o index (a posição do array) e o próprio array

//o addeventlistener tem que receber uma string e uma função
//o evento eh usado quando vai ocorrer um evento que o usuario vai executar la dentro
//o webstorage obrigatoriamente tem que ser string

colorPicker.addEventListener('input', (e) =>{
    const color = e.target.value; //o target eh o ponto que o mouse ta selecionando, pegando o valor da cor que ele ta em cima
    document.documentElement.style.setProperty('--primary-color', color); //o setProperty coloca o valor do var (a variavel que muda a cor) de forma automatica (primeiro eh a propriedade e dps a cor que o user colocou)
    localStorage.setItem('primaryColor', color); //o primaryColor eh o nome da chave
});

articleColorPicker.addEventListener('input', (e) =>{
    const color = e.target.value;
    newsArticles.forEach(article => {
    article.style.backgroundColor = color});
    localStorage.setItem('articleColor', color);
});

fontSelect.addEventListener('change', (e) =>{
    const font = e.target.value;
    document.documentElement.style.setProperty('--font-family', font);
    localStorage.setItem('fontFamily', font);
});

themeToggle.addEventListener('click', () =>{
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    themeToggle.innerHTML = isDark
    ? '<span class="material-icons">light_mode</span>'
    : '<span class="material-icons">dark_mode</span>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light'); //vai colocar um tema, perguntar eh dark? se for dark, coloca dark, se nao, ao contrario
});

loadPreferences();