const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ed21191334057a734ad14ebc936cfca0',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;