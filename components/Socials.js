const Socials = ({ icon, name }) => {
  return (
    <ul className="p-pr-1">
      <li className="line-none">
        <i className={`pi ${icon} p-mr-2`}></i>
        <label>{name}</label>
      </li>
    </ul>
  );
};

export default Socials;
