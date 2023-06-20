import { Menu } from '@headlessui/react'
import { Icon } from "Icons";
import Album from 'views/Album';
import Profil from 'views/Profil';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Auth() {
    const { t } = useTranslation();
    const user = {
        name: 'User',
        avatar: 'https://storage.needpix.com/rsynced_images/profile-2398782_1280.png'
    }

   
    return (
        <Menu as="nav" className={"relative"}>
            {({ open }) => (
                <>
           
                    <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
                        <img src={user.avatar} className={"w-8 h-8 rounded-full p-0.5 mr-2"} />
                        <span className="text-sm font-semibold mr-2">{user.name}</span>
                        <span className={open && 'rotate-180'}>
                            <Icon size={16} name="downDir" />
                        </span>
                    </Menu.Button>
                    <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"}>
                    <Menu.Item>
                            {({ active }) => (
                                <NavLink to="/Hesapgorunum" className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                    {t("account-overview")}
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                               <NavLink to="/Kayıt" className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                               {t("sign-up")}
                           </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink to="/GirişYap" className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                {t("login")}
                            </NavLink>
                            )}
                        </Menu.Item>
                        
                        <Menu.Item>
                            {({ active }) => (
                                
                                <NavLink to="/Profil" className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                {t("account")}
                            </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                
                                <NavLink to="/Profilduzenle" className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                {t("edit-account")}
                            </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink to="/Dil" className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                    {t("language")}
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink to="/Parola" className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                    {t("change-password")}
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink to="/Oturumkapatma" className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                    {t("logout")}
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink to="/Hesapsil" className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                    {t("delete-account")}
                                </NavLink>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
            
        </Menu>
    )
}

export default Auth