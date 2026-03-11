// "use client"

// function Skeleton({width="100%",height="40px",borderRadius="6px"}) {
   
//   return (
//     <div style={{width,height,borderRadius,background:"rgb(159, 207, 171)",animation:"pulse 1.5s infinite"}} >
//       در حال ارسال کد تایید
//     </div>
//   )
// }

// export default Skeleton


"use client";

function SkeletonDots({
  size = 10,
  gap = 6,
  color = "white",
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      <span
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: "50%",
          animation: "bounce 1.4s infinite ease-in-out both",
          animationDelay: "-0.32s",
        }}
      />
      <span
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: "50%",
          animation: "bounce 1.4s infinite ease-in-out both",
          animationDelay: "-0.16s",
        }}
      />
      <span
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: "50%",
          animation: "bounce 1.4s infinite ease-in-out both",
        }}
      />
    </div>
  );
}

export default SkeletonDots;