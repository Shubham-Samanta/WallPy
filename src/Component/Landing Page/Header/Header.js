import react from "react";
import classes from "../Header/Header.module.css";
import Logo from "../../../Assets/Logo1.svg";
import User from "../../../Assets/User-info.svg";
import Search from "../../../Assets/search.svg";
import {Link} from "react-router-dom";

const Header = ()=>{
    return(
        <div className={classes.majorContainer}>
            <div className={classes.modalMajorContainerC} id="modCtn" onClick={
                ()=>{
                    document.getElementById('modCtn').classList.remove(classes.modalMajorContainerO);
                    document.getElementById('mod').classList.remove(classes.modalContainerO);
                    document.getElementById('modCtn').classList.add(classes.modalMajorContainerC);
                    document.getElementById('mod').classList.add(classes.modalContainerC);                    
                }
            }>
                <div className={classes.modalContainerC} id="mod">
                    <div className={classes.modalUploadC}>

                    </div>
                </div>
            </div>
            <div className={classes.LogoContainer}>
                <img src={Logo} />
            </div>
            <div className={classes.UtilityContainer}>
                <div className={classes.user}>
                    <img src={User} />
                </div>
                <div className={classes.loginbtn}>
                    <Link to="/Login" className={classes.lnk}>Login</Link>
                </div>
                <div className={classes.searchBar}>
                    <input type="text" className={classes.inputText}/>
                    <button className={classes.button}>
                        <img src={Search} />
                    </button>
                </div>
                <div className={classes.Submit}>
                    <button onClick={(e)=>{
                        document.getElementById('modCtn').classList.remove(classes.modalMajorContainerC);
                        document.getElementById('mod').classList.remove(classes.modalContainerC);
                        document.getElementById('modCtn').classList.add(classes.modalMajorContainerO);
                        document.getElementById('mod').classList.add(classes.modalContainerO);
                    }}
                    >
                        Upload
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Header;



