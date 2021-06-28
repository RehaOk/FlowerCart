import {
  ADD_TO_CART,
  REDUCE_ITEMS,
  INCREASE_ITEMS,
  REMOVE_FROM_CART,
} from "../actions/actionTypes";
import productImage from "../../assets/productImage.jpg";

const initState = {
  items: [
    {
      id: 0,
      name: "Kol Saati",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 5,
      img: `${productImage}`,
      category: "electronic",
    },
    {
      id: 1,
      name: "Calvin Klein Euphoria",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 7,
      img: `${productImage}`,
      category: "parfume",
    },
    {
      id: 2,
      name: "2 Dal Orkide Çiçeği",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 5,
      img: `${productImage}`,
      category: "flower",
    },
    {
      id: 3,
      name: "925 Ayar Gümüş Bileklik",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 14,
      img: `${productImage}`,
      category: "fashion",
    },
    {
      id: 4,
      name: "Siyah Dağcı Sırt Çantası",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 9,
      img: `${productImage}`,
      category: "sport",
    },
    {
      id: 5,
      name: "Büyük Boy Satranç Takımı",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 8,
      img: `${productImage}`,
      category: "gift",
    },
    {
      id: 6,
      name: "Papyonlu Büyük Ayıcık",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 8,
      img: `${productImage}`,
      category: "toy",
    },
    {
      id: 7,
      name: "Kişisel Bakım Kremi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 12,
      img: `${productImage}`,
      category: "personalCare",
    },
    {
      id: 8,
      name: "Kedi Maması",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 14,
      img: `${productImage}`,
      category: "petshop",
    },
    {
      id: 9,
      name: "Ofis Sandalyesi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 12,
      img: `${productImage}`,
      category: "office",
    },
    {
      id: 10,
      name: "Suç ve Ceza Kitap",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 7,
      img: `${productImage}`,
      category: "book",
    },
    {
      id: 11,
      name: "Kol Saati",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 5,
      img: `${productImage}`,
      category: "electronic",
    },
    {
      id: 12,
      name: "Calvin Klein Euphoria",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 7,
      img: `${productImage}`,
      category: "parfume",
    },
    {
      id: 13,
      name: "2 Dal Orkide Çiçeği",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 5,
      img: `${productImage}`,
      category: "flower",
    },
    {
      id: 14,
      name: "925 Ayar Gümüş Bileklik",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 14,
      img: `${productImage}`,
      category: "fashion",
    },
    {
      id: 15,
      name: "Siyah Dağcı Sırt Çantası",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 9,
      img: `${productImage}`,
      category: "sport",
    },
    {
      id: 16,
      name: "Büyük Boy Satranç Takımı",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 8,
      img: `${productImage}`,
      category: "gift",
    },
    {
      id: 17,
      name: "Papyonlu Büyük Ayıcık",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 8,
      img: `${productImage}`,
      category: "toy",
    },
    {
      id: 18,
      name: "Kişisel Bakım Kremi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 12,
      img: `${productImage}`,
      category: "personalCare",
    },
    {
      id: 19,
      name: "Kedi Maması",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 14,
      img: `${productImage}`,
      category: "petshop",
    },
    {
      id: 20,
      name: "Ofis Sandalyesi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 12,
      img: `${productImage}`,
      category: "office",
    },
  ],
  addedItems: [],
  loading: false,
  total: 0,
  submitResponse: null,
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    let isExistingItem = state.addedItems.find((item) => action.id === item.id);
    if (isExistingItem) {
      isExistingItem.quantity = Number(isExistingItem.quantity) + Number(action.itemQuantity);
      return {
        ...state,
        total: state.total + addedItem.price * Number(action.itemQuantity),
      };
    } else {
      let copyOfAddedItem = {};
      copyOfAddedItem = Object.assign(copyOfAddedItem, addedItem);
      copyOfAddedItem.quantity = Number(action.itemQuantity);
      let newTotal = state.total + addedItem.price * Number(action.itemQuantity);
      return {
        ...state,
        addedItems: [...state.addedItems, copyOfAddedItem],
        total: newTotal,
      };
    }
  }

  if (action.type === REMOVE_FROM_CART) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let remainingItems = state.addedItems.filter((item) => action.id !== item.id);

    let subTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return {
      ...state,
      addedItems: remainingItems,
      total: subTotal,
    };
  }

  if (action.type === INCREASE_ITEMS) {
    let itemToIncreaseQuantity = state.addedItems.find((item) => action.id === item.id);
    itemToIncreaseQuantity.quantity = itemToIncreaseQuantity.quantity + 1;

    let subTotal = state.total + itemToIncreaseQuantity.price;
    return {
      ...state,
      total: subTotal,
    };
  }

  if (action.type === REDUCE_ITEMS) {
    let itemToDecreaseQuantity = state.addedItems.find((item) => action.id === item.id);
    if (itemToDecreaseQuantity.quantity - 1 === 0) {
      let remainingItems = state.addedItems.filter((item) => item.id !== action.id);
      let subTotal = state.total - itemToDecreaseQuantity.price;
      return {
        ...state,
        addedItems: remainingItems,
        total: subTotal,
      };
    } else {
      itemToDecreaseQuantity.quantity = itemToDecreaseQuantity.quantity - 1;
      let subTotal = state.total - itemToDecreaseQuantity.price;
      return {
        ...state,
        total: subTotal,
      };
    }
  }

  return state;
};

export default cartReducer;
