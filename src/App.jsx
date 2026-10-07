import React, { useEffect, useReducer } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

const API = "https://api.frankfurter.dev/v1";

// Initial state
const initialState = {
  currencies: {},
  amount: 1,
  from: "USD",
  to: "INR",
  result: "",
};

// Reducer
const reducer = (state, action) => {

  switch (action.type) {

    case "SET_CURRENCIES":
      return {...state,currencies: action.payload,};

    case "SET_AMOUNT":
      return {...state,amount: action.payload,};

    case "SET_FROM":
      return {...state,from: action.payload,};

    case "SET_TO":
      return {...state,to: action.payload,};

    case "SET_RESULT":
      return {...state,result: action.payload,};

    case "SWAP":
      return {...state,from: state.to,to: state.from,result: "",};

    default:
      return state;
  }
};


const App = () => {

  const [state, dispatch] = useReducer(reducer,initialState);


  // Get currency list
  useEffect(() => {

    const getCurrencies = async () => {

      try {

        const promise = axios.get(
          `${API}/currencies`
        );

        toast.promise(promise, {
          loading: "Loading currencies...",
          success: "Currencies loaded successfully!",
          error: "Error occurred!",
        });

        const response = await promise;

        dispatch({
          type: "SET_CURRENCIES",
          payload: response.data,
        });

      } catch (error) {
        console.log(error);
      }
    };

    getCurrencies();

  }, []);


  // Convert currency
  const convertCurrency = async () => {

    if (state.amount <= 0) {
      toast.error("Enter a valid amount");
      return;
    }

    if (state.from === state.to) {

      dispatch({
        type: "SET_RESULT",
        payload: state.amount,
      });

      return;
    }

    try {

      const response = await axios.get(
        `${API}/latest?amount=${state.amount}&base=${state.from}&symbols=${state.to}`
      );

      const convertedAmount =
        response.data.rates[state.to];

      dispatch({
        type: "SET_RESULT",
        payload: convertedAmount,
      });

      toast.success("Currency converted!");

    } catch (error) {

      console.log(error);

      toast.error("Conversion failed!");

    }

  };


  // Swap currencies
  const swapCurrency = () => {

    dispatch({
      type: "SWAP",
    });

  };


  return (

    <div className="app">

      <Toaster position="top-right" />

      <div className="converter">

        <h1>Currency Converter</h1>

        <label>Amount</label>
        <input type="number" value={state.amount} onChange={(e) => dispatch({
              type: "SET_AMOUNT",
              payload: e.target.value,
            })
          }/>


        <div className="currency-row">
          <div>
            <label>From</label>
            <select value={state.from} onChange={(e) =>dispatch({
                  type: "SET_FROM",
                  payload: e.target.value,
                })
              }>

              {Object.keys(state.currencies).map(
                (currency) => (

                  <option key={currency} value={currency}>
                    {currency} - {" "} {state.currencies[currency]}
                  </option>
                )
              )}
            </select>
          </div>

          <button className="swap" onClick={swapCurrency} id="swapbtn"> ⇄ </button>
          
          <div>
            <label>To</label>
            <select value={state.to} onChange={(e) =>
                dispatch({
                  type: "SET_TO",
                  payload: e.target.value,
                })
              }>
        

              {Object.keys(state.currencies).map((currency) => (

                  <option key={currency} value={currency}>
                    {currency} - {" "} {state.currencies[currency]}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        
        <button className="convert" onClick={convertCurrency}> Convert </button>

        {state.result !== "" && (
          <div className="result">
            <h2>
              {state.amount} {state.from} = {Number(state.result).toFixed(2)}{" "}{state.to}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;