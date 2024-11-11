<script>
    import ThemeToggle from './components/ThemeToggle/+page.svelte';
</script>

<div class="app">
    <header>
        <ThemeToggle />
    </header>

    <main>
        <slot />
    </main>
</div>

<style>
    .app {
        min-height: 100vh;
    }
    
    header {
        padding: 0;  /* removed padding since ThemeToggle has its own */
    }
    
    main {
        padding: 1rem;
    }
</style>
