const loremIpsum = require('lorem-ipsum');

const createPosts = (numOfPosts) => {

    const listOfPosts = [];
    
    for (let i = 0; i < numOfPosts; i++) {

        const newPost = {
            id: Math.floor(Math.random() * 3000),
            title: loremIpsum({
                count: 3,
                units: 'words'
            }),
            intro: loremIpsum({
                count: 2,
                units: 'sentences',
                sentenceLowerBound: 5,
                sentenceUpperBound: 15
            })
        };

        listOfPosts.push(newPost);
    }

    return listOfPosts;
};

module.exports = { createPosts };