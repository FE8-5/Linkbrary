import { Loader } from './LoadingSpinnerStyle';
interface LoadingSpinnerProps {
  width: string;
}

const LoadingSpinner = ({ width }: LoadingSpinnerProps) => {
  return <Loader $width={width}></Loader>;
};

export default LoadingSpinner;
