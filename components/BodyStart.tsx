interface BodyProps {
  onClick: () => void;
}

function BodyStart({ onClick }: BodyProps) {
  return (
    <>
      <div className="body-start" onClick={onClick}>
        <div>
          <img
            src="./jollibee.png"
            alt="jollibee"
            className="jollibee-png"
          ></img>
          <h1 className="text-start">Tap anywhere to begin!</h1>  
        </div>
      </div>
    </>
  );
}

export default BodyStart;
