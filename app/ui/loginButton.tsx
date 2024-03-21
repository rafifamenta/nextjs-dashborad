import Loginbutton from './login-form';
import React from 'react';

type LoginButtonProps = {
  onClick: () => void; // Define los tipos de props adecuados
};

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
return <button onClick={onClick}>Iniciar sesión</button>;
};

export default LoginButton;