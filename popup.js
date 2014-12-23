function reset() {
    document.getElementById('main').innerHTML = '<img src="wait.gif">';
    request = new XMLHttpRequest();
    request.open('GET', 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0fa629c6c415b5ca5a7427b708208a03&' +
    'text=%22sugar%20glider%22&' +
    'sort=relavance&' +
    'per_page=200&' +
    'content_type=1&' + // photos only
    'format=json&nojsoncallback=1', true);


    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            var photos = JSON.parse(this.response).photos.photo;
            var photo = photos[Math.floor(Math.random() * photos.length)];
            document.getElementById('main').innerHTML = "<img src='https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_z.jpg'>";
            document.getElementsByTagName('IMG')[0].onclick = reset;
        }
    };

    request.onerror = function () {
        document.getElementById('main').innerHTML = 'error';
    };

    request.send();
}
reset();
