const axios = require('axios').default;
key = '5a526eae5fdb4e818e4c9de58c48a43f';

function getNoticias(req,res){
    url = 'https:newsapi.org/v2/everything?q='+req.query.filtro + '&apiKey='+key
    axios.get(url)
    .then(response => {
        listaNoticias = response.data.articles
        console.log(url)
        res.render('noticias',{noticias:listaNoticias})
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = {getNoticias}