const App = ({ innitialButtonText, innitialClassName }) => {
  const [buttonText, setButtonText] = React.useState(innitialButtonText);
  const [buttonClassName, setButtonClassName] =
    React.useState(innitialClassName);

  const onButtonClick = () => {
    setButtonText('Hello from React');
    setButtonClassName('grean_btn');
  };

  return (
    <div className="app">
      <button className={buttonClassName} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App innitialButtonText="Click me" innitialClassName="" />);
