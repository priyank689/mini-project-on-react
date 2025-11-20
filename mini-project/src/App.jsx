// import React from "react";
// import FloatingLines from "./FloatingLines";

// const App = () => {
//   return (
//     <>
//       <div
//         style={{
//           width: "100%",
//           height: "100vh",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         {/* Background Animation */}
//         <FloatingLines
//           enabledWaves={["top", "middle", "bottom"]}
//           lineCount={[10, 15, 20]}
//           lineDistance={[8, 6, 4]}
//           bendRadius={5.0}
//           bendStrength={-0.5}
//           interactive={true}
//           parallax={true}
//         />

//         {/* Text On Top */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <h1
//             style={{
//               color: "white",
//               fontSize: "3rem",
//               fontWeight: "bold",
//               textShadow: "0 0 10px rgba(0,0,0,0.6)",
//             }}
//           >
//             Your Text Goes Here
//           </h1>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

import React from "react";
import FloatingLines from "./FloatingLines";

const App = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Animation */}
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />

        {/* Text On Top */}

        <h1
          style={{
            color: "White",
            fontSize: "5rem",
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(0,0,0,0.6)",
            textAlign: "center",
            // justifyContent: "center",
            // alignItems: "center",
            position: "absolute",
            inset: 0,
            // height: "4rem",
            margin: "2rem  0 0 0",
          }}
        >
          Google
        </h1>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "70%",
            borderRadius: "10rem",
            height: "4rem",
            margin: "11rem  0 0 15rem",
          }}
        >
          <i
            class="fa-solid fa-magnifying-glass"
            style={{ color: "black", fontSize: "2rem", marginRight: "60rem" }}
          ></i>
          <i
            className="fa-brands fa-google"
            style={{ color: "black", fontSize: "2rem" }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default App;
