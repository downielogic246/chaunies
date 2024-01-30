import React, { useRef, useState } from "react";
const items = [
  {
    id: 0,
    photo: "",
    name: "8oz Cheespaste",
    price: 10.5,
  },
  {
    id: 1,
    photo: "",
    name: "16oz Cheesepaste",
    price: 18.5,
  },
];

// const reducer = (state, action) => {
//   if (action.type === "NAME") {
//     return {
//       left: 0,
//       top: 0,
//       fontSize: "16px",
//       focus: true,
//     };
//   }

//   return state;
// };

const Order = () => {
  // const initialState = {
  //   left: "50px",
  //   top: "55px",
  //   fontSize: "20px",
  //   focus: false,
  // };

  // const [state, dispatch] = React.useReducer(reducer, initialState);

  const delivery = useRef();

  const nameIn = React.useRef();
  const teleIn = React.useRef();

  const [styles, setStyles] = React.useState({
    left: "50px",
    top: "55px",
    fontSize: "20px",
  });

  const [view, setView] = React.useState(false);

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  // const [name, setName] = React.useState(undefined)

  const [mode, setMode] = useState("none");
  const handleChangeOfMode = (e) => {
    let choice = delivery.current.value;

    setMode(choice === "Delivery" ? "block" : "none");
  };

  React.useEffect(() => {
    setStyles(
      view === false
        ? {
            left: "50px",
            top: "65px",
            fontSize: "20px",
          }
        : {
            left: 0,
            top: 0,
            fontSize: "18px",
          }
    );

    // }
  }, [name, phone]);

  const handleOnChange = (e) => {
    // console.log(e.target.value);
    // setName();
    if (e.target.id === "name") {
      setName(e.target.value);
    }

    if (e.target.id === "tele") {
      setPhone(e.target.value);
    }
  };
  // React.useEffect(() => {
  //   setView(!view);
  // }, [styles]);

  return (
    <>
      {/* <!-- Main Area --> */}
      <section className="main-area">
        <div className="order-container">
          <h1 className="order-title">Order Now</h1>
          <div className="special-order">
            <article>
              Welcome to Chaunie's Order Form. Kindly fill out the section below
              to place orders for the 16oz and the 8oz cheesepaste. <br />{" "}
              Special orders can be made via email, chaunies246@outlook.com or
              phonecall, +1 (246) 838-3455
            </article>
          </div>
          <div className="form-container">
            {/* <!-- Form --> */}
            <form action="https://formspree.io/f/mnqyevyz" method="POST">
              {/* <!-- Customer Information Section --> */}
              <fieldset id="customerInfo">
                <legend title="Customer Information">
                  Customer Information
                </legend>
                s{/* <!-- Customer Name --> */}
                <div
                  className="input"
                  style={styles}
                  usus
                  onClick={() => {
                    // if (name === "") {
                    if (view === false) {
                      setView(true);
                      if (name === "" && phone === "") {
                      }
                    }
                    setView();
                    // } else {
                    // setView(true);
                    // }
                    nameIn.current.focus();
                    // if (view === true) {
                    //   nameIn.current.autoFocus = false;
                    // } else {
                    //   // nameIn.current.unfocus();
                    //   nameIn.current.focus();
                    // }
                    if (view === false) {
                    }
                    // dispatch({ type: "NAME" });
                    // console.log(nameIn);
                  }}
                >
                  Full Name
                </div>
                <input
                  value={name}
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                  type="text"
                  name="Customer Name"
                  id="name"
                  ref={nameIn}
                  required={name === "" ? true : false}
                  autoFocus={view}
                  onBlur={() => {
                    setView(name === undefined ? false : true);
                    // setView(false);
                  }}
                />
                <br />
                {/* <!-- End of customer name --> */}
                {/* <!-- Customer Number --> */}
                <div
                  className="input"
                  style={styles}
                  onClick={() => {
                    if (phone === "") {
                      setView(!view);
                    } else {
                      setView(true);
                    }
                    teleIn.current.focus();
                  }}
                >
                  Contact Number
                </div>
                <input
                  value={phone}
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                  ref={teleIn}
                  type="text"
                  name="Customer Contact"
                  id="tele"
                  // placeholder=
                  required
                />
                {/* <!-- End of customer number --> */}
                {/* <!-- Delivery --> */}
                <div className="delivery">
                  <label id="deliveryMode" htmlFor="pickUp">
                    mode of delivery:
                  </label>
                  <br />
                  <select
                    name="Mode of Delivery"
                    id="mode"
                    ref={delivery}
                    onChange={() => {
                      handleChangeOfMode();
                    }}
                  >
                    <option value="Self Pick-Up">Self Pick-Up</option>
                    <option value="Delivery">Delivery</option>
                  </select>
                  <br />

                  <label id="pickup-date" required>
                    Pick Up/Delivery Date
                  </label>
                  <br />
                  <input type="datetime-local" name="Due Date" />
                  <br />
                  <input
                    type="text"
                    name="Address"
                    id="address"
                    placeholder="Address"
                    style={{ display: mode }}
                  />
                </div>
                {/* <!-- End of delivery --> */}
              </fieldset>
              {/* <!-- End of Customer Information --> */}

              {/* <!-- Order info --> */}
              <fieldset id="orderInfo">
                <legend title="Order Information">Order Information</legend>
                <div className="items-container">
                  {items.map((item) => {
                    return (
                      <div className="item" key={item.id}>
                        <h2 className="itemName">{item.name}</h2>
                        <img
                          src={item.photo}
                          alt={item.name}
                          className="itemPhoto"
                        />
                        <div className="description-container">
                          <p className="price">{"$" + item.price.toFixed(2)}</p>
                          <label htmlFor={"Quantity for " + item.name}>
                            Quantity
                          </label>
                          <input
                            type="number"
                            name={"Quantity for " + item.name}
                            className="quantity"
                            id={"quantity-" + item.id}
                            min="0"
                            max="2"
                            data-name={item.name}
                          />
                          {/* <article className="desc">{item.desc}</article> */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </fieldset>
              {/* <!-- Submit button --> */}
              <button id="check" type="submit">
                submit order <i class="fa-solid fa-circle-check"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
