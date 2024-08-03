import Button from '@mui/material/Button';

const CustomButton = ({ label, size, color, onClick }) => {
    return (
        <Button variant="contained" size={size} color={color} onClick={onClick}>
            {label}
        </Button>
    );
};

export default CustomButton;
