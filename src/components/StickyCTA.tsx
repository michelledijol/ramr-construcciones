import React, { useState, useEffect } from 'react';
import Button from './Button';

interface StickyCTAProps {
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  hideOnFormVisible?: boolean;
}

const StickyCTA: React.FC<StickyCTAProps> = ({
  href = 'https://wa.me/18297177552',
  onClick,
  children = 'Solicitar Presupuesto',
  hideOnFormVisible = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    // Solo mostrar en móvil
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Verificar si hay formularios visibles
    if (hideOnFormVisible) {
      const checkFormVisibility = () => {
        const forms = document.querySelectorAll('form, .popup-overlay, .lightbox');
        setIsFormVisible(forms.length > 0 && Array.from(forms).some(form => 
          form instanceof HTMLElement && form.offsetParent !== null
        ));
      };

      checkFormVisibility();
      const observer = new MutationObserver(checkFormVisibility);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        window.removeEventListener('resize', checkScreenSize);
        observer.disconnect();
      };
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [hideOnFormVisible]);

  if (!isVisible || isFormVisible) return null;

  return (
    <div className="cta-sticky">
      <Button
        variant="primary"
        href={href}
        onClick={onClick}
        aria-label="Solicitar presupuesto por WhatsApp - Roberto Martínez 1-829-717-7552 (barra fija)"
        data-cta="solicitar-presupuesto-sticky"
      >
        {children}
      </Button>
    </div>
  );
};

export default StickyCTA;
