import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

function Error() {
    const error = useRouteError();

    if (error.status == 404) {
        return (
            <>
                <Wrapper>
                    <div>
                        <img src={img} alt="not found" />
                        <h3>Ohh! Page not found</h3>
                        <Link to="/dashboard">Go to dashboard</Link>
                    </div>
                </Wrapper>
            </>
        );
    }

    return (
        <>
            <Wrapper>
                <h1>Something went wrong :( </h1>
            </Wrapper>
        </>
    );
}
export default Error;
