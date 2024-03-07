import { useNavigate } from "react-router-dom";
import BackwardIcon from '@mui/icons-material/Forward';

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <div className="px-2 flex justify-between mt-4">
      <button onClick={goBack} aria-label="Go Back"><BackwardIcon className="rotate-180" fontSize="large"/>Back</button>
    </div>
    );
}

export default BackButton;