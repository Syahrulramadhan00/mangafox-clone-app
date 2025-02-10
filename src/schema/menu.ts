interface menuType {
    menu: string;
    route: string;
}

export const menu: menuType[] = [
    {
        menu: 'Comic List',
        route: '/comic'
    },
    {
        menu: 'Genres',
        route: '/genre'
    },
    {
        menu: 'Popular',
        route: '/popular'
    }
]