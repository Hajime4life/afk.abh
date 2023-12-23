import { createContext, useState, useContext } from 'react'

interface SideBarContextType {
	isSideBarOpen: boolean
	toggleSideBar: () => void
}

const SideBarContext = createContext<SideBarContextType | undefined>(undefined)

export const useSideBar = (): SideBarContextType => {
	const context = useContext(SideBarContext)
	if (!context) {
		throw new Error('чет не то ты делаешь бро')
	}
	return context
}

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false)

	const toggleSideBar = () => {
		setIsSideBarOpen(prevState => !prevState)
	}

	const contextValue: SideBarContextType = {
		isSideBarOpen,
		toggleSideBar,
	}

	return <SideBarContext.Provider value={contextValue}>{children}</SideBarContext.Provider>
}
