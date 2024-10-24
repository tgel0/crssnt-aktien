<script>
  import DataList from "./DataList/+page.svelte";
  import StatCard from "./StatCard/+page.svelte";

  // export let data;
  // console.log(data)
</script>

<div class="page-container">

  <div class="stocks-grid">
    <StatCard title="DAX" symbol="%5EGDAXI" />
    <StatCard title="NASDAQ" symbol="%5EIXIC" />
    <StatCard title="S&P500" symbol="%5EGSPC" />
    <StatCard title="ESTX50" symbol="^STOXX50E" />

  </div>

  <div class="news-grid">
    <DataList title="💵 EUR/USD" feedURL="https://www.ecb.europa.eu/rss/fxref-usd.html" numberOfItems="1" length="30"/>
    <DataList title="💷 EUR/GBP" feedURL="https://www.ecb.europa.eu/rss/fxref-gbp.html" numberOfItems="1" length="30"/>
    <DataList title="💴 EUR/JPY" feedURL="https://www.ecb.europa.eu/rss/fxref-jpy.html" numberOfItems="1" length="30"/>

    <DataList title="FINANZNACHRICHTEN.DE/NEWS" feedURL="https://www.finanznachrichten.de/rss-aktien-nachrichten/"/>
    <DataList title="WALLSTREET ONLINE" feedURL="https://www.wallstreet-online.de/rss/nachrichten-alle.xml"/>
    <DataList title="DER AKTIONÄR" feedURL="https://www.deraktionaer.de/aktionaer-news.rss"/>


    <DataList title="TAGESSCHAU" feedURL="https://www.tagesschau.de/wirtschaft/index~rss2.xml"/>
    <DataList title="SZ" feedURL="https://rss.sueddeutsche.de/rss/Wirtschaft"/>
    <DataList title="FINANZNACHRICHTEN.DE/ANALYSEN" feedURL="https://www.finanznachrichten.de/rss-aktien-analysen"/>

    
    <DataList title="HANDELSBLATT" feedURL="https://www.handelsblatt.com/contentexport/feed/finanzen"/>
    <DataList title="FAZ" feedURL="https://www.faz.net/rss/aktuell/finanzen/finanzmarkt"/>
    <DataList title="WIWO" feedURL="https://www.wiwo.de/contentexport/feed/rss/finanzen"/>

    <DataList title="BÖRSE FRANKFURT" feedURL="https://api.boerse-frankfurt.de/v1/feeds/news.rss"/>

    
    <!-- <DataList title="FINANZEN.NET" feedURL="https://www.finanzen.net/rss/news"/> -->
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

  .stocks-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 1rem;
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

  .contact-info {
    font-size: 0.8em; 
    color: #666; 
  }

  @media (max-width: 1024px) {
    .page-container {
      padding: 1rem;
    }
  }

  @media (max-width: 768px) {
    .news-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

</style>
