
const newsItems = document.querySelectorAll('.news-item');
const newsDisplay = {
    img: document.getElementById('news-img'),
    title: document.getElementById('news-title'),
    desc: document.getElementById('news-desc'),
    date: document.getElementById('news-date'),
};

const navButtons = {
    left: document.querySelector('.left-btn'),
    right: document.querySelector('.right-btn'),
};


const newsData = [
    {
        title: 'Lorem ipsum dolor sit amet consectetur amet !!', 
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore cumque quisnihil harum, veniam dolores autem magni a ipsam.',
        date: '10 Apr 2024',
        img: 'https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg',
    },
    {
        title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, impedit. Quasi, sit!',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore cumque quisnihil harum, veniam dolores autem magni a ipsam.',
        date: '20 May 2023',
        img: 'https://w0.peakpx.com/wallpaper/42/267/HD-wallpaper-nature-scenery-scenery-nature.jpg',
    },
    {
        
        title: 'Lorem ipsum dolor sit amet.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore cumque quisnihil harum, veniam dolores autem magni a ipsam.',
        date: '13 Nov 2023',
        img: 'https://www.itworx.com/wp-content/uploads/2024/04/3-uai-1080x1080.png',
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore cumque quisnihil harum, veniam dolores autem magni a ipsam.',
        date: '15 Apr 2024',
        img: 'https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg',
    },
];

let currentIndex = 0;

function displayNewsItem(index) {
    const selectedNews = newsData[index];

    newsDisplay.img.src = selectedNews.img;
    newsDisplay.title.textContent = selectedNews.title;
    newsDisplay.desc.textContent = selectedNews.desc;
    newsDisplay.date.textContent = selectedNews.date;

    newsItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

navButtons.left.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    else
        currentIndex = newsItems.length - 1;
    displayNewsItem(currentIndex);
});

navButtons.right.addEventListener('click', () => {
    if (currentIndex < newsItems.length - 1) {
        currentIndex++;
    }
    else
        currentIndex = 0;
    displayNewsItem(currentIndex);
});

newsItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        displayNewsItem(currentIndex);
    });
});

displayNewsItem(currentIndex);
