import { Link, useParams } from 'react-router-dom';

const CountryDetails = (props) => {
  const { id } = useParams();
  const country = props.countries.find((country) => country.alpha3Code === id);

  return (
    <div className="col-7 country-details">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((border) => {
                  const borderCountry = props.countries.find(
                    (country) => country.alpha3Code === border
                  );
                  return (
                    <li key={border}>
                      <Link to={`/${border}`}>{borderCountry.name.common}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
