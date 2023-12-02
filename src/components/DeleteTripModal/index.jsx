import { Modal } from '../Modal';
import './style.css';

export const DeleteTripModal = ({ country, show, deleteFunction }) => {
  const onDelete = (e) => {
    e.preventDefault();
    deleteFunction(country.code, true);
  };

  const onCancel = (e) => {
    e.preventDefault();
    deleteFunction(country.code, false);
  };

  const countryName = () => {
    return country ? country.name : '';
  };

  return (
    <Modal showModal={show}>
      <form onSubmit={onDelete}>
        <div className="input row delete-row">
          <p>Are you sure you want to delete info about {countryName()}?</p>
        </div>

        <div className="buttons row">
          <button onClick={onCancel} className="cancel-button">
            Cancel
          </button>
          <div className="space"></div>
          <button type="submit" className="save-button">
            Delete
          </button>
        </div>
      </form>
    </Modal>
  );
};
