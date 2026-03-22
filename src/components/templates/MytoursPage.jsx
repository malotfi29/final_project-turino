import MyTour from "@/modules/MyTour";

function MytoursPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid rgba(0,0,0,0.12)",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <MyTour />
      <MyTour />
      
    </div>
  );
}

export default MytoursPage;
