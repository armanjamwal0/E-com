import AuthChecker from "./src/component/AuthChecker";

function ProtectedRoute({children}){
    return (
        <>
        <AuthChecker/>
        {children}
        </>
    )
}