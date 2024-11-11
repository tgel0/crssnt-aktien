<script>
    import { onMount } from 'svelte';
    
    let isDarkMode = false;
    
    onMount(() => {
        // Check local storage for user's preference
        const storedTheme = localStorage.getItem('theme');
        isDarkMode = storedTheme === 'dark';
        
        // Apply theme on initial load
        document.body.classList.toggle('dark-mode', isDarkMode);
    });
    
    function toggleTheme() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
</script>

<div class="theme-toggle">
    <button on:click={toggleTheme}>
        {isDarkMode ? '☀️' : '🌙'}
    </button>
</div>

<style>
    /* Define your CSS variables in :root for light mode */
    :root {
        --background-color: #ffffff;
        --text-color: #333333;
        --link-color: #0066cc;
        --border-color: #dddddd;
    }
    
    /* Override variables for dark mode */
    :global(body.dark-mode) {
        --background-color: #1a1a1a;
        --text-color: #ffffff;
        --link-color: #66b3ff;
        --border-color: #404040;
    }
    
    /* Apply variables to body */
    :global(body) {
        background-color: var(--background-color);
        color: var(--text-color);
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .theme-toggle {
        display: flex;
        justify-content: flex-end;
        padding: 0.5rem;  /* minimal padding */
        margin-bottom: 0.5rem;  /* small space between toggle and content */
    }
    
    /* Style for the toggle button */
    button {
        padding: 8px 16px;
        border-radius: 4px;
        border: 1px solid var(--border-color);
        background-color: var(--background-color);
        color: var(--text-color);
        cursor: pointer;
    }
</style>