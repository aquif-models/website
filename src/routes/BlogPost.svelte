<script>
    export let params = {};
    const { slug } = params;
    
    const modules = import.meta.glob('./posts/*.svelte');
    let posts = {};
    let PostComponent = null;
    
    for (const path in modules) {
        const postSlug = path.split('/').pop().replace('.svelte', '');
        posts[postSlug] = modules[path];
    }
    
    if (posts[slug]) {
        posts[slug]().then(module => {
            PostComponent = module.default;
        });
    }
</script>

<div class="max-w-3xl mx-auto">
    {#if PostComponent}
        <svelte:component this={PostComponent} />
    {:else}
        <div class="text-center py-20">
            <h1 class="text-4xl font-bold mb-4">404</h1>
            <p class="text-muted-foreground">Post not found</p>
            <a href="/blog" class="mt-6 inline-block text-primary hover:underline">← Back to Blog</a>
        </div>
    {/if}
</div>