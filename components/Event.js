import { Card } from "primereact/card";

const Event = ({ title, company, date, technologies, roles }) => (
  <Card className="p-mb-3" title={`${title} - ${company}`} subTitle={date}>
    <label>Technologies</label> : {technologies}
    {roles.map((x, i) => (
      <ul key={i}>
        <li>{x}</li>
      </ul>
    ))}
  </Card>
);

export default Event;
