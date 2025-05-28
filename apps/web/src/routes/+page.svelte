<script lang="ts">
  import { theme, toggleTheme } from '$lib/stores/theme';
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
  <h1 class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">Hello, Tailwind!</h1>
  <button 
    class="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-200"
    on:click={toggleTheme}
  >
    {$theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
  </button>
</div>
