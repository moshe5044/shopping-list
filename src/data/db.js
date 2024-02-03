const fruits = [
    {
        id: "01",
        name: "Apple",
        color: "Red",
        emoji: "🍎",
        price: 1.99,
        image: "https://i.pinimg.com/originals/c4/d9/ee/c4d9eefa0d4136938ed03c7359286f7a.png"
    },
    {
        id: "02",
        name: "Banana",
        color: "Yellow",
        emoji: "🍌",
        price: 0.99,
        image: "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fruit-PNG/Large_Bananas_PNG_Clipart.png?m=1434276917"
    },
    {
        id: "03",
        name: "Orange",
        color: "Orange",
        emoji: "🍊",
        price: 2.49,
        image: "https://purepng.com/public/uploads/large/purepng.com-orange-orangeorangefruitbitter-orangeorangesclip-art-17015273374288pjtg.png"
    },
    {
        id: "04",
        name: "Grapes",
        color: "Purple",
        emoji: "🍇",
        price: 3.99,
        image: "https://www.freepnglogos.com/uploads/grapes-png/mzr-red-grapes-36.png"
    },
    {
        id: "05",
        name: "Strawberry",
        color: "Red",
        emoji: "🍓",
        price: 2.79,
        image: "https://i.pinimg.com/originals/eb/d4/de/ebd4deb64c74e2f1246626d5a290274d.png"
    },
    {
        id: "06",
        name: "Watermelon",
        color: "Green",
        emoji: "🍉",
        price: 5.99,
        image: "https://pngfre.com/wp-content/uploads/watermelon-27-1024x987.png"
    },
    {
        id: "07",
        name: "Pineapple",
        color: "Yellow",
        emoji: "🍍",
        price: 3.89,
        image: "https://www.vhv.rs/dpng/f/39-392139_fruit-pineapple-hd-png-download.png"
    },
    {
        id: "08",
        name: "Mango",
        color: "Orange",
        emoji: "🥭",
        price: 2.99,
        image: "https://static.vecteezy.com/system/resources/previews/029/200/082/non_2x/mango-transparent-background-free-png.png"
    },
    {
        id: "09",
        name: "Kiwi",
        color: "Brown",
        emoji: "🥝",
        price: 1.79,
        image: "https://static.vecteezy.com/system/resources/previews/008/530/509/original/kiwi-fruit-cutout-file-png.png"
    },
    {
        id: "10",
        name: "Peach",
        color: "Orange",
        emoji: "🍑",
        price: 2.29,
        image: "https://pngfre.com/wp-content/uploads/peach-png-image-from-pngfre-33-1024x815.png"
    },
    {
        id: "11",
        name: "Cherry",
        color: "Red",
        emoji: "🍒",
        price: 4.99,
        image: "https://parspng.com/wp-content/uploads/2023/01/cherrypng.parspng.com-5.png"
    },
    {
        id: "12",
        name: "Pear",
        color: "Green",
        emoji: "🍐",
        price: 1.89,
        image: "https://static.vecteezy.com/system/resources/previews/029/335/116/original/pear-transparent-background-png.png"
    },
    {
        id: "13",
        name: "Plum",
        color: "Purple",
        emoji: "🍑",
        price: 2.69,
        image: "https://pngimg.com/d/plum_PNG8673.png"
    },
    {
        id: "14",
        name: "Raspberry",
        color: "Red",
        emoji: "🍇",
        price: 3.49,
        image: "https://static.vecteezy.com/system/resources/previews/022/825/587/non_2x/raspberry-fruit-raspberries-on-transparent-background-png.png"
    },
    {
        id: "15",
        name: "Lemon",
        color: "Yellow",
        emoji: "🍋",
        price: 1.49,
        image: "https://pngimg.com/d/lemon_PNG25198.png"
    },
    {
        id: "16",
        name: "Cranberry",
        color: "Red",
        emoji: "🍒",
        price: 3.79,
        image: "https://static.vecteezy.com/system/resources/previews/027/144/570/original/fresh-cranberry-isolated-on-transparent-background-png.png"
    },
    {
        id: "17",
        name: "Apricot",
        color: "Orange",
        emoji: "🍑",
        price: 2.19,
        image: "https://static.vecteezy.com/system/resources/previews/015/100/094/non_2x/apricots-transparent-background-free-png.png"
    },
    {
        id: "18",
        name: "Avocado",
        color: "Green",
        emoji: "🥑",
        price: 4.99,
        image: "https://png.pngtree.com/png-clipart/20230114/ourmid/pngtree-photo-of-avocado-png-image_6561465.png"
    },
    {
        id: "19",
        name: "Coconut",
        color: "Brown",
        emoji: "🥥",
        price: 5.49,
        image: "https://pngimg.com/d/coconut_PNG108885.png"
    }
]

