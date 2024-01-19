<script>
  export let percentage = 0, bg="soft-blue";
</script>

<span class="indicator-pill" class:soft-blue={bg == "soft-blue"}>
  {percentage}% 
  {#if percentage => 0}
  <span>⭡</span>
  {:else}
  <span>⭣</span>
  {/if}
</span>

<style>
  span.indicator-pill {
    display: flex;
    gap: 10px;
    font-weight: 700;
    font-family: 'Urbanist', 'Manrope', sans-serif;
    padding: 4px 8px;
  }
  span {
    border-radius: 150px;
    max-width: fit-content;
    display: block;
    
  }
  span.soft-blue {
    background-color: #e1f6f0;
    color: #45c4a0;
  }
</style>