import { Menu } from '@headlessui/react'
import { Icon } from "Icons";


function Auth() {

    const user = {

        name: 'Beyza Gürsoy',
        avatar: 'https://yt3.ggpht.com/yti/AHyvSCDlCcVIOo8DnS_E0Lt6VBv2eG6W2ohJqEH5iw=s88-c-k-c0x00ffffff-no-rj-mo'
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
                                <a
                                    className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >

                                    <Icon size={16} name="external" />
                                </a>
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
                                    className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >

                                    Parolayı Değiştir

                                    Profil Görüntüle

                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >

                                    Oturumu Kapat
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >
                                    Hesabı Sil

                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}

        </Menu>
    )
}

export default Auth