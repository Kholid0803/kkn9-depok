import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">Our partner</h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <img
              className="rounded-xl md:scale-[1.2] lg:scale-[1.5]"
              src={logo}
              width={90}
              height={28}
              alt={logo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
