import React, { createContext, useState, useContext } from "react";

const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  const [globalLoads, setGlobalLoads] = useState([
    { id: "L-9081", route: "Kolkata Hub to Patna", material: "Industrial Pipes", weight: "20T", price: "₹41,000", shipper: "Reliance Retail", status: "Admin Review", distance: "3.2 km" },
    { id: "L-9082", route: "Delhi Cargo to Jaipur Hub", material: "Apparel Crates", weight: "8T", price: "₹18,500", shipper: "Reliance Retail", status: "Admin Review", distance: "12.4 km" }
  ]);

  const placeOrder = (newLoad) => {
    const randomDistance = (Math.random() * 8 + 1).toFixed(1);
    setGlobalLoads((prev) => [
      { 
        ...newLoad, 
        status: "Admin Review", 
        shipper: "Reliance Retail",
        distance: `${randomDistance} km`
      },
      ...prev
    ]);
  };

  const dispatchToDrivers = (loadId) => {
    setGlobalLoads((prev) =>
      prev.map((load) =>
        load.id === loadId ? { ...load, status: "Dispatched to Drivers" } : load
      )
    );
  };

  const driverAcceptLoad = (loadId) => {
    setGlobalLoads((prev) =>
      prev.map((load) =>
        load.id === loadId ? { ...load, status: "Assigned to Fleet" } : load
      )
    );
  };

  return (
    <OrderContext.Provider value={{ globalLoads, placeOrder, dispatchToDrivers, driverAcceptLoad }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    return { globalLoads: [], placeOrder: () => {}, dispatchToDrivers: () => {}, driverAcceptLoad: () => {} };
  }
  return context;
};