interface WidthLoad {
  widthLoading: number;
  displayLoading: string;
}

function LoadingBar({ widthLoading, displayLoading }: WidthLoad) {
  return (
    <div
      style={{
        display: displayLoading,
        position: "absolute",
        width: "100%",
        height: "4px",
        backgroundColor: "#da001c",
      }}
    >
      <div
        style={{
          width: `${widthLoading}%`,
          height: "100%",
          backgroundColor: "#ff6e00",
          transition: "width 0s ease-out",
        }}
      ></div>
    </div>
  );
}

export default LoadingBar;
