
import { ReactNode } from 'react';

interface OverlayProps {
    open: boolean;
    children?: ReactNode;
    blur?: boolean;
}

function Overlay({ open, children, blur }: OverlayProps) {
    return (
        <div className={`overlay-wrapper ${blur ? 'blur' : ''}`.trim()} hidden={!open}>
            {children}
        </div>
    );
}

export default Overlay;