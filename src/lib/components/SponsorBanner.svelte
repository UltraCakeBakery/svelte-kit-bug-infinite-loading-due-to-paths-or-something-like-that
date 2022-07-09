<script>
    export let settings = {}
</script>

<div space-y-2>
    <h1 font-semibold>
        {settings.title}
    </h1>
    <div grid grid-cols-3 gap-3>
        { #each { length: 3 } as _ }
            <div bg-gradient-to-br from-blue-400 to-blue-500 rounded class="aspect-1/1">

            </div>
        { /each }
    </div>
    <!-- <a href="/" relative flex gap-3 items-center flex-row w-full rounded p-3 class="bg-#0043E9" shadow-lg transition-all active:scale-98 active:opacity-90> -->
        <div w-16 h-16 bg-white rounded p-2 flex-shrink-0>
            <!-- <img src="/webull.png" object-contain w-full h-full alt="" /> -->
        </div>
        <div text-white text-sm>
            <div font-bold>Voluptatem recusandae velit dolorem.</div>
            <div text-xs>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam incidunt odio. Iste, pariatur. Voluptatem recusandae velit dolorem nostrum veritatis maiores voluptatum iusto porro? Nostrum mollitia omnis ab ex sequi.</div>
        </div>
    <!-- </a> -->
</div>