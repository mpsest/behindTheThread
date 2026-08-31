import { Link } from "react-router-dom";

export default function Error(){
    return <div>
        <h5>Está perdido? volte <Link to='/'>aqui</Link>   </h5>
    </div>
}

// TODO: Add a more user-friendly error page with navigation options and possibly a search bar to help users find what they're looking for.