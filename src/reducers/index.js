import RestoService from "../services/resto-service";

const initialState = {
  menu: [],
  loading: true,
  items: [],
  sum: 0,
};

const reducer = (state = initialState, action) => {
  //console.log(state);
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };
    case "MENU_REQUESTED":
      return {
        ...state,
        menu: state.menu,
        loading: true,
      };
    case "ITEM_ADD_TO_CARD":
      const id = action.payload;

      const item = state.menu.find((item) => item.id === id);
      state.sum += item.price;

      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
        amt: 1,
      };

      const check = state.items.filter((item) => item.id === id);

      if (check.length === 0) {
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }

      const i = state.items.findIndex((el) => el.id === id);
      state.items[i].amt += 1;

      return {
        ...state,
        items: [...state.items],
      };
    case "ITEM_REMOVE_FROM_CARD":
      const idx = action.payload;

      const itemIndex = state.items.findIndex((item) => item.id === idx);
      const itemDel = state.items.find((item) => item.id === idx);
      state.sum -= itemDel.price * itemDel.amt;

      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1),
        ],
      };
    case "POST_DATA":
      const restoServise = new RestoService();
      //console.log(JSON.stringify(state.items));
      restoServise.postMenuItems({
        order: state.items,
      });

      return {
        ...state,
        items: [],
        sum: 0,
      };
    default:
      return state;
  }
};

export default reducer;
