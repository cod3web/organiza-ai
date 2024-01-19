<div class="card">
  <slot name="card-header"></slot>
  <slot name="card-body"></slot>
</div>

<style>
  .card {
    width: 400px;
    padding: 32px;
    border-radius: 20px;
    background-color: white;
    border: 0.5px solid #EBEBF9;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 8px 8px 16px 4px rgba(137, 143, 150, 0.04);
  }
</style>