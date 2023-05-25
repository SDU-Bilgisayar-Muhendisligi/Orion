import { Menu } from '@headlessui/react'
import { Icon } from "Icons";
import Album from 'views/Album';
import Profil from 'views/Profil';
import { NavLink } from 'react-router-dom';

function Auth() {

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
                                    Hesap Genel Görünüm
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >
                                    <NavLink to="/Kayıt" target="_blank">Kayıt Ol</NavLink>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                   
                                >
                                    <NavLink to="/GirişYap" target="_blank">Giriş Yap</NavLink>
                                </a>
                            )}
                        </Menu.Item>
                        
                        <Menu.Item>
                            {({ active }) => (
                                
                                <a 
                                
                                     className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    
                                >
                                 <NavLink to="/Profil" target="_blank">Profil Görüntüle</NavLink>
                                
                                  
                                    
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                
                                <a 
                                
                                     className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    
                                >
                                 <NavLink to="/Profilduzenle" target="_blank">Profil Düzenle</NavLink>
                                
                                  
                                    
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink to="/Dil" className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                    Dil Ayarla
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink to="/Parola" className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                    Parolayı Değiştir
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink to="/Oturumkapatma" className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                    Oturum Kapat
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink to="/Hesapsil" className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}>
                                    Hesap Sil
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