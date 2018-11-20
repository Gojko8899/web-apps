import * as data from './data.js';
import * as ui from './ui.js';

const init = () => {
    data.fetchData(onSuccessResponse);
}

const onSuccessResponse = (listOfPosts) => {
    ui.displayPosts(listOfPosts);
}

export { init };