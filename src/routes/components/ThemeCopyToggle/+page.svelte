<script>
    import { onMount } from 'svelte';

    let isDarkMode = false;
    let isCopied = false; // New state variable

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

    async function copyContent() {
        try {
            const body = document.body;
            // Get all text nodes within the body, excluding specified elements
            const textNodes = getTextNodes(body, ['theme-copy-container', 'contact-info']);
            // Extract and concatenate text content
            let formattedContent = textNodes
                .map((node) => node.nodeValue.trim()) // Trim whitespace from each node's text
                .filter((text) => text.length > 0) // Remove empty text nodes
                .join(' | '); // Join with a delimiter
            await navigator.clipboard.writeText(formattedContent);
            isCopied = true; // Update the state
            setTimeout(() => {
                isCopied = false;
            }, 3000); // Reset after 3 seconds

        } catch (err) {
            console.error('Fehler beim Kopieren: ', err);
        }
    }

    // Helper function to get all text nodes within an element, excluding elements with specified classes
    function getTextNodes(node, excludedClasses) {
        let allTextNodes = [];

        // Check if the current node should be excluded based on its class
        if (node.classList && excludedClasses.some(className => node.classList.contains(className))) {
            return allTextNodes; // Skip this node and its children
        }

        if (node.nodeType === Node.TEXT_NODE) {
            allTextNodes.push(node);
        } else {
            for (let i = 0; i < node.childNodes.length; i++) {
                allTextNodes = allTextNodes.concat(getTextNodes(node.childNodes[i], excludedClasses));
            }
        }
        return allTextNodes;
    }
</script>

<div class="theme-copy-container">
    <div class="theme-toggle">
        <button on:click={toggleTheme}>
            {isDarkMode ? '☀️' : '🌙'}
        </button>
    </div>
    <div class="copy-button">
        <button on:click={copyContent} aria-label="Inhalt in die Zwischenablage kopieren">
            {#if isCopied}
            ✅
            {:else}
            📋
            {/if}
        </button>
    </div>
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

    .theme-copy-container {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .theme-toggle, .copy-button {
        display: flex;
    }

    /* Style for the toggle button */
    button {
        padding: 8px 16px;
        border-radius: 4px;
        border: 1px solid var(--border-color);
        background-color: var(--background-color);
        color: var(--text-color);
        cursor: pointer;
        font-size: 1rem;
    }
</style>
