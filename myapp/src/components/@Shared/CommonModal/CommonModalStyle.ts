import styled from 'styled-components';

export const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100vh',
    zIndex: '10',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    width: '36rem',
    zIndex: '150',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    overflow: 'auto',
    padding: '3.2rem 4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export const CloseBtn = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: var(--gray40);
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
