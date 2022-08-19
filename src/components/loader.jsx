import { Audio } from "react-loader-spinner";

function loader() {
  return (
    <div className="flex justify-center">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="light-blue"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
export default loader;

<Audio
  height="80"
  width="80"
  radius="9"
  color="gray"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>;
