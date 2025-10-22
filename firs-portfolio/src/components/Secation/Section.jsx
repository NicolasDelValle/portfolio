import "./SectionStyle.css";

function Section({ children, backgroundColor = "" }) {
  return <div className={`section ${backgroundColor}`}>{children}</div>;
}

export default Section;
