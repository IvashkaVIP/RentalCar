import { RotatingLines } from 'react-loader-spinner';

export const Loader = ({ display }) => (
  <div
    style={{
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',      
      width: '100%',
      height: '100vh',
    }}
  >
    <RotatingLines
      strokeColor={'grey'}
      strokeWidth="5"
      animationDuration="0.75"
      width="10%"
      visible={true}
    />
  </div>
);
