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
				'/api/stocks/mdax',
				'/api/stocks/nasdaq',
				'/api/stocks/sp500',
				'/api/stocks/eurostoxx50',
				'/api/stocks/dowjones',
				'/api/stocks/eurusd',
				'/api/stocks/eurgbp',
				'/api/stocks/eurjpy',
				'/api/stocks/btceur',
				'/api/stocks/gold',
				'/api/stocks/oil',
				'/api/stocks/nikkei',
				'/api/stocks/etheur',
                '/api/rss/feed=https://www.finanznachrichten.de/rss-aktien-nachrichten',
				'/api/rss/feed=https://www.wallstreet-online.de/rss/nachrichten-alle.xml',
				'/api/rss/feed=https://www.deraktionaer.de/aktionaer-news.rss',
				'/api/rss/feed=https://www.boersennews.de/service/news.rss',
				'/api/rss/feed=https://www.tagesschau.de/wirtschaft/index~rss2.xml',
				'/api/rss/feed=https://www.finanznachrichten.de/rss-aktien-analysen',
				'/api/rss/feed=https://www.manager-magazin.de/news/index.rss',
				'/api/rss/feed=https://www.capital.de/feed/standard',
				'/api/rss/feed=https://www.handelsblatt.com/contentexport/feed/finanzen',
				'/api/rss/feed=https://allesaufaktien.podigee.io/feed/mp3',
				'/api/rss/feed=https://feeds.megaphone.fm/PDS3666998460',
				'/api/rss/feed=https://www.reddit.com/r/Aktien/new.rss',
				'/api/rss/feed=https://rss.sueddeutsche.de/rss/Wirtschaft',
				'/api/rss/feed=https://www.faz.net/rss/aktuell/finanzen',
				'/api/rss/feed=https://www.wiwo.de/contentexport/feed/rss/finanzen',
				'/api/rss/feed=https://api.boerse-frankfurt.de/v1/feeds/news.rss',
				'/api/rss/feed=https://www.boersia.de/feed/atom',				
				'/api/rss/feed=https://feeds.megaphone.fm/FGH8365603623',
				'/api/rss/feed=https://www.reddit.com/r/Aktien/new.rss',
				'/api/rss/feed=https://de.investing.com/rss/news.rss',
				'/api/rss/feed=https://www.n-tv.de/wirtschaft/rss',
				'/api/rss/feed=https://www.it-times.de/tag/it-news/rss.xml',
				'/api/rss/feed=https://www.ntg24.de/rssfeed.xml',
				'/api/rss/feed=https://www.spiegel.de/wirtschaft/unternehmen/index.rss',
				'/api/rss/feed=https://www.boerse-global.de/feed',
				'/api/rss/feed=https://www.businessinsider.de/wirtschaft/feed',
				'/api/rss/feed=https://financefwd.com/de/feed',
				'/api/rss/feed=https://www.xetra.com/xetra-de/newsroom/80642!listFeed',
				'/api/rss/feed=https://www.finanzen.net/rss/analysen',
				'/api/rss/feed=https://www.finanzen.net/rss/news',
				'/api/rss/feed=https://www.youtube.com/feeds/videos.xml?channel_id=UCyCBf6asf89aQJaSXuAuTsg',
				'/api/rss/feed=https://handelsblatt-morningbriefing.podigee.io/feed/mp3',
				'/api/rss/feed=https://podcastfuerdeutschland.podigee.io/feed/mp3'


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