const Socials = ({ icon, name, type }) => {
  console.log(type);
  return (
    <ul className="p-pr-1">
      <li className="line-none">
        <i className={`pi ${icon} p-mr-2`}></i>
        {type === "link" ? (
          <a href={`https://${name}`}>{name}</a>
        ) : (
          <label>{name}</label>
        )}
      </li>
    </ul>
  );
};

export default Socials;
