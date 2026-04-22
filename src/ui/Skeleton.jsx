
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