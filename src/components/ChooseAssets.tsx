
interface DemoProps extends React.FunctionComponent {
    open: boolean;
    onClose?: () => void;
}

const menu = document.getElementById("menu")!;

// this function is used to close the menu
const closeMenu = () => {
    return (event: React.MouseEvent) => {
        menu.classList.remove("w-screen", "h-screen", "opactiy-95");
        menu.classList.add("w-0", "h-0", "opacity-0");
    }
  }

function PopupOverlay({ open, onClose }: DemoProps) {
    return (
        <div id="menu" className="fixed z-90 w-0 h-0 flex justify-center items-center bg-gray-900 opacity-0 duration-700">
            <a href="javascript:void(0)"
                className="fixed top-6 right-8 text-white hover:text-amber-500 text-7xl font-semibold duration-300"
                onClick={onClose}>&times;</a>
            <div className="flex flex-col text-white text-center text-xl font-light space-y-3">
                <a className="hover:text-amber-500 duration-300" href="#">KindaCode.com</a>
                <a className="hover:text-amber-500 duration-300" href="#">About Us</a>
                <a className="hover:text-amber-500 duration-300" href="#">Get In Touch</a>
                <a className="hover:text-amber-500 duration-300" href="#">Privacy Policy</a>
                <a className="hover:text-amber-500 duration-300" href="#">Terms of Use</a>
            </div>
        </div>

)}

export default { PopupOverlay };