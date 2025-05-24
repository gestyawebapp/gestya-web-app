import { createContext, useContext, useCallback, useState } from "react";

const CotizaContext = createContext();

export const CotizaProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const updateForm = useCallback((newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  }, []); // useCallback permite que updateForm se conserve entre renders dado que ningún elemento del array de dependencias (en este caso vacío) cambió.

  return (
    <CotizaContext.Provider value={{ formData, updateForm }}>
      {children}
    </CotizaContext.Provider>
  );
};

export const useCotiza = () => useContext(CotizaContext);
