import './style.css';

export const Modal = ({ showModal, children }) => {
  const showClass = showModal ? '' : 'disable-modal';

  return (
    <div className={'modal-background ' + showClass}>
      <div className="modal">{children}</div>
    </div>
  );
};
