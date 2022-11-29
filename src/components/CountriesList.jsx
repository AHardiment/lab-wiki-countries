import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((country) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              key={country.alpha3Code}
              to={`/${country.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name}
                style={{ width: '30px', marginRight: '10px' }}
              />
              {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
