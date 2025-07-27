import { Oval } from "react-loader-spinner";

export const OvalSpinner = ({ size }) => {
  return (
    <Oval
      visible={true}
      height={size || "80"}
      width={size || "80"}
      color="#3b7b3a"
      ariaLabel="oval-loading"
      wrapperStyle={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "300px",
        width: "100%",
      }}
      wrapperClass=""
    />
  );
};

export default OvalSpinner;
