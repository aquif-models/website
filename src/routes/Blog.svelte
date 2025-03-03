<script>
    import { Link } from "svelte-routing";
    
    const modules = import.meta.glob('./posts/*.svelte');
    let posts = [];
    
    for (const path in modules) {
        const slug = path.split('/').pop().replace('.svelte', '');
        modules[path]().then(module => {
            const metadata = module.metadata || {};
            const title = metadata.title || slug.replace(/-/g, ' ');
            const description = metadata.description || '';
            const date = metadata.date || '';
            posts = [...posts, { slug, title, description, date }];
        });
    }
</script>

<div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">Blog Posts</h1>
    <ul class="space-y-4">
        {#each posts as post}
            <li>
                <Link to={`/blog/${post.slug}`} class="block p-6 bg-card rounded-lg shadow hover:bg-accent transition-colors">
                    <h2 class="text-xl font-semibold">{post.title}</h2>
                    <div class="flex items-center justify-between mt-2">
                        {#if post.date}
                            <p class="text-muted-foreground text-sm">{new Date(post.date).toLocaleDateString()}</p>
                        {/if}
                        {#if post.description}
                            <p class="text-muted-foreground text-sm">{post.description}</p>
                        {/if}
                    </div>
                </Link>
            </li>
        {/each}
    </ul>
</div>