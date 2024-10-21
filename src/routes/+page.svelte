<script>
  import DataList from "./DataList/+page.svelte";
  import StatCard from "./StatCard/+page.svelte";
</script>

<div class="container">
  <DataList title="WALLSTREET ONLINE" feedURL="https://www.wallstreet-online.de/rss/nachrichten-alle.xml"/>
  <DataList title="WIWO" feedURL="https://www.wiwo.de/contentexport/feed/rss/finanzen"/>
  <DataList title="FAZ" feedURL="https://www.faz.net/rss/aktuell/finanzen/finanzmarkt"/>
  <DataList title="HANDELSBLATT" feedURL="https://www.handelsblatt.com/contentexport/feed/finanzen"/>
  <DataList title="DER AKTIONÄR" feedURL="https://www.deraktionaer.de/aktionaer-news.rss"/>
  <DataList title="FINANZNACHRICHTEN.DE" feedURL="https://www.finanznachrichten.de/rss-aktien-nachrichten/"/>
  
  <!-- <DataList title="FINANZEN.NET" feedURL="https://www.finanzen.net/rss/news"/> -->
</div>

<!-- <div class="stats-container">
  <StatCard title="Stat 1" number={123} />
  <StatCard title="Stat 2" number={456} />
  <StatCard title="Stat 3" number={789} />
</div> -->


<style>
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }

</style>
