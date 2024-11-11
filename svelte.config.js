// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'index.html',
            precompress: true,
            strict: true
        }),
        prerender: {
            entries: [
                '/',
				'/api/stocks/dax',
				'/api/stocks/nasdaq',
				'/api/stocks/sp500',
				'/api/stocks/eurostoxx50',
				'/api/stocks/dowjones',
				'/api/stocks/eurusd',
				'/api/stocks/eurgbp',
				'/api/stocks/eurjpy',
				'/api/stocks/btceur',
				'/api/stocks/gold',
                '/api/rss/https://www.finanznachrichten.de/rss-aktien-nachrichten',
				'/api/rss/https://www.wallstreet-online.de/rss/nachrichten-alle.xml',
				'/api/rss/https://www.deraktionaer.de/aktionaer-news.rss',
				'/api/rss/https://www.boersennews.de/service/news.rss',
				'/api/rss/https://www.tagesschau.de/wirtschaft/index~rss2.xml',
				'/api/rss/https://www.finanznachrichten.de/rss-aktien-analysen',
				'/api/rss/https://www.manager-magazin.de/news/index.rss',
				'/api/rss/https://www.capital.de/feed/standard',
				'/api/rss/https://www.handelsblatt.com/contentexport/feed/finanzen',
				'/api/rss/https://allesaufaktien.podigee.io/feed/mp3',
				'/api/rss/https://feeds.megaphone.fm/PDS3666998460',
				'/api/rss/https://www.reddit.com/r/Aktien/new.rss',
				'/api/rss/https://rss.sueddeutsche.de/rss/Wirtschaft',
				'/api/rss/https://www.faz.net/rss/aktuell/finanzen',
				'/api/rss/https://www.wiwo.de/contentexport/feed/rss/finanzen',
				'/api/rss/https://api.boerse-frankfurt.de/v1/feeds/news.rss',
				'/api/rss/https://www.boersia.de/feed/atom',				
				'/api/rss/https://feeds.megaphone.fm/FGH8365603623',
				'/api/rss/https://www.reddit.com/r/Aktien/new.rss',
				'/api/rss/https://de.investing.com/rss/news.rss',
				'/api/rss/https://www.n-tv.de/wirtschaft/rss',
				'/api/rss/https://www.it-times.de/tag/it-news/rss.xml',
				'/api/rss/https://www.ntg24.de/rssfeed.xml',
				'/api/rss/https://www.spiegel.de/wirtschaft/unternehmen/index.rss',
				'/api/rss/https://www.boerse-global.de/feed'


            ],
			handleMissingId: 'ignore',
			handleHttpError: ({ path, referrer, message }) => {
				console.warn(`Warning: Failed to prerender ${path}${referrer ? ` (referrer: ${referrer})` : ''}: ${message}`);
				return;
        	}
    	}
	}
};

export default config;