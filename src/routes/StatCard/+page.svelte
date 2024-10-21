<script>
  export let title = "";
  export let number = 0;
</script>

<div class="stat-card">
  <h3>{title}</h3>
  <p>{number}</p>
</div>

<style>
  .stat-card {
    /* Add styling for the card here */
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
    text-align: center;
  }
</style>