const vegetables = [
    { id: "51", name: 'Carrot', color: 'Orange', emoji: '🥕', price: 1.49, image: 'https://purepng.com/public/uploads/large/purepng.com-carrotcarrotdomestic-carrotfast-growingcarrots-1701527243731np6ec.png' },
    { id: "52", name: 'Broccoli', color: 'Green', emoji: '🥦', price: 2.29, image: 'https://static.vecteezy.com/system/resources/previews/025/064/813/original/broccoli-with-ai-generated-free-png.png' },
    { id: "53", name: 'Bell Pepper', color: 'Red', emoji: '🫑', price: 1.99, image: 'https://purepng.com/public/uploads/large/purepng.com-bell-peppervegetables-chilli-bell-pepper-pepper-capsicum-sweet-pepper-chili-941524726191g7h58.png' },
    { id: "54", name: 'Spinach', color: 'Green', emoji: '🍃', price: 1.79, image: 'https://static.vecteezy.com/system/resources/previews/029/719/645/original/spinach-transparent-background-png.png' },
    { id: "55", name: 'Tomato', color: 'Red', emoji: '🍅', price: 2.49, image: 'https://png.pngtree.com/png-clipart/20230113/ourmid/pngtree-red-fresh-tomato-with-green-leaf-png-image_6561484.png' },
    { id: "56", name: 'Cucumber', color: 'Green', emoji: '🥒', price: 1.29, image: 'https://pngimg.com/d/cucumber_PNG12602.png' },
    { id: "57", name: 'Eggplant', color: 'Purple', emoji: '🍆', price: 2.99, image: 'https://freepngimg.com/save/13073-aubergine-png-file/490x490' },
    { id: "58", name: 'Zucchini', color: 'Green', emoji: '🥬', price: 1.69, image: 'https://www.lipmanfamilyfarms.com/wp-content/uploads/2020/09/ZUcchini-hero@2x.png' },
    { id: "59", name: 'Onion', color: 'Brown', emoji: '🧅', price: 0.99, image: 'https://freepngimg.com/thumb/onion/145973-brown-onion-png-image-high-quality.png' },
    { id: "60", name: 'Potato', color: 'Brown', emoji: '🥔', price: 1.19, image: 'https://freepngimg.com/thumb/potato/8-2-potato-png-pic.png' },
    { id: "61", name: 'Cauliflower', color: 'White', emoji: '🥦', price: 2.79, image: 'https://static.vecteezy.com/system/resources/previews/027/215/729/original/cauliflower-cauliflower-transparent-background-ai-generated-free-png.png' },
    { id: "62", name: 'Lettuce', color: 'Green', emoji: '🥬', price: 1.59, image: 'https://i.pinimg.com/originals/60/16/91/6016911336b4930bb9eda15b99ffad36.png' },
    { id: "63", name: 'Radish', color: 'Red', emoji: '🫒', price: 1.39, image: 'https://static.vecteezy.com/system/resources/previews/029/721/408/original/radish-transparent-background-png.png' },
    { id: "64", name: 'Asparagus', color: 'Green', emoji: '🍆', price: 3.49, image: 'https://pngimg.com/d/asparagus_PNG4.png' },
    { id: "65", name: 'Sweet Potato', color: 'Orange', emoji: '🍠', price: 2.09, image: 'https://static.vecteezy.com/system/resources/previews/029/712/252/original/sweet-potato-transparent-background-png.png' },
];

const dairy = [
    { id: "101", name: 'Milk', category: 'Liquid', emoji: '🥛', price: 2.99, image: 'https://purepng.com/public/uploads/large/purepng.com-milkmilkliquidnutritioncow-14115279570641c5j7.png' },
    { id: "102", name: 'Cheese', category: 'Solid', emoji: '🧀', price: 4.49, image: 'https://purepng.com/public/uploads/large/purepng.com-cheese-piecefood-organic-cheese-piece-block-dairy-9415246351700skq0.png' },
    { id: "103", name: 'Butter', category: 'Solid', emoji: '🧈', price: 3.99, image: 'https://purepng.com/public/uploads/large/purepng.com-butterfood-dairy-milk-butter-buttermilk-cream-butterfat-941524621398zsmge.png' },
    { id: "104", name: 'Yogurt', category: 'Semi-solid', emoji: '🍦', price: 1.79, image: 'https://www.karouncheese.com/images/products/1045_tn800_12064.png' },
    { id: "105", name: 'Cream', category: 'Liquid', emoji: '🍶', price: 2.29, image: 'https://png.pngtree.com/png-clipart/20230501/original/pngtree-skin-care-transparent-face-cream-png-image_9129633.png' },
    { id: "106", name: 'Eggs', category: 'Solid', emoji: '🥚', price: 2.99, image: 'https://clipart-library.com/new_gallery/243-2435580_dozen-eggs-png-dozen-of-eggs-png.png' },
    { id: "107", name: 'Sour Cream', category: 'Semi-solid', emoji: '🍶', price: 1.99, image: 'https://www.gaylea.com/wp-content/uploads/2017/10/GayLea_Sour-Cream_500mL_Original_ENG_600x600.png' },
    { id: "108", name: 'Cottage Cheese', category: 'Solid', emoji: '🧀', price: 3.49, image: 'https://pngimg.com/d/cottage_cheese_PNG1.png' },
];

