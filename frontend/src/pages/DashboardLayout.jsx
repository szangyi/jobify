import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, SmallSidebar, Navbar } from "../components";
import { createContext, useContext, useState } from "react";
import { checkDefaultTheme } from "../App";
const DashboardContext = createContext();

const DashboardLayout = () => {
    // temporary
    const user = { name: "alex" };
    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);

    const toggleDarkTheme = () => {
        console.log("toggle darkness");
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme)
        document.body.classList.toggle('dark-theme', newDarkTheme)
        localStorage.setItem('darkTheme', newDarkTheme)
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar); // equal to the opposite value
    };

    const logoutUser = async () => {
        console.log("logout user");
    };

    return (
        <>
            <DashboardContext.Provider
                value={{
                    user,
                    showSidebar,
                    isDarkTheme,
                    toggleDarkTheme,
                    toggleSidebar,
                    logoutUser,
                }}
            >
                <Wrapper>
                    <main className="dashboard">
                        <SmallSidebar />
                        <BigSidebar />
                        <div>
                            <Navbar />
                            <div className="dashboard-page">
                                <Outlet />
                            </div>
                        </div>
                    </main>
                </Wrapper>
            </DashboardContext.Provider>
        </>
    );
};

export const useDashboardContext = () => useContext(DashboardContext); // custom hook
export default DashboardLayout;
