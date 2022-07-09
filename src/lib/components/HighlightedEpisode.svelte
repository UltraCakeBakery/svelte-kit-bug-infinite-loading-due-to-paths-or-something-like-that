<script>
    import DayJS from 'dayjs'

    export let settings = {}
</script>

<div space-y-8>
    <h1 text-2xl font-semibold>
        { settings.title }
    </h1>
    <a  href="/" relative rounded w-full bg-light-200 shadow-xl class="aspect-4/3" transition-all active:scale-98 active:opacity-90>
        <img src={settings.episode.thumbnail} w-full h-full object-cover rounded-inherit alt="" />
        <div absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent rounded-b></div>
        <div absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent rounded-b opacity-50></div>
        <div absolute bottom-0 inset-x-0 p-2 text-white>
            <span>{settings.episode.title}</span>
            &middot;
            <span text-xs text-gray-300>{DayJS(settings.episode.uploaded).format('DD/MM/YYYY')}</span>
        </div>
    </a>
</div>