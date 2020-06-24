const cheerio = require('cheerio')

    request('requested_url', function (error, response, responseHtml) {
        var resObj = {};

	 $ = cheerio.load(responseHtml),
          
            $desc = $('meta[name="description"]').attr('content'),
            $kwd = $('meta[name="keywords"]').attr('content'),
            $ogTitle = $('meta[property="og:title"]').attr('content'),
            $ogImage = $('meta[property="og:image"]').attr('content'),
            $ogkeywords = $('meta[property="og:keywords"]').attr('content')
		
	console.log(`keywords ${$kwd},Title ${$ogTitlte}`)

       
        if (error) {
            res.end(JSON.stringify({error: 'some error'}));
            return;
        }
        
    }) ;