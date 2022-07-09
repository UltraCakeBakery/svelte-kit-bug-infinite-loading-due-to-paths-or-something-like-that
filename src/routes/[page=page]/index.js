export function get()
{
    return {
        status: 200,
        body: {
            components: [
                {
                    component: 'highlighted-episode',
                    settings: {
                        title: 'Latest episode',
                        description: '',
                        episode: {
                            title: 'Voluptatem recusandae velit dolorem',
                            description: 'lorem impsum delor sit amet',
                            thumbnail: '',
                            lastEpisode: new Date()
                        },
                    }
                },
                {
                    component: 'sponsor-banner',
                    settings: {
                        title: 'Voluptatem recusandae velit dolorem',
                        description: 'lorem impsum delor sit amet',
                        link: '',
                        color: '#0043E9'
                    }
                },
                {
                    component: 'vertical-episode-list',
                    settings: {
                        title: 'Voluptatem recusandae velit dolorem',
                        description: 'lorem impsum delor sit amet',
                        link: '',
                        color: '#0043E9',
                        episodes:  [
                            {
                                title: 'Voluptatem recusandae velit dolorem',
                                description: 'lorem impsum delor sit amet',
                                thumbnail: '',
                                lastEpisode: new Date()
                            },
                            {
                                title: 'Voluptatem recusandae velit dolorem',
                                description: 'lorem impsum delor sit amet',
                                thumbnail: '',
                                lastEpisode: new Date()
                            },
                            {
                                title: 'Voluptatem recusandae velit dolorem',
                                description: 'lorem impsum delor sit amet',
                                thumbnail: '',
                                lastEpisode: new Date()
                            }
                        ]
                    }
                }
            ]
        }
    }
}