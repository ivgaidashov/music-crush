export interface CardProp {
    id: number;
    title: string;
    artist: string;
    genre: string;
    new: boolean;
    price: number;
    discount: number | null;
    img: string;
    color: string;
    formats: string[];
}