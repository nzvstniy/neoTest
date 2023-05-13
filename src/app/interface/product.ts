export interface ProductInterface {
    id: number;
    img: string;
    title: string;
    price: number;
    rate: number;
    count: number;
}

export const Headphones: ProductInterface[]=[
    {
        id: 1,
        img: 'assets/earpods1.jpg',
        title: 'earpods1',
        price: 1111,
        rate: 1.5, 
        count:1
    },
    {
        id: 2,
        img: 'assets/earpods2.png',
        title: 'earpods2',
        price: 2222,
        rate: 2.3, 
        count:1
    },
    {
        id: 3,
        img: 'assets/honor choice x.jpg',
        title: 'honor choise x',
        price: 3333,
        rate: 3.1, 
        count:1
    },
    {
        id: 4,
        img: 'assets/honor hp 1.jpg',
        title: 'honor buds 1',
        price: 4444,
        rate: 4.7, 
        count:1
    },
    {
        id: 5,
        img: 'assets/jbl.jpg',
        title: 'jbl lorem',
        price: 5555,
        rate: 5, 
        count:1
    },
    {
        id: 6,
        img: 'assets/sudio.jpg',
        title: 'sudio ipsum',
        price: 6666,
        rate: 2, 
        count:1
    },

]

export const Phones: ProductInterface[]=[
    {
        id: 7,
        img: 'assets/galaxy s22.jpg',
        title: 'sudio ipsum',
        price: 7777,
        rate: 3.3, 
        count:1
    },
    {
        id: 8,
        img: 'assets/iphone.png',
        title: 'sudio ipsum',
        price: 8888,
        rate: 4, 
        count:1
    },
    {
        id: 9,
        img: 'assets/mi 12.jpeg',
        title: 'sudio ipsum',
        price: 9999,
        rate: 3.6, 
        count:1
    },

]
