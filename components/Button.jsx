const Button = ({ btnName, classStyles, handleClick }) => (
  <button
    type="button"
    className={`rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-black/70 dark:bg-stackup-gray-text/30  dark:hover:bg-stackup-gray/40 minlg:px-8 minlg:text-lg ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;
