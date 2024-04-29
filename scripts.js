
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
        title: 'News Title 1 News Title 1 News Title 1 News Title 1',
        desc: 'News description for the first item goes here.',
        date: 'Date: YYYY-MM-DD',
        img: 'https://www.itworx.com/wp-content/uploads/2024/04/3-uai-1080x1080.png',
    },
    {
        title: 'News Title 2',
        desc: 'News description for the second item goes here.',
        date: 'Date: YYYY-MM-DD',
        img: 'https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/70153198_10157194994225236_4869797532688973824_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFmWL-XVMg6pv_UH5XVZaG5A33trcAtYQoDfe2twC1hCrDPs59SEewyTpCQfQu3B2p4UR5oCIJYffVmTbP1qqn7&_nc_ohc=P-08bJ1OsyoAb63XdVz&_nc_ht=scontent.fcai21-4.fna&oh=00_AfCpWpS6S69fHDQ4FVUGQ533D8UBLS0cFDFrIVi6mMIoBw&oe=6656CB59',
    },
    {
        title: 'News Title 3',
        desc: 'News description for the third item goes here.',
        date: 'Date: YYYY-MM-DD',
        img: 'https://www.itworx.com/wp-content/uploads/2024/04/3-uai-1080x1080.png',
    },
    {
        title: 'News Title 4',
        desc: 'News description for the fourth item goes here.',
        date: 'Date: YYYY-MM-DD',
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
