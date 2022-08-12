import Loading from "./loading.gif";

export default function Spinner() {
  return (
    <div className="text-center">
      <img src={Loading} alt="Loading" />
    </div>
  );
}
