const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Giacomo Rossi",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2022-01-06"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Sara Potenza",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 105,
        "created": "2022-02-05"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 35,
        "created": "2022-03-09"
    },
    {
        "id": 9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Lucas Farabegoli",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 22,
        "created": "2022-03-12"
    },
    {
        "id": 10,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Giovanni Ferraro",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 60,
        "created": "2022-02-15"
    },
    {
        "id": 11,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Tiziana Campari",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 29,
        "created": "2022-02-22"
    },
    {
        "id": 12,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Selene Tagiuri",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 302,
        "created": "2022-03-14"
    },
    {
        "id": 13,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Giulia Bronner",
            "image": null
        },
        "likes": 30,
        "created": "2022-03-10"
    },
    {
        "id": 14,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Filippo Petricca",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 32,
        "created": "2022-03-06"
    },
    {
        "id": 15,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Filippo Gioachini",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 2,
        "created": "2022-03-01"
    }
];

const container = document.getElementById("container");

function printPost(data) {
        let post = document.createElement('div');
        post.classList.add('post');
        container.appendChild(post);

        let postHeader = document.createElement('div');
        postHeader.classList.add('post__header');
        post.appendChild(postHeader);

        let postMeta = document.createElement('div');
        postMeta.classList.add('post-meta');
        postHeader.appendChild(postMeta);

        let postMetaIcon = document.createElement('div');
        postMetaIcon.classList.add('post-meta__icon');
        postMeta.appendChild(postMetaIcon);

        if (data.author.image !== null) {
            const profileImg = document.createElement('img');
            profileImg.classList.add('profile-pic');
            profileImg.src = data.author.image;
            profileImg.alt = data.author.name;
            postMetaIcon.appendChild(profileImg);
        } else {
            const fullName = data.author.name.split(' ');
            const initials = fullName[0].charAt(0).toUpperCase() + fullName[1].charAt(0).toUpperCase();

            const noProfileImg = document.createElement('h3');
            noProfileImg.classList.add('initals', 'profile-pic-default');
            noProfileImg.innerHTML = initials;
            postMetaIcon.appendChild(noProfileImg);
        }

        const postMetaData = document.createElement('div');
        postMetaData.classList.add('post-meta__data');
        postMeta.appendChild(postMetaData);

        const postMetaAuthor = document.createElement('div');
        postMetaAuthor.classList.add('post-meta__author');
        postMetaAuthor.innerHTML = data.author.name;
        postMetaData.appendChild(postMetaAuthor);

        const postMetaTime = document.createElement('div');
        postMetaTime.classList.add('post-meta__time');
        postMetaTime.innerHTML = data.author.created;
        postMetaData.appendChild(postMetaTime);

        const postText = document.createElement('div');
        postText.classList.add('post__text');
        postText.innerHTML = data.content;
        post.appendChild(postText);

        const postImgDiv = document.createElement('div');
        postImgDiv.classList.add('post__image');
        post.appendChild(postImgDiv);

        const postImg = document.createElement('img');
        postImg.src = data.media;
        postImgDiv.appendChild(postImg);

        const postFooter = document.createElement('div');
        postFooter.classList.add('post__footer');
        post.appendChild(postFooter);

        const likes = document.createElement('div');
        likes.classList.add('likes', 'js-likes');
        postFooter.appendChild(likes);

        const likesCta = document.createElement('div');
        likesCta.classList.add('likes__cta');
        likes.appendChild(likesCta);

        const likeBtn = document.createElement('a');
        likeBtn.classList.add('like-button', 'js-like-button');
        likeBtn.setAttribute('post-id', '');
        // likeBtn['post-id'] = data.id;
        likesCta.appendChild(likeBtn);

        const likeBtnIcon = document.createElement('i');
        likeBtnIcon.classList.add('like-button__icon', 'fas', 'fa-thumbs-up');
        likeBtnIcon.setAttribute('aria-hidden', 'true');
        likeBtn.appendChild(likeBtnIcon);

        const likeBtnLabel = document.createElement('span');
        likeBtnLabel.classList.add('like-button__label');
        likeBtnLabel.innerText = "Mi Piace";
        likeBtn.appendChild(likeBtnLabel);

        const counter = document.createElement('div');
        counter.classList.add('likes__counter');
        counter.innerHTML = `Piace a <b id="like-counter-${data.id}" class="js-likes-counter">${data.likes}</b> persone`;
        likes.appendChild(counter);

    return post;
}

posts.forEach((post) => {
    container.appendChild(printPost(post));
});

const likedPosts = [];

const buttons = document.getElementsByClassName('js-like-button');
const counters = document.getElementsByClassName('js-likes-counter');

for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];

    element.addEventListener('click', (event) => {

        if (element.classList.contains('like-button--liked')) {
            element.classList.remove('like-button--liked');
            counters[i].innerHTML = parseInt(counters[i].innerHTML) - 1;
            likedPosts.splice(likedPosts.indexOf(buttons[i].getAttribute('postid')));
        } else {
            element.classList.add('like-button--liked');
            counters[i].innerHTML = parseInt(counters[i].innerHTML) + 1;
            likedPosts.push(buttons[i].getAttribute('post-id'));
        }
    });
}
