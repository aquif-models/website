/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module 'shadcn-svelte' {
    import { SvelteComponentTyped } from 'svelte';
    export class Button extends SvelteComponentTyped<{ variant?: string, size?: string }> {}
}
