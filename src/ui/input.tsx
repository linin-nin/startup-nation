const Input = (props: any) => {
    return (
      <input
        type={props.text}
        placeholder={props.placeholder}
        className="input"
      />
    );
  };
  
  export default Input;