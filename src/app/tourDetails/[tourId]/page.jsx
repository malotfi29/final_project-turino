import TourDetailsPage from "@/templates/TourDetailsPage";

async function TourDetails({ params }) {
  const { tourId } = await params;
  const res = await fetch(`${process.env.BASE_URL_SERVER}/tour/${tourId}`, {
    method: "GET",
    credentials: "include",
  });
  const data = await res.json();

  return <TourDetailsPage data={data }/>;
}

export default TourDetails;
