"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insta = void 0;
exports.insta = {
    1: (link) => {
        return {
            method: 'GET',
            url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
            params: { url: link },
            headers: {
                'X-RapidAPI-Key': 'f5d602a575msha11f03335de9104p12bf91jsn5e0242ad517f',
                'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com',
            },
        };
    },
};
//# sourceMappingURL=insta.js.map