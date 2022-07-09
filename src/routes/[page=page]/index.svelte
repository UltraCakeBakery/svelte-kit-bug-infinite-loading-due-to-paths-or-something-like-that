<script context="module">
    export async function load({ props })
    {
        let components = props.components || []
        
        console.log(123)
        for( const component of components )
        {
            component.component = Components[component.component]
        }
        
        return {
            status: 200,
            props
        }
    }
</script>

<script>
    import Components from '$lib/components'

    export let components = []

    // $: lastEpisode = episodes[0]
    // $: previouseEpisodes = episodes.filter( episode => episode !== lastEpisode )
</script>

<section flex-1 p-6 pt-2 space-y-8>
    { #each components as component }
        <svelte:component bind:settings={component.settings} this={component.component.default} />
    { /each }
</section>