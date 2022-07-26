// Action Creators
// TODO: Create action creators as defined in tests

// Reducer
const initialState = [];

export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote
  }
}

export const removeQuote = (quoteId) => {
  return {
    type: "quotes/remove",
    payload: quoteId
  }
}

export const upvoteQuote = (quoteId) => {
  return {
    type: "quotes/upvote",
    payload: quoteId
  }
}

export const downvoteQuote = (quoteId) => {
  return {
    type: "quotes/downvote",
    payload: quoteId
  }
}

export default function quotesReducer(state = initialState, action) {
  const quote = state.find(
    (quote) => quote.id === action.payload
  );
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];
    case "quotes/remove":
      return state.filter((book) => book.id !== action.payload);
    case "quotes/upvote":
      quote.votes = quote.votes + 1
      return [...state]
    case "quotes/downvote":
      if (quote.votes > 0)  { quote.votes = quote.votes - 1 }
      return [...state]
    default:
      return state;
}
}
