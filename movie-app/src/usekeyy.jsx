import { useEffect } from "react";

export function usekeyy(key, closefunction) {

    useEffect(() => {
        const keyhandler = (e) => {
            try {
                if (e.code === key) {
                    closefunction();
                    console.log("hh");
                }
            } catch (error) {
                console.error("Error in key handler:", error);
            }
        };

        document.addEventListener("keydown", keyhandler);
        return () => {
            document.removeEventListener("keydown", keyhandler);
        };
    }, [closefunction, key]);

};