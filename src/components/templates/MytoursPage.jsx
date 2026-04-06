import MyTour from "@/modules/MyTour";

function MytoursPage({tours}) {
  
  
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
      {
        tours.map(tour=><MyTour tour={tour} key={tour.id} />)
      }
      
    </div>
  );
}

export default MytoursPage;
