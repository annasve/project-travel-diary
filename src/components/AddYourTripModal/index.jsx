import { useState } from 'react';
import './style.css';
import { Modal } from '../Modal';

export const AddYourTripModal = ({ countries, onCountrySelect, show }) => {
  const [country, setCountry] = useState('');
  const [days, setDays] = useState();
  const [money, setMoney] = useState();

  const onCancel = (e) => {
    e.preventDefault();
    onCountrySelect('', 0, 0);
    setCountry('');
    setDays('');
    setMoney('');
  };

  const onCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const onDaysChange = (e) => {
    setDays(Number(e.target.value));
  };

  const onMoneyChange = (e) => {
    setMoney(Number(e.target.value));
  };

  const countryCodes = Object.keys(countries);
  let options = countryCodes.map((country) => {
    return (
      <option key={country} value={country}>
        {countries[country].config.name}
      </option>
    );
  });

  if (countryCodes.length > 1) {
    options = [
      <option key={'none'} value="">
        None
      </option>,
      ...options,
    ];
  }

  const formSubmit = (e) => {
    e.preventDefault();
    if (countryCodes.length === 1) {
      onCountrySelect(countryCodes[0], days, money);
    } else {
      onCountrySelect(country, days, money);
    }
    setCountry('');
    setDays('');
    setMoney('');
  };

  return (
    <Modal showModal={show}>
      <form onSubmit={formSubmit}>
        <div className="input row">
          <label>Choose country:</label>
          <select
            name="country"
            value={country}
            onChange={onCountryChange}
            required
          >
            {options}
          </select>
        </div>

        <div className="input row">
          <label>How many days did you spend there?</label>
          <input
            name="days"
            min={1}
            value={days}
            onChange={onDaysChange}
            type="number"
            required
          ></input>
        </div>

        <div className="input row">
          <label>How much money did you spend?</label>
          <input
            name="money"
            min={1}
            value={money}
            onChange={onMoneyChange}
            type="number"
            required
          ></input>
        </div>
        <div className="buttons row">
          <button onClick={onCancel} className="cancel-button">
            Cancel
          </button>
          <div className="space"></div>
          <button type="submit" className="save-button">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};
