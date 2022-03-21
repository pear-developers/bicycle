<script lang="ts">
    import { browser } from '$app/env';

    let sc: WebSocket;

    if (browser) {
        sc = new WebSocket('ws://localhost:3000');
    }
</script>

{#if browser}
<h1>{ sc }</h1>
{/if}