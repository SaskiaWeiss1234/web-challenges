import { Children } from "react";

export default function Header({ children }) {
   return ( <header className="header">
        {children}
    </header>
   );
}