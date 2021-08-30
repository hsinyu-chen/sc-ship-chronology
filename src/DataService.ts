export interface IGalactapediaLink {
    name: string
    slug: string
    __typename: string
}
export interface IShipData {
    id: string
    name: string
    slug: string
    description: string
    categories: IGalactapediaLink[]
    tags: IGalactapediaLink[]
    manufacturer?: string
    role?: string
    releaseDate?: string
    image?: string
    url: string
}

const query = async () => {
    const response = await (await fetch('./assets/data.json')).json();
    const ships: IShipData[] = [];
    if (response?.data?.allArticle?.edges) {
        for (const edge of response?.data.allArticle.edges) {
            if (edge.node) {
                const sd = edge.node;
                const ship: IShipData = {
                    slug: sd.slug,
                    id: sd.id,
                    name: sd.title,
                    description: sd.body,
                    categories: sd.categories ?? [],
                    tags: sd.tags ?? [],
                    url:`https://robertsspaceindustries.com/galactapedia/article/${sd.id}-${sd.slug}`
                }
                if (sd.template?.length) {
                    for (const t of sd.template) {
                        if (t.SpacecraftShip) {
                            const ss = t.SpacecraftShip;
                            ship.manufacturer = ss.manufacturer || undefined;
                            ship.releaseDate = /\d{4}/.exec(ss.releaseDate ?? '')?.[0] || undefined;
                            ship.role = ss.role || undefined;
                            break;
                        }
                    }
                }
                if (sd.thumbnail?.url) {
                    ship.image = sd.thumbnail.url;
                }
                if (ship.manufacturer) {
                    ships.push(ship)
                }
            }
        }


    }
    return ships;
};
export default query