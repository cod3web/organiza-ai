<script>
    export let active = true;
</script>

<div class="backdrop" class:active>
    <div class="card-modal">
        <slot name="card-header"></slot>
        <slot name="card-body"></slot>
        <slot name="card-footer"></slot>
    </div>
</div>

<style>
    :global(body:has(.backdrop.active)) {
        overflow-y: hidden;
    }
    .backdrop {
        top: 0;
        left: 0;
        opacity: 0;
        position: absolute;
        transition: all .3s ease-in-out;
    }
    .backdrop.active {
        opacity: 1;
        display: flex;
        justify-content: center;
        align-items: center;
 
        width: 100vw;
        height: 100vh;
       
        background-color: rgba(0,0,0,.7);
    }
    .card-modal {
        background: white;
        width: 600px;
        padding: 40px;
        height: 800px;
        border-radius: 12px;
    }
</style>