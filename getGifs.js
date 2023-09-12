


const getGifs = async () => {
    const categoryq = document.getElementById('search').value || 'game of thrones';
    console.log(categoryq);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BhVkS6kEOuXj1bTHSI9KN1FzBFyWC1df&q=${categoryq}&limit=9`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log('hola desde el fetch');
    // TODO
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    let collection = document.getElementsByClassName('carga_video');
    let collection2 = document.getElementsByClassName('contenido_video');
    console.log("collection", collection2);
    // regular for loop
    for (let i = 0; i < collection2.length; i++) {
        collection2[i].childNodes[1].src = gifs[i].url;
        collection2[i].childNodes[3].innerText = gifs[i].title;
    }
    console.log('hola desde el final del script');
}

console.log(getGifs());
