<script>
  import DataList from "./components/DataList/+page.svelte";
  import StatCard from "./components/StatCard/+page.svelte";

  export let data;
  
  // Function to format the timestamp
  function formatBuildTime(isoString) {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'medium'
    }).format(date);
  }

</script>

<div class="page-container">

  <div class="update-info">
    <p>Letzte Aktualisierung: {formatBuildTime(data.buildTime)}</p>
  </div>


  <div class="stocks-grid">
    <StatCard title="DAX" symbol="dax" />
    <StatCard title="NASDAQ" symbol="nasdaq" />
    <StatCard title="S&P500" symbol="sp500" />
    <StatCard title="EUROSTX50" symbol="eurostoxx50" />
    <StatCard title="DOW JONES" symbol="dowjones" />

  </div>

  <div class="stocks-grid">
    <StatCard title="EUR/USD" symbol="eurusd" />
    <StatCard title="EUR/GBP" symbol="eurgbp" />
    <StatCard title="EUR/JPY" symbol="eurjpy" />
    <StatCard title="EUR/BTC" symbol="btceur" />
    <StatCard title="GOLD(USD)" symbol="gold" />
  </div>

  <div class="news-grid">
    <!-- <DataList title="💵 EUR/USD" feedURL="https://www.ecb.europa.eu/rss/fxref-usd.html" numberOfItems="1" length="30"/>
    <DataList title="💷 EUR/GBP" feedURL="https://www.ecb.europa.eu/rss/fxref-gbp.html" numberOfItems="1" length="30"/>
    <DataList title="💴 EUR/JPY" feedURL="https://www.ecb.europa.eu/rss/fxref-jpy.html" numberOfItems="1" length="30"/> -->


    <DataList title="TAGESSCHAU" feedURL="https://www.tagesschau.de/wirtschaft/index~rss2.xml" numberOfItems="7"/>
    <DataList title="MANAGER MAGAZIN" feedURL="https://www.manager-magazin.de/news/index.rss" numberOfItems="6"/>
    <DataList title="CAPITAL" feedURL="https://www.capital.de/feed/standard" numberOfItems="7"/>

    <DataList title="FAZ" feedURL="https://www.faz.net/rss/aktuell/finanzen" numberOfItems="7"/>
    <DataList title="SZ" feedURL="https://rss.sueddeutsche.de/rss/Wirtschaft" numberOfItems="6"/>
    <DataList title="WIWO" feedURL="https://www.wiwo.de/contentexport/feed/rss/finanzen" numberOfItems="6"/>

    <DataList title="FINANZNACHRICHTEN.DE/NEWS" feedURL="https://www.finanznachrichten.de/rss-aktien-nachrichten" numberOfItems="6"/>
    <DataList title="NTV" feedURL="https://www.n-tv.de/wirtschaft/rss" numberOfItems="6"/>
    <DataList title="HANDELSBLATT" feedURL="https://www.handelsblatt.com/contentexport/feed/finanzen" numberOfItems="6"/>

    <DataList title="🎙ALLES AUF AKTIEN" feedURL="https://allesaufaktien.podigee.io/feed/mp3" numberOfItems="5"/>
    <DataList title="🎙OHNE AKTIEN WIRD SCHWER" feedURL="https://feeds.megaphone.fm/PDS3666998460" numberOfItems="5"/>
    <DataList title="🎙MARKTGEFLÜSTER" feedURL="https://feeds.megaphone.fm/FGH8365603623" numberOfItems="7"/>  

    <DataList title="FINANZNACHRICHTEN.DE/ANALYSEN" feedURL="https://www.finanznachrichten.de/rss-aktien-analysen" numberOfItems="14"/>
    <DataList title="INVESTING.COM" feedURL="https://de.investing.com/rss/news.rss" />
    <DataList title="DER AKTIONÄR" feedURL="https://www.deraktionaer.de/aktionaer-news.rss"/>  

    <DataList title="R/AKTIEN" feedURL="https://www.reddit.com/r/Aktien/new.rss"/>
    <DataList title="BÖRSENNEWS.DE" feedURL="https://www.boersennews.de/service/news.rss"/>
    <DataList title="WALLSTREET ONLINE" feedURL="https://www.wallstreet-online.de/rss/nachrichten-alle.xml" numberOfItems="8"/>

        
    <DataList title="IT TIMES" feedURL="https://www.it-times.de/tag/it-news/rss.xml"/>
    <DataList title="BOERSIA.DE" feedURL="https://www.boersia.de/feed/atom"/>
    <DataList title="NTG24" feedURL="https://www.ntg24.de/rssfeed.xml" numberOfItems="7"/>

    <DataList title="BÖRSE FRANKFURT" feedURL="https://api.boerse-frankfurt.de/v1/feeds/news.rss"/>

    <!-- <DataList title="FINANZEN.NET" feedURL="https://www.finanzen.net/rss/news"/> -->
    <!-- <DataList title="XETRA" feedURL="https://www.xetra.com/xetra-de/newsroom/80642!listFeed"/> -->
  </div>

  <footer>
    <p class="contact-info">
      ✉️ <a href="mailto:tomi@crssnt.com">tomi@crssnt.com</a>
    </p>
  </footer>
</div>


<style>
  .page-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  }

  .update-info {
    text-align: center; 
    margin-top: 20px; 
  }

  .stocks-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 1rem;
  }

  /* Hide scrollbar for Chrome/Safari/Opera */
  .stocks-grid::-webkit-scrollbar {
      display: none;
  }

  /* Prevent StatCards from shrinking */
  :global(.stocks-grid > *) {
    flex: 0 0 250px; /* Don't grow, don't shrink, fixed width */
}

  .news-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
  }

  footer {
    text-align: center; 
    margin-top: 20px; 
  }

  p {
    font-size: 0.8em; 
    color: #666; 
  }

  @media (max-width: 900px) {
    .news-grid {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }

  @media (max-width: 900px) {
  .stocks-grid {
    margin-left: -1rem;
    margin-right: -1rem;
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    padding: 1rem;
    /* Hide scrollbar for cleaner look but maintain functionality */
    scrollbar-width: none;  /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer/Edge */
  }
  
  /* Hide scrollbar for Chrome/Safari */
  .stocks-grid::-webkit-scrollbar {
    display: none;
  }
  
  /* Prevent content from wrapping */
  .stocks-grid > :global(*) {
    flex: 0 0 250px; /* Don't grow, don't shrink, fixed width */
  }

  .stocks-grid > :global(*:first-child) {
    margin-left: 0;
  }
  
  .stocks-grid > :global(*:last-child) {
    margin-right: 0;
  }
  .page-container {
    padding: 0;
  }
}

</style>
