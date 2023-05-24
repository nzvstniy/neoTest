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
        title: 'Apple Earpods v1',
        price: 1111,
        rate: 1.5, 
        count:1
    },
    {
        id: 2,
        img: 'assets/earpods2.png',
        title: 'Apple Earpods v1',
        price: 2222,
        rate: 2.3, 
        count:1
    },
    {
        id: 3,
        img: 'assets/honor choice x.jpg',
        title: 'Honor Choise X',
        price: 3333,
        rate: 3.1, 
        count:1
    },
    {
        id: 4,
        img: 'assets/honor hp 1.jpg',
        title: 'Honor Buds 1',
        price: 4444,
        rate: 4.7, 
        count:1
    },
    {
        id: 5,
        img: 'assets/jbl.jpg',
        title: 'JBL Headphones',
        price: 5555,
        rate: 5, 
        count:1
    },
    {
        id: 6,
        img: 'assets/sudio.jpg',
        title: 'Sudio Head',
        price: 6666,
        rate: 2, 
        count:1
    },

]

export const Phones: ProductInterface[]=[
    {
        id: 7,
        img: 'assets/galaxy s22.jpg',
        title: 'Samsung Galaxy S322',
        price: 7777,
        rate: 3.3, 
        count:1
    },
    {
        id: 8,
        img: 'assets/iphone.png',
        title: 'Iphone 15',
        price: 8888,
        rate: 4, 
        count:1
    },
    {
        id: 9,
        img: 'assets/mi 12.jpeg',
        title: 'Xiaomi M123',
        price: 9999,
        rate: 3.6, 
        count:1
    },

]
