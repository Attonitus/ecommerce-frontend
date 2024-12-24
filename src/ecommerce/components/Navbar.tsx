import { NavLink, useLocation, useNavigate } from "react-router-dom"
import './navbar.css';

export const Navbar = () => {

    const {pathname} = useLocation();
    const navigator = useNavigate();

    const onBack = () => {
        navigator(-1);
    }

    return(
        <nav className="navbar">
            <div className="flex-icons items-left">
                {
                    pathname === "/"
                    ? (<button>
                        <span className="material-symbols-outlined nav-icon">
                            menu
                        </span>
                    </button>)

                    : (<button onClick={onBack}> 
                        <span className="material-symbols-outlined nav-icon">
                            arrow_back
                        </span>
                    </button>)
                }
                <button>
                    <span className="material-symbols-outlined nav-icon">
                        search
                    </span>
                </button>
            </div>

            <div className="items-center">
                <NavLink to="/" className="title">NIKIFILINI</NavLink>
            </div>

            <div className="flex-icons items-right">
                <button>
                    <span className="material-symbols-outlined nav-icon">
                        person
                    </span>
                </button>
                <button>
                    <span className="material-symbols-outlined nav-icon">
                        shopping_bag
                    </span>
                </button>
            </div>
        </nav>
    )
}