const alcohol = [
    { id: "151", name: 'Red Wine', category: 'Wine', emoji: '🍷', price: 12.99, image: 'https://purepng.com/public/uploads/large/purepng.com-red-wine-bottlebottlenarrowerjarexternalinnersealredwine-1421526457738mz10f.png' },
    { id: "152", name: 'Whiskey', category: 'Spirits', emoji: '🥃', price: 25.99, image: 'https://pngimg.com/d/whisky_PNG21.png' },
    { id: "153", name: 'Vodka', category: 'Spirits', emoji: '🍸', price: 18.99, image: 'https://pngimg.com/d/vodka_PNG98929.png' },
    { id: "154", name: 'Beer', category: 'Beer', emoji: '🍺', price: 5.99, image: 'https://pngimg.com/d/bottle_PNG2096.png' },
    { id: "155", name: 'Champagne', category: 'Sparkling Wine', emoji: '🍾', price: 29.99, image: 'https://pngimg.com/d/champagne_PNG17476.png' },
    { id: "156", name: 'Tequila', category: 'Spirits', emoji: '🥳', price: 22.99, image: 'https://pngimg.com/d/tequila_PNG53.png' },
    { id: "157", name: 'Gin', category: 'Spirits', emoji: '🍸', price: 20.99, image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Hendrick%27s_Gin_-_Bottle.png' },
    { id: "158", name: 'Rum', category: 'Spirits', emoji: '🥃', price: 15.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Appleton_Estate_V-X_bottle.png/1200px-Appleton_Estate_V-X_bottle.png' },
];

let products = {
    "1": {
        "id": "1",
        "name": "Carrot",
        "color": "Orange",
        "emoji": "🥕",
        "price": 1.49,
        "image": "https://purepng.com/public/uploads/large/purepng.com-carrotcarrotdomestic-carrotfast-growingcarrots-1701527243731np6ec.png",
        "amount": 2,
        "status": "not in stock"
    },
    "2": {
        "id": "2",
        "name": "Broccoli",
        "color": "Green",
        "emoji": "🥦",
        "price": 2.29,
        "image": "https://static.vecteezy.com/system/resources/previews/025/064/813/original/broccoli-with-ai-generated-free-png.png",
        "amount": 2,
        "status": "not in stock"
    },
    "3": {
        "id": "3",
        "name": "Bell Pepper",
        "color": "Red",
        "emoji": "🫑",
        "price": 1.99,
        "image": "https://purepng.com/public/uploads/large/purepng.com-bell-peppervegetables-chilli-bell-pepper-pepper-capsicum-sweet-pepper-chili-941524726191g7h58.png",
        "amount": 2,
        "status": "not in stock"
    },
    "4": {
        "id": "4",
        "name": "Spinach",
        "color": "Green",
        "emoji": "🍃",
        "price": 1.79,
        "image": "https://static.vecteezy.com/system/resources/previews/029/719/645/original/spinach-transparent-background-png.png",
        "amount": 2,
        "status": "not in stock"
    },
    "5": {
        "id": "5",
        "name": "Tomato",
        "color": "Red",
        "emoji": "🍅",
        "price": 2.49,
        "image": "https://png.pngtree.com/png-clipart/20230113/ourmid/pngtree-red-fresh-tomato-with-green-leaf-png-image_6561484.png",
        "amount": 2,
        "status": "not in stock"
    },
    "6": {
        "id": "6",
        "name": "Milk",
        "category": "Liquid",
        "emoji": "🥛",
        "price": 2.99,
        "image": "https://purepng.com/public/uploads/large/purepng.com-milkmilkliquidnutritioncow-14115279570641c5j7.png",
        "amount": 2,
        "status": "not in stock"
    },
    "7": {
        "id": "7",
        "name": "Cheese",
        "category": "Solid",
        "emoji": "🧀",
        "price": 4.49,
        "image": "https://purepng.com/public/uploads/large/purepng.com-cheese-piecefood-organic-cheese-piece-block-dairy-9415246351700skq0.png",
        "amount": 2,
        "status": "not in stock"
    },
    "8": {
        "id": "8",
        "name": "Butter",
        "category": "Solid",
        "emoji": "🧈",
        "price": 3.99,
        "image": "https://purepng.com/public/uploads/large/purepng.com-butterfood-dairy-milk-butter-buttermilk-cream-butterfat-941524621398zsmge.png",
        "amount": 2,
        "status": "not in stock"
    },
    "9": {
        "id": "9",
        "name": "Yogurt",
        "category": "Semi-solid",
        "emoji": "🍦",
        "price": 1.79,
        "image": "https://www.karouncheese.com/images/products/1045_tn800_12064.png",
        "amount": 2,
        "status": "not in stock"
    },
    "10": {
        "id": "10",
        "name": "Cream",
        "category": "Liquid",
        "emoji": "🍶",
        "price": 2.29,
        "image": "https://png.pngtree.com/png-clipart/20230501/original/pngtree-skin-care-transparent-face-cream-png-image_9129633.png",
        "amount": 2,
        "status": "not in stock"
    },
    "11": {
        "id": "11",
        "name": "Red Wine",
        "category": "Wine",
        "emoji": "🍷",
        "price": 12.99,
        "image": "https://purepng.com/public/uploads/large/purepng.com-red-wine-bottlebottlenarrowerjarexternalinnersealredwine-1421526457738mz10f.png",
        "amount": 2,
        "status": "not in stock"
    },
    "12": {
        "id": "12",
        "name": "Whiskey",
        "category": "Spirits",
        "emoji": "🥃",
        "price": 25.99,
        "image": "https://pngimg.com/d/whisky_PNG21.png",
        "amount": 2,
        "status": "not in stock"
    },
    "13": {
        "id": "13",
        "name": "Vodka",
        "category": "Spirits",
        "emoji": "🍸",
        "price": 18.99,
        "image": "https://pngimg.com/d/vodka_PNG98929.png",
        "amount": 2,
        "status": "not in stock"
    },
    "14": {
        "id": "14",
        "name": "Beer",
        "category": "Beer",
        "emoji": "🍺",
        "price": 5.99,
        "image": "https://pngimg.com/d/bottle_PNG2096.png",
        "amount": 2,
        "status": "not in stock"
    },
    "15": {
        "id": "15",
        "name": "Champagne",
        "category": "Sparkling Wine",
        "emoji": "🍾",
        "price": 29.99,
        "image": "https://pngimg.com/d/champagne_PNG17476.png",
        "amount": 2,
        "status": "not in stock"
    },
    "16": {
        "id": "16",
        "name": "Apple",
        "color": "Red",
        "emoji": "🍎",
        "price": 1.99,
        "image": "https://i.pinimg.com/originals/c4/d9/ee/c4d9eefa0d4136938ed03c7359286f7a.png",
        "amount": 2,
        "status": "not in stock"
    },
    "17": {
        "id": "17",
        "name": "Banana",
        "color": "Yellow",
        "emoji": "🍌",
        "price": 0.99,
        "image": "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fruit-PNG/Large_Bananas_PNG_Clipart.png?m=1434276917",
        "amount": 2,
        "status": "not in stock"
    },
    "18": {
        "id": "18",
        "name": "Orange",
        "color": "Orange",
        "emoji": "🍊",
        "price": 2.49,
        "image": "https://purepng.com/public/uploads/large/purepng.com-orange-orangeorangefruitbitter-orangeorangesclip-art-17015273374288pjtg.png",
        "amount": 2,
        "status": "not in stock"
    },
    "19": {
        "id": "19",
        "name": "Grapes",
        "color": "Purple",
        "emoji": "🍇",
        "price": 3.99,
        "image": "https://www.freepnglogos.com/uploads/grapes-png/mzr-red-grapes-36.png",
        "amount": 2,
        "status": "not in stock"
    },
    "20": {
        "id": "20",
        "name": "Strawberry",
        "color": "Red",
        "emoji": "🍓",
        "price": 2.79,
        "image": "https://i.pinimg.com/originals/eb/d4/de/ebd4deb64c74e2f1246626d5a290274d.png",
        "amount": 2,
        "status": "not in stock"
    }
}

export default { products, fruits, vegetables, alcohol, dairy } 