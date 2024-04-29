
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
        img: 'https://t4.ftcdn.net/jpg/06/23/66/03/360_F_623660368_MGRElbKnwsyXi41CIS5hjBLvEG6ffxK8.webp',
    },
    {
        title: 'News Title 2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore cumque quisnihil harum, veniam dolores autem magni a ipsam.',
        date: '20 May 2023',
        img: 'https://t4.ftcdn.net/jpg/04/27/16/05/240_F_427160582_w0D5Z01pVaz32w7JzzNWTtE2n1VvvKmi.jpg',
    },
    {
        title: 'News Title 3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore cumque quisnihil harum, veniam dolores autem magni a ipsam.',
        date: '13 Nov 2023',
        img: 'https://www.itworx.com/wp-content/uploads/2024/04/3-uai-1080x1080.png',
    },
    {
        title: 'News Title 4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore cumque quisnihil harum, veniam dolores autem magni a ipsam.',
        date: '15 Apr 2024',
        img: 'https://www.itworx.com/wp-content/uploads/2024/04/3-uai-1080x1080.png',
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
