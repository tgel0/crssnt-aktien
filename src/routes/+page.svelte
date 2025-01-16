<script>
  import DataList from "./components/DataList/+page.svelte";
  import StatCard from "./components/StatCard/+page.svelte";

  export let data;

  // Function to format the timestamp
  function formatBuildTime(isoString) {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("de-DE", {
      dateStyle: "medium",
      timeStyle: "medium",
    }).format(date);
  }
</script>

<div class="page-container">
  <div class="update-info">
    <p>Letzte Aktualisierung: {formatBuildTime(data.buildTime)}</p>
  </div>

  <div class="stocks-grid">
    <StatCard title="DAX" symbol="dax" />
    <StatCard title="MDAX" symbol="mdax" />
    <StatCard title="NASDAQ" symbol="nasdaq" />
    <StatCard title="S&P500" symbol="sp500" />
    <StatCard title="EURSTX50" symbol="eurostoxx50" />
    <StatCard title="DOWJONES" symbol="dowjones" />
    <StatCard title="NIKKEI" symbol="nikkei" />
  </div>

  <div class="stocks-grid">
    <StatCard title="EUR/USD" symbol="eurusd" />
    <StatCard title="BTC(EUR)" symbol="btceur" />
    <StatCard title="ETH(EUR)" symbol="etheur" />
    <StatCard title="EUR/GBP" symbol="eurgbp" />
    <StatCard title="EUR/JPY" symbol="eurjpy" />
    <StatCard title="GOLD(USD)" symbol="gold" />
    <StatCard title="BRENT" symbol="oil" />
    
  </div>

  <div class="news-grid">
    <!-- <DataList title="💵 EUR/USD" feedURL="https://www.ecb.europa.eu/rss/fxref-usd.html" numberOfItems="1" length="30"/>
    <DataList title="💷 EUR/GBP" feedURL="https://www.ecb.europa.eu/rss/fxref-gbp.html" numberOfItems="1" length="30"/>
    <DataList title="💴 EUR/JPY" feedURL="https://www.ecb.europa.eu/rss/fxref-jpy.html" numberOfItems="1" length="30"/> -->

    <DataList
      title="TAGESSCHAU"
      feedURL="https://www.tagesschau.de/wirtschaft/index~rss2.xml"
      numberOfItems="5"
    />
    <DataList
      title="FAZ"
      feedURL="https://www.faz.net/rss/aktuell/finanzen"
      numberOfItems="5"
    />
    <DataList
      title="SZ"
      feedURL="https://rss.sueddeutsche.de/rss/Wirtschaft"
      numberOfItems="6"
    />

    <DataList title="WIWO" feedURL="https://www.wiwo.de/contentexport/feed/rss/finanzen" numberOfItems="5"/>
    <DataList title="MANAGER" feedURL="https://www.manager-magazin.de/news/index.rss" numberOfItems="5"/>
    <DataList title="CAPITAL" feedURL="https://www.capital.de/feed/standard" numberOfItems="6"/>

    <DataList title="SPIEGEL" feedURL="https://www.spiegel.de/wirtschaft/unternehmen/index.rss" numberOfItems="6"/>
    <DataList title="NTV" feedURL="https://www.n-tv.de/wirtschaft/rss" numberOfItems="6"/>
    <DataList title="HB" feedURL="https://www.handelsblatt.com/contentexport/feed/finanzen" numberOfItems="5"/>

    <DataList title="FINANZEN.NET/NEWS" feedURL="https://www.finanzen.net/rss/news" numberOfItems="5"/>
    <DataList title="BUSINESS INSIDER" feedURL="https://www.businessinsider.de/wirtschaft/feed" numberOfItems="5"/>
    <DataList title="FINANCE FWD" feedURL="https://financefwd.com/de/feed" numberOfItems="5"/>

    <DataList title="🎙ALLES AUF AKTIEN" feedURL="https://allesaufaktien.podigee.io/feed/mp3" numberOfItems="5"/>
    <DataList title="🎙OHNE AKTIEN WIRD SCHWER" feedURL="https://feeds.megaphone.fm/PDS3666998460" numberOfItems="4"/>
    <DataList title="🎙HB MORNING BRIEFING" feedURL="https://handelsblatt-morningbriefing.podigee.io/feed/mp3" numberOfItems="5"/>
    <!-- <DataList title="▶️ MARKUS KOCH WALL STREET" feedURL="https://www.youtube.com/feeds/videos.xml?channel_id=UCyCBf6asf89aQJaSXuAuTsg" /> -->

    <DataList title="IT TIMES" feedURL="https://www.it-times.de/tag/it-news/rss.xml" numberOfItems="5"/>
    <DataList title="INVESTING.COM" feedURL="https://de.investing.com/rss/news.rss" numberOfItems="5" />
    <DataList title="AKTIONÄR" feedURL="https://www.deraktionaer.de/aktionaer-news.rss"/>

    <DataList title="FINANZEN.NET/ANALYSEN" feedURL="https://www.finanzen.net/rss/analysen" numberOfItems="11"/>
    <DataList title="FINANZNACHRICHTEN.DE/ANALYSEN" feedURL="https://www.finanznachrichten.de/rss-aktien-analysen" numberOfItems="11"/>
    <DataList title="R/AKTIEN" feedURL="https://www.reddit.com/r/Aktien/new.rss" numberOfItems="10"/>

    <DataList title="FINANZNACHRICHTEN.DE/NEWS" feedURL="https://www.finanznachrichten.de/rss-aktien-nachrichten" numberOfItems="5"/>
    <DataList title="WALLSTREET ONLINE" feedURL="https://www.wallstreet-online.de/rss/nachrichten-alle.xml" numberOfItems="5"/>    
    <DataList title="BÖRSENNEWS.DE" feedURL="https://www.boersennews.de/service/news.rss"/>

    <DataList title="🎙MARKTGEFLÜSTER" feedURL="https://feeds.megaphone.fm/FGH8365603623" numberOfItems="5"/>
    <DataList title="🎙FAZ PODCAST FÜR D" feedURL="https://podcastfuerdeutschland.podigee.io/feed/mp3" numberOfItems="4"/>

    <!-- <DataList title="BÖRSE-GLOBAL" feedURL="https://www.boerse-global.de/feed"/> -->
    <DataList title="BOERSIA.DE" feedURL="https://www.boersia.de/feed/atom"/>
    <DataList title="NTG24" feedURL="https://www.ntg24.de/rssfeed.xml" numberOfItems="4"/>

    <DataList title="BÖRSE FRANKFURT" feedURL="https://api.boerse-frankfurt.de/v1/feeds/news.rss"/>
    <DataList title="XETRA" feedURL="https://www.xetra.com/xetra-de/newsroom/80642!listFeed" numberOfItems="3"/>

    <!-- <DataList title="GOOGLE NEWS" feedURL="https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtUmxHZ0pFUlNnQVAB?hl=de&gl=DE&ceid=DE%3Ade"/> -->
  </div>

  <footer>
    <p class="contact-info">
      <a target="_blank" href="https://docs.google.com/spreadsheets/d/1et2ZYu-dtYwHSsWHN3b5iPa7sw504pFUULRseB5o1og/edit?usp=sharing">Börsenkalender 2025</a>
      •
      <a href="/legal">Hinweis, Datenschutz und Impressum</a>
    </p>
  </footer>
</div>

<style>
  .page-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0rem;
    font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .stocks-grid {
    display: flex;
    margin-left: -1rem;
    margin-right: -1rem;
    overflow-x: auto;
    gap: 1rem;
    padding: 1rem;
    /* Hide scrollbar for cleaner look but maintain functionality */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer/Edge */
  }


  p {
    font-size: 0.8em;
    color: #666;
  }
  footer {
    text-align: center;
    margin-top: 20px;
  }
  .update-info {
    text-align: center;
  }

  @media (min-width: 900px) {
    .page-container {
      padding: 0rem;
    }
    .stocks-grid {
      display: flex;
      gap: 2.5rem;
      padding: 1rem;
      align-items: center;
      justify-content: center;
    }
    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */

    .news-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 2rem;
      padding: 2rem 0;
    }
  }

  @media (max-width: 900px) {
    /* Hide scrollbar for Chrome/Safari/Opera */
    .stocks-grid::-webkit-scrollbar {
    display: none;
  }

  /* Prevent StatCards from shrinking */
  :global(.stocks-grid > *) {
    flex: 0 0 250px; /* Don't grow, don't shrink, fixed width */
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
}
</style>
