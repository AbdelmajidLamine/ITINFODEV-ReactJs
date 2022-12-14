import React, { useRef, useEffect } from "react";

const Paypal =()=> {
  const paypal = useRef();

  useEffect(() => {
     
    window.paypal.Bottons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "sale",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: 650.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

export default Paypal