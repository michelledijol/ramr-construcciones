import { useState, useEffect } from 'react';

export const useExitIntent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupVariant, setPopupVariant] = useState<'calculator' | 'guide'>('calculator');

  useEffect(() => {
    // Verificar si ya se envió un formulario (cookie de 30 días)
    const hasSubmittedForm = localStorage.getItem('formSubmitted');
    if (hasSubmittedForm) return;

    // Solo mostrar popup después de tiempo en la web (30-45 segundos)
    const timeOnSite = Math.random() * 15000 + 30000; // 30-45 segundos
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
      setPopupVariant('calculator');
    }, timeOnSite);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = () => {
    // Marcar que se envió un formulario
    localStorage.setItem('formSubmitted', 'true');
    setShowPopup(false);
  };

  return {
    showPopup,
    popupVariant,
    closePopup,
    handleFormSubmit
  };
};
