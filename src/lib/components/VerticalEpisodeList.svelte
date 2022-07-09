<script>
    export let settings = {}
</script>

<div space-y-4>
    <h1 text-2xl font-semibold>
        { settings.title }
    </h1>
    <div space-y-2>
        { #each settings.episodes as episode (episode.title) }
            <a href="/epsiode/{episode.title}" relative flex flex-row justify-between gap-3 w-full p-2 sveltekit:prefetch>
                <div w-20 h-20 bg-light-100 flex-shrink-0>
                    <img src={episode.thumbnail} alt="" w-full h-full object-cover rounded shadow-md />
                </div>
                <div>
                    <div text-sm font-medium>{episode.title}</div>
                    <div text-xs line-clamp-2>{episode.description}</div>
                </div>
            </a>
            <div border-b mx-auto w-80vw border-light-400 last:hidden></div>
        { /each }
    </div>
</div>