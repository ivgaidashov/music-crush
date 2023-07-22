export type CardProp = {
    id: number;
    title: string;
    artist: string;
    genre: string;
    new: boolean;
    price: number;
    discount: number | null;
    img: string[];
    color: string;
    formats: string[];
    label: string;
    tracklist: string[];
    metacritic: number;
}

type CartInfo = {
    count: number;
    format: string;
}

export type CartItem = CardProp & CartInfo