<script>
  export let onClick = new Function(), 
            text, 
            submitButton;
  
  
</script>

{#if submitButton}
<input type="submit" value={text}>
{:else}
<button on:click={onClick}>
  {text}
</button>
{/if}

<style>
  button, input {
    background-color: #8153E2;
    color: white;
    font-family: 'Manrope';
    font-weight: 700;
    text-transform: uppercase;
    padding: 12px;
    outline: none;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }
  button:hover {
    opacity: .8;
    transform: translateY(-2px);
  }
</style